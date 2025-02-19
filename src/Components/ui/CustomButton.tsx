import React from "react";

export type ButtonProps = JSX.IntrinsicElements["div"] & {
  text?: string;
  iconSrc?: JSX.Element;
  iconOnly?: boolean;
  disabled?: boolean;
  round?: "small" | "medium" | "large" | "full" | "text";
  warnText?: string; // Warntext, der angezeigt wird, wenn der Button deaktiviert ist
  onClick: () => void;
  color:
    | "primary"
    | "secondary"
    | "danger"
    | "outline_dark"
    | "transparent"
    | "outline_primary"
    | "close"
    | "clear"
    | "clear_dark"
    | "daily_ui"
    | "daily_ui_font";
  dashedBorder?: boolean;
  opacity?: number;
};

const Button: React.FC<ButtonProps> = (
  props: JSX.IntrinsicElements["div"] & ButtonProps
) => {
  const { text, iconSrc, disabled, round, onClick, iconOnly, color } = props;
  let buttonType =
    "bg-blue-500 border border-blue-600 text-gray-100 hover:bg-blue-600 ";
  switch (color) {
    case "danger":
      buttonType =
        "bg-red-500 border border-red-600 text-gray-100 hover:bg-red-500";
      break;
    case "secondary":
      buttonType = "bg-gray-200 text-gray-700 hover:bg-gray-300";
      break;
    case "transparent":
      buttonType = "text-gray-800 border border-transparent bg-transparent ";
      break;
    case "close":
      buttonType = "text-red-400 border hover:bg-red-100 ";
      break;
    case "outline_dark":
      buttonType =
        "bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-100";
      break;
    case "outline_primary":
      buttonType =
        "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-100 ";
      break;
    case "clear":
      buttonType = "bg-transparent text-blue-600 hover:bg-blue-100 ";
      break;
    case "clear_dark":
      buttonType = "bg-transparent text-gray-700 hover:bg-gray-200 ";
      break;
    case "daily_ui":
      buttonType =
        "bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:from-blue-500 hover:to-purple-700 ";
      break;
    case "daily_ui_font":
      buttonType =
        "relative px-4 py-2 font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text transition duration-300 before:absolute before:inset-0 before:bg-gray-100 before:opacity-0 hover:before:opacity-30";
      break;
  }
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        style={props.opacity ? { opacity: `${props.opacity / 100}` } : {}}
        className={`
          relative flex items-center font-semibold justify-center m-1 p-2 
          ${buttonType}
          ${props.dashedBorder && "border-dashed"}
          ${iconOnly ? "rounded-full" : "w-full h-full"} 
          ${
            round === "small"
              ? "rounded-sm"
              : `${
                  round === "medium"
                    ? "rounded-md"
                    : `${
                        round === "large"
                          ? "rounded-lg"
                          : round === "text"
                          ? "rounded-r-lg"
                          : `${round === "full" ? "rounded-full" : ""}`
                      }`
                }`
          } 
          ${
            disabled
              ? "bg-gray-300 text-gray-500 dark:bg-darkmode-400 dark:text-gray-200"
              : ""
          }
`}
      >
        {iconSrc && <div className={`w-5`}>{iconSrc}</div>}
        {text && (
          <span className={`${iconSrc !== undefined && "pl-2"}`}>{text}</span>
        )}
      </button>
    </>
  );
};

export default Button;
