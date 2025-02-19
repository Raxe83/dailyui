import React from "react";
import { CircleCheck, CircleAlert, Info, CircleX  } from 'lucide-react'
type ToastPropsBase = {
  onClose: () => void;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
};

interface ToastProps extends ToastPropsBase {
  message?: string;
  header?: string;
  description?: string;
}

export const Toast: React.FC<ToastProps> = (props) => {
  const { onClose, type, duration = 5000, message, header, description } = props;
  let styling = "";
  let progressBar = "";

  const chooseIcon = (type: "success" | "error" | "warning" | "info") => {
    switch (type) {
      case "success":
        return <CircleCheck />;
      case "error":
        return <CircleAlert />;
      case "warning":
        return <CircleAlert />;
      default:
        return <Info />;
    }
  };

  switch (type) {
    case "success":
      styling = "bg-green-100 border-green-200 text-green-700";
      progressBar = "bg-green-500";
      break;
    case "error":
      styling = "bg-red-100 border-red-200 text-red-700";
      progressBar = "bg-red-500";
      break;
    case "warning":
      styling = "bg-yellow-100 border-yellow-200 text-yellow-700";
      progressBar = "bg-yellow-500";
      break;
    default:
      styling = "bg-blue-100 border-blue-200 text-blue-700";
      progressBar = "bg-blue-500";
      break;
  }

  return (
    <div
      className={`relative flex flex-row bottom-4 right-4 rounded-lg shadow-lg p-4 max-w-sm w-full ${styling}`}
    >
      <div className="w-6 my-auto mr-4">{chooseIcon(type)}</div>
      <div className="mr-4">
        {header && (
          <>
            <h3 className="font-semibold text-lg mb-1">{header}</h3>
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
          </>
        )}
        {message && <p className="text-gray-700">{message}</p>}
      </div>
      <button
        onClick={onClose}
        className="relative ml-auto my-auto w-4"
        aria-label="Close"
      >
        <CircleX />
      </button>
      <div className={`absolute bottom-0 px-1 left-0 h-0.5 w-full`}>
        <div
          className={`h-full ${progressBar} origin-left w-full`}
          style={{
            animation: `shrinkLeft ${duration}ms linear forwards`,
          }}
        />
        <style>{`
        @keyframes shrinkLeft {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }
      `}</style>
      </div>
    </div>
  );
};

