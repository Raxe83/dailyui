import React from "react";
import { Flame } from "lucide-react";
import Button from "../ui/CustomButton";

interface pricingProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}
interface props {
  pricingProp: pricingProps[];
}

const Pricing = (props: props) => {
  return (
    <div className="w-full py-12 space-x-4 px-24 mt-16 flex flex-row justify-around">
      {props.pricingProp.map((pricing, index) => {
        return (
          <div
            className={`${
              pricing.isPopular ? "p-0.5 pt-1" : "pt-1"
            } rounded-3xl bg-gradient-to-r min-w-96 from-blue-400 to-purple-500`}
          >
            <div className="flex h-full flex-col border-grad items-center justify-center bg-gray-50 text-black py-4 px-14 rounded-3xl shadow-md">
              {/* Badge */}
              {pricing.isPopular && (
                <div className="py-2 flex flex-row w-48 mx-auto -mt-8 px-6 text-white text-center font-bold rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500">
                  <Flame size={24} className="mr-2" />
                  Most Popular
                </div>
              )}
              <div className="text-3xl font-extrabold mt-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900 text-transparent bg-clip-text">
                {pricing.title}
              </div>
              <div className="text-gray-800 text-xl font-semibold mt-4">
                {pricing.price}€
              </div>
              <div className="text-gray-700 font-semibold">per Month</div>
              <div className="my-8 text-center">
                {pricing.features.map((feature) => (
                  <div className="my-4 font-semibold text-gray-700">
                    {feature}
                  </div>
                ))}
                <div>
                  <Button
                    color={"daily_ui"}
                    round="full"
                    onClick={() => {}}
                    text="Get Plan"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pricing;
