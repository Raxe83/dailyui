import { getLastWordsToRecolor } from "./HeroSection"

interface cardProps {
  header: string
  desc: string
  icon: JSX.Element
  alt?: string
}
interface props {
  cardProp: cardProps[]
}

const InfoCard = ({ cardProp }: props) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-12">
        {getLastWordsToRecolor("Warum eine professionelle Webseite?", 1)}
      </h1>
      <div className="grid grid-cols-1 xl:px-40 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardProp.map((card, index) => {
          return (
            <div
              key={index}
              className="flex flex-col min-w-80 items-center bg-gray-50 rounded-3xl p-6 shadow-md"
            >
              <div className="mb-4 bg-gray-50 rounded-full p-2">{card.icon}</div>
              <div className="text-center">
                <h2 className="font-semibold text-xl mb-2">{card.header}</h2>
                <p className="font-medium text-gray-700">{card.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InfoCard

