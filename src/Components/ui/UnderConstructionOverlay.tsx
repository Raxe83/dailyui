import type React from "react";
import { useEffect } from "react";
import { Construction } from "lucide-react";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

interface UnderConstructionOverlayProps {
  message?: string;
}

const UnderConstructionOverlay: React.FC<UnderConstructionOverlayProps> = ({
  message = "This page is under construction",
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.classList.add("overflow-hidden");

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 text-center">
        <Construction className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
        <h2 className="text-2xl font-bold mb-2">Wartungsarbeiten!</h2>
        <p className="text-gray-600 mb-8">{message}</p>
        <CustomButton
          color={"primary"}
          text="zur Startseite"
          round="large"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default UnderConstructionOverlay;
