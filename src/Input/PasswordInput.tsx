import React, { useEffect, useState, useRef } from "react";
import { validationFunctions, ValidationType } from "../Components/Validation/Validation";

interface TextProps {
  text: [string, React.Dispatch<React.SetStateAction<string>>];
  required?: boolean;
  disabled?: boolean;
  spellCheck?: boolean;
  readonly?: boolean;
  validationType?: ValidationType;
  validationParam?: any;
  checkComplexity?: boolean;
}

const TextInput: React.FC<TextProps> = ({
  text,
  spellCheck,
  disabled,
  required,
  readonly,
  validationType,
  validationParam,
  checkComplexity,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [complexity, setComplexity] = useState(0);
  const textInputRef = useRef<HTMLInputElement>(null);

  const checkPasswordComplexity = (password: string): number => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let score = 0;
    if (password.length >= minLength) score++;
    if (hasUpperCase) score++;
    if (hasLowerCase) score++;
    if (hasNumber) score++;
    if (hasSpecialChar) score++;

    if (score < 3) {
      setErrorMessage("Das Passwort ist zu schwach.");
    } else if (score === 3 || score === 4) {
      setErrorMessage("Das Passwort ist mittelmäßig.");
    } else {
      setErrorMessage(null);
    }

    return score;
  };

  useEffect(() => {
    if (text[0].length > 0) {
      setIsFocused(true);
      if (validationType) {
        const isValid = validationFunctions[validationType].validate(text[0], validationParam);
        setHasError(!isValid);
        if (!isValid) {
          const error = validationFunctions[validationType].errorMessage;
          setErrorMessage(typeof error === "function" ? error(validationParam) : error);
        } else {
          setErrorMessage(null);
        }
      }
      if (checkComplexity) {
        setComplexity(checkPasswordComplexity(text[0]));
      }
    }
  }, [text, validationType, validationParam, checkComplexity]);

  const handleBlur = () => {
    if (text[0].length === 0) {
      setIsFocused(false);
    }
    if (validationType) {
      const isValid = validationFunctions[validationType].validate(text[0], validationParam);
      setHasError(!isValid);
      if (!isValid) {
        const error = validationFunctions[validationType].errorMessage;
        setErrorMessage(typeof error === "function" ? error(validationParam) : error);
      } else {
        setErrorMessage(null);
      }
    }
    if (checkComplexity) {
      setComplexity(checkPasswordComplexity(text[0]));
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    textInputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    text[1](e.target.value);
    if (validationType) {
      const isValid = validationFunctions[validationType].validate(e.target.value, validationParam);
      setHasError(!isValid);
      if (!isValid) {
        const error = validationFunctions[validationType].errorMessage;
        setErrorMessage(typeof error === "function" ? error(validationParam) : error);
      } else {
        setErrorMessage(null);
      }
    }
    if (checkComplexity) {
      setComplexity(checkPasswordComplexity(e.target.value));
    }
  };

  const labelClass = () => {
    if (hasError) {
      return "border-red-500 text-red-500";
    }
    return required ? "border-gray-300 text-gray-400" : "border-blue-500 text-blue-500";
  };

  const inputClass = () => {
    if (hasError) {
      return "border-red-500";
    }
    switch (complexity) {
      case 1:
      case 2:
        return "border-red-500"; // Schwach
      case 3:
      case 4:
        return "border-yellow-500"; // Mittelmäßig
      case 5:
        return "border-green-500"; // Stark
      default:
        return required ? "border-gray-300" : "border-blue-500";
    }
  };

  return (
    <div className="m-auto relative w-full pb-4">
      <input
        type="password"
        ref={textInputRef}
        value={text[0]}
        onChange={handleChange}
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
        Password
      </label>
      {hasError && errorMessage && (
        <p className="mt-1 text-red-500 text-xs font-semibold text-left ml-4">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextInput;
