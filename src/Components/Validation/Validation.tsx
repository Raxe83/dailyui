export const validationFunctions = {
  noEmptyString: {
    validate: (value: string) => value.trim() !== "",
    errorMessage: "This field cannot be empty.",
  },
  noCapitalLetters: {
    validate: (value: string) => !/[A-Z]/.test(value),
    errorMessage: "Capital letters are not allowed.",
  },
  minLength: {
    validate: (value: string, minLength: number) => value.length >= minLength,
    errorMessage: (minLength: number) => `At least ${minLength} characters are required.`,
  },
  maxLength: {
    validate: (value: string, maxLength: number) => value.length <= maxLength,
    errorMessage: (maxLength: number) => `Maximum ${maxLength} characters are allowed.`,
  },
  notFalse: {
    validate: (value: string) => value === "true",
    errorMessage: () => "must be checked",
  },
};

export type ValidationType = keyof typeof validationFunctions;
