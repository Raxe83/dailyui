import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast } from "./Toast";

type ToastMessage = {
  id: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
  message?: string;
  header?: string;
};

type ToastContextType = {
  showToast: (toast: Omit<ToastMessage, "id">) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const generateUniqueId = (): string => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const showToast = useCallback(({
    type,
    duration = 5000,
    message,
    header,
  }: Omit<ToastMessage, "id">) => {
    const id = generateUniqueId();
    const newToast = { id, type, duration, message, header };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Set a timeout to remove this specific toast after its duration
    setTimeout(() => {
      closeToast(id);
    }, duration);
    // eslint-disable-next-line
  }, []);

  const closeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            duration={toast.duration}
            message={toast.message}
            header={toast.header}
            onClose={() => closeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

