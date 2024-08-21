import React from "react";
import Divider from "../Components/Divider";
import TextInput from "../Input/TextInput";
import PasswordInput from "../Input/PasswordInput";
import { ValidationProvider } from "../Components/Validation/ValidationContext";
import { SubmitButton } from "../Input/SubmitButton";

type Props = {};

const Register = (props: Props) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gradient-to-tr cursor-default from-slate-200 to-sky-300 h-full pl-16">
      <ValidationProvider>
        <form
          onSubmit={handleSubmit}
          className="relative h-full text-center px-8 xl:w-5/12 md:w-5/12 sm:w-11/12 xs:w-11/12 pt-32 bg-white"
        >
          <h1 className="text-4xl font-bold cursor-default">Create you'r Account!</h1>
          <h2 className="text-xl font-medium mt-4 cursor-default">Register with:</h2>
          <div className="mx-auto mt-10  w-full">
            <button type="submit" className="mt-4 mx-4 px-4 py-2 border-2 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50">
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </button>
            <button type="submit" className="mt-4 mx-4 px-4 py-2 border-2 text-white rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </button>
            <button type="submit" className="mt-4 mx-4 px-4 py-2 border-2 text-white rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" fill="black">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </button>
          </div>
          <Divider text="or" />
          <h2 className="text-xl font-medium mt-4 cursor-default">Enter details to create you'r Account</h2>
          <div className="flex flex-col mx-auto mt-10  w-full">
            <TextInput
              text={[username, setUsername]}
              placeholder="Username"
              required={true}
              validationType={"noEmptyString"}
            />
            <TextInput text={[email, setEmail]} placeholder="Email" required={true} validationType={"noEmptyString"} />
            <TextInput
              text={[firstName, setFirstName]}
              placeholder="First Name"
              required={true}
              validationType={"noEmptyString"}
            />
            <TextInput
              text={[lastName, setLastName]}
              placeholder="Last Name"
              required={true}
              validationType={"noEmptyString"}
            />
            <PasswordInput text={[password, setPassword]} required={true} validationParam={8} checkComplexity={true} />
            <div className="flex flex-row select-none">
              <input
                type="checkbox"
                name="Remember Password"
                className="form-checkbox cursor-pointer top-0.5 relative h-5 w-5 mr-2 text-blue-600 border-gray-300 rounded"
              />
              <p className="font-medium text-sm text-gray-500">
                I have read and agree to the{" "}
                <a href="/" className="font-bold">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/" className="font-bold">
                  Conditions
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-row mx-auto">
            <SubmitButton text={"Register"} />
          </div>
        </form>
      </ValidationProvider>
    </div>
  );
};

export default Register;
