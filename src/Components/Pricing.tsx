import { Check, X } from "lucide-react"
import Button from "./ui/CustomButton"
import { useUser } from "../user/UserContext"
import { useNavigate } from "react-router-dom"

interface PricingProps {
  title: string
  detail: string
  price: number
  features: { title: string; isChecked: boolean }[]
  isPopular?: boolean
}

interface Props {
  pricingProp: PricingProps[]
}

const Pricing = ({ pricingProp }: Props) => {
  const user = useUser()
  const navigate = useNavigate()

  return (
    <div id="pricing" className="w-full py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-8 sm:mt-12 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingProp.map((pricing, index) => (
          <div
            key={index}
            className={`${
              pricing.isPopular ? "p-0.5 pt-1" : "pt-1"
            } rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500`}
          >
            <div className="flex h-full flex-col border-grad items-center justify-center bg-gray-50 text-black py-4 px-6 sm:px-8 md:px-10 lg:px-14 rounded-3xl shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold mt-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900 text-transparent bg-clip-text text-center">
                {pricing.title}
              </div>
              <div className="text-lg sm:text-xl text-gray-600 max-w-sm text-center mt-2">{pricing.detail}</div>
              <div className="text-gray-800 text-xl font-semibold mt-4">ab {pricing.price}€</div>
              <div className="my-6 sm:my-8 text-center">
                {pricing.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="my-3 sm:my-4 font-semibold text-gray-700 flex flex-row items-center"
                  >
                    {feature.isChecked ? (
                      <Check color="green" className="mr-2 flex-shrink-0" />
                    ) : (
                      <X color="red" className="mr-2 flex-shrink-0" />
                    )}
                    <span className="text-sm sm:text-base">{feature.title}</span>
                  </div>
                ))}
                <div className="mt-6">
                  <Button
                    color="daily_ui"
                    round="full"
                    onClick={() => {
                      user?.setSelectedPlan(pricing.title)
                      user?.setPrice(pricing.price)
                      navigate("/contact")
                    }}
                    text="Bestellen"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing

