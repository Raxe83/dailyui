import { useValidation } from "../Components/Validation/ValidationContext";

type Props = {
  text: string;
};
export const SubmitButton = (props: Props) => {
  const { runValidations } = useValidation()!;

  const handleSubmit = () => {
    const isFormValid = runValidations();
  };

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="mt-4 w-full mx-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {props.text}
    </button>
  );
};
