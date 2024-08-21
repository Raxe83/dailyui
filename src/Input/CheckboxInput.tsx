import React from "react";
import { validationFunctions, ValidationType } from "../Components/Validation/Validation";

type Props = {
  checkboxText: string;
  validationType?: ValidationType;
  validationParam?: any;
};

const CheckboxInput: React.FC<Props> = ({ checkboxText, validationParam, validationType }) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const [hasError, setHasError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const setCheckboxValue = (value: boolean) => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = value;
    }
  };

  React.useEffect(() => {
    if (validationType) {
      const isValid = validationFunctions[validationType].validate("", validationParam);
      setHasError(!isValid);
      if (!isValid) {
        const error = validationFunctions[validationType].errorMessage;
        setErrorMessage(typeof error === "function" ? error(validationParam) : error);
      } else {
        setErrorMessage(null);
      }
    }
  }, [validationType, validationParam]);

  return (
    <div
      className="flex flex-row cursor-pointer select-none"
      onClick={() => setCheckboxValue(!checkboxRef?.current?.checked)}
    >
      <input
        ref={checkboxRef}
        onClick={() => setCheckboxValue(!checkboxRef?.current?.checked)}
        type="checkbox"
        name="Remember Password"
        className="form-checkbox cursor-pointer top-0.5 relative h-5 w-5 mr-2 text-blue-600 border-gray-300 rounded"
      />
      <p className="font-medium text-gray-500">{checkboxText}</p>
    </div>
  );
};

export default CheckboxInput;
