import React, { createContext, useContext, useRef } from "react";

interface ValidationContextType {
  registerValidation: (validate: () => boolean) => void;
  runValidations: () => boolean;
}

const ValidationContext = createContext<ValidationContextType | null>(null);

export const useValidation = () => {
  return useContext(ValidationContext);
};

export const ValidationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const validations = useRef<(() => boolean)[]>([]);

  const registerValidation = (validate: () => boolean) => {
    validations.current.push(validate);
  };

  const runValidations = () => {
    return validations.current.every((validate) => validate());
  };

  return (
    <ValidationContext.Provider value={{ registerValidation, runValidations }}>{children}</ValidationContext.Provider>
  );
};
