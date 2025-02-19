import Button from "../ui/CustomButton";
import { getLastWordsToRecolor } from "./HeroSection";

const InfoSection = () => {
  return (
    <div className="w-full py-12 px-24 bg-gray-50 text-black">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <div className="flex flex-col text-center justify-center ml-8 pr-2">
            <div className="font-bold text-4xl">
              {getLastWordsToRecolor("Ready to Elevate Your Design Skills?")}
            </div>
            <div className="font-semibold text-xl mt-4 mb-8">
              Join Daily UI today and start your journey to becoming a better
              UI designer.
            </div>

            <Button color={"daily_ui"} round="full" onClick={() => {}} text="Join Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
