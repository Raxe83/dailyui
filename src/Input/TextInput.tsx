import React, { useEffect, useRef, useState } from "react";
import { useValidation } from "../Components/Validation/ValidationContext";
import { validationFunctions, ValidationType } from "../Components/Validation/Validation";

interface TextProps {
  placeholder?: string;
  text: [string, React.Dispatch<React.SetStateAction<string>>];
  required?: boolean;
  disabled?: boolean;
  spellCheck?: boolean;
  readonly?: boolean;
  validationType?: ValidationType;
  validationParam?: any;
}

const TextInput: React.FC<TextProps> = ({
  text,
  placeholder,
  spellCheck,
  disabled,
  required,
  readonly,
  validationType,
  validationParam,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
  const { registerValidation } = useValidation()!;

  const validate = () => {
    if (validationType) {
      const validationFunction = validationFunctions[validationType];
      const isValid = validationFunction.validate(text[0], validationParam);
      setHasError(!isValid);
      if (!isValid) {
        const error = validationFunction.errorMessage;
        setErrorMessage(typeof error === "function" ? error(validationParam) : error);
      } else {
        setErrorMessage(null);
      }
      return isValid;
    }
    return true;
  };

  useEffect(() => {
    registerValidation(validate);
  }, [registerValidation]);

  const handleBlur = () => {
    if (text[0].length === 0) {
      setIsFocused(false);
    }
    validate();
  };

  const handleFocus = () => {
    setIsFocused(true);
    textInputRef.current?.focus();
  };

  const labelClass = () => {
    if (text[0].length > 0) {
      return "border-green-600 text-green-600";
    } else if (hasError) {
      return "border-red-500 text-red-500";
    }
    return required ? "border-gray-300 text-gray-400" : "border-blue-500 text-blue-500";
  };

  const inputClass = () => {
    if (text[0].length > 0) {
      return "border-green-600";
    } else if (hasError) {
      return "border-red-500";
    }
    return required ? "border-gray-300" : "border-blue-500";
  };

  return (
    <div className="m-auto w-full relative pb-4">
      <input
        type="text"
        ref={textInputRef}
        value={text[0]}
        onChange={(e) => text[1](e.target.value)}
        className={`border-b-2 pt-1 w-full h-10 px-[10px] pr-10 dark:bg-darkmode-500 dark:border-darkmode-300 py-0 transition-all outline-none ease-linear ${inputClass()}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        spellCheck={spellCheck}
        readOnly={readonly}
        disabled={disabled}
      />
      <label
        className={`absolute flex flex-row px-2.5 py-0 left-0 bg-white dark:bg-darkmode-500 cursor-text z-10 ${
          isFocused
            ? `transition-all ease-in delay-50 -top-[8px] text-xs ${labelClass()}`
            : `transition-all ease-in delay-50 ${labelClass()} top-[7px]`
        }`}
        onClick={handleFocus}
      >
        {placeholder}
      </label>
      {hasError && errorMessage && <p className="mt-1 text-red-500 text-sm text-left ml-4">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
