import type React from "react";
import { useState, useEffect, useRef } from "react";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const openDropdown = () => setIsOpen(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={toggleDropdown}>{trigger}</div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 p-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

interface DropdownItemProp {
  icon?: JSX.Element;
  itemColor?: "Danger" | "Warning" | "Default" | "Info";
}

export const DropdownItem: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & DropdownItemProp
> = ({ children, ...props }) => {
  let itemStyle = "";
  switch (props.itemColor) {
    case "Danger":
      itemStyle = "text-red-600 hover:bg-red-100/50 hover:text-red-700";
      break;
    case "Warning":
      itemStyle =
        "text-yellow-600 hover:bg-yellow-100/50 hover:text-yellow-700";
      break;
    case "Info":
      itemStyle = "text-blue-600 hover:bg-blue-100/50 hover:text-blue-700";
      break;
    default:
      itemStyle = "text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  }

  return (
    <button
      className={`flex flex-row w-full text-left px-4 py-2 text-sm ${itemStyle}`}
      role="menuitem"
      {...props}
    >
      <p className="mr-2">{props.icon}</p>
      {children}
    </button>
  );
};

export const useDropdown = () => {
  const dropdownRef = useRef<{ openDropdown: () => void } | null>(null);

  const setDropdownRef = (ref: { openDropdown: () => void } | null) => {
    dropdownRef.current = ref;
  };

  const openDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.openDropdown();
    }
  };

  return { setDropdownRef, openDropdown };
};
