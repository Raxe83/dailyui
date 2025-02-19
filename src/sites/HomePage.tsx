import HeroSection from "../Components/HeroSection";
import InfoCard from "../Components/InfoCard";
import { Eye, Coins, Handshake } from "lucide-react";
import ServicesOverview from "../Components/services";
import Button from "../ui/CustomButton";
import Contact from "../Components/Contact";

const HomePage = () => {
  return (
    <div>
      {/* HeroSection */}
      <HeroSection
        header={
          "Ihre digitale Visitenkarte – maßgeschneidert und professionell"
        }
        desc={
          "In der heutigen digitalen Welt ist eine professionelle Webseite unverzichtbar. Sie ist das Aushängeschild Ihres Unternehmens und oft der erste Eindruck, den potenzielle Kunden gewinnen. Wir erstellen maßgeschneiderte Webseiten, die Ihre Marke oder Ihr Unternehmen optimal präsentieren und Ihre Zielgruppe gezielt ansprechen."
        }
        buttons={[
          <div className="w-full lg:w-4/12">
            <Button
              color={"daily_ui"}
              round="full"
              onClick={() => {}}
              // TODO: Change button text
              text="Jetzt starten"
            />
          </div>,
        ]}
        imgSrc={"modernWorkspace.jpeg"}
        alt={""}
        imgPos={"left"}
      />
      <InfoCard
        cardProp={[
          {
            header: "Erhöhte Sichtbarkeit",
            desc: "Eine gut strukturierte und suchmaschinenoptimierte Webseite sorgt dafür, dass Sie online gefunden werden.",
            icon: (
              <div className="text-blue-600">
                <Eye size={48} />
              </div>
            ),
            alt: "Augen Symbol",
          },
          {
            header: "Mehr Kunden und Umsatz",
            desc: "Durch gezielte Call-to-Actions und eine optimierte Benutzererfahrung steigern Sie Ihre Konversionsrate.",
            icon: (
              <div className="text-green-600">
                <Coins size={48} />
              </div>
            ),
            alt: "Award",
          },
          {
            header: "Vertrauen und Seriosität",
            desc: "Ein ansprechendes Design und eine benutzerfreundliche Navigation vermitteln Professionalität und Glaubwürdigkeit.",
            icon: (
              <div className="text-purple-600">
                <Handshake size={48} />
              </div>
            ),
            alt: "Handshake Symbol",
          },
        ]}
      />

      {/* <InfoSection /> */}
      <ServicesOverview />
      <Contact />
      {/* <Pricing
        pricingProp={[
          {
            title: "Basic",
            price: 9.99,
            features: ["1 User", "10GB Storage", "Basic Support"],
            isPopular: false,
          },
          {
            title: "Pro",
            price: 19.99,
            features: [
              "5 Users",
              "50GB Storage",
              "Priority Support",
              "Advanced Analytics",
            ],
            isPopular: true,
          },
          {
            title: "Enterprise",
            price: 49.99,
            features: [
              "Unlimited Users",
              "1TB Storage",
              "24/7 Support",
              "Custom Solutions",
            ],
            isPopular: false,
          },
        ]}
      /> */}
      {/* <FAQSection /> */}
    </div>
  );
};

export default HomePage;
