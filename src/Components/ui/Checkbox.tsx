import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, disabled }) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        className="hidden"
        disabled={disabled}
      />
      <div
        className={`w-6 h-6 flex items-center justify-center border-2 rounded-md transition-all ${
          checked ? "bg-blue-500 border-blue-500" : "bg-white border-gray-400"
        }`}
      >
        {checked && (
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12l5 5L20 7" />
          </svg>
        )}
      </div>
      {label && <span className="text-gray-800 text-sm">{label}</span>}
    </label>
  );
};

export default Checkbox;
