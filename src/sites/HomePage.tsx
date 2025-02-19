import HeroSection from "../Components/HeroSection";
import InfoCard from "../Components/InfoCard";
import { Eye, Coins, Handshake } from "lucide-react";
import ServicesOverview from "../Components/services";
// import Contact from "../Components/Contact";
import Button from "../Components/ui/CustomButton";
import Pricing from "../Components/Pricing";
import { Link as ScrollLink } from "react-scroll";
// import InfoSection from "../Components/InfoSection";

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
            <ScrollLink to="pricing" smooth={true} duration={500}>
              <Button
                color={"daily_ui"}
                round="full"
                onClick={() => {}}
                text="Webseite sichern"
              />
            </ScrollLink>
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
      <ServicesOverview />
      <Pricing
        pricingProp={[
          {
            title: "One Pager",
            detail: "Eine einzelne Webseite",
            price: 500,
            features: [
              { title: "Eine einzelne Webseite", isChecked: true },
              { title: "Responsive Design", isChecked: true },
              { title: "Individuelles Design", isChecked: true },
              { title: "Kontaktformular", isChecked: true },
              { title: "Bildergalerie", isChecked: false },
              { title: "SEO-Grundoptimierung", isChecked: false },
              { title: "Individuelle Funktionen", isChecked: false },
              // { title: "E-Commerce (Shop)", isChecked: false },
              // { title: "Blog-Funktion", isChecked: false },
            ],
          },
          {
            title: "Standart Webseite",
            detail: "Professionelle Webseite mit Unterseiten",
            price: 1.199,
            features: [
              { title: "Bis zu 5 Unterseiten", isChecked: true },
              { title: "Responsive Design", isChecked: true },
              { title: "Individuelles Design", isChecked: true },
              { title: "Kontaktformular", isChecked: true },
              { title: "Bildergalerie", isChecked: true },
              { title: "SEO-Grundoptimierung", isChecked: true },
              { title: "Individuelle Funktionen", isChecked: false },
              // { title: "E-Commerce (Shop)", isChecked: false },
              // { title: "Blog-Funktion", isChecked: false },
            ],
            isPopular: true,
          },
          {
            title: "Komplexe Webseite",
            detail: "Umfangreiche Webseite mit vielen individuellen Funktionen",
            price: 2.499,
            features: [
              { title: "Umfangreiche Webseite", isChecked: true },
              { title: "Responsive Design", isChecked: true },
              { title: "Individuelles Design", isChecked: true },
              { title: "Kontaktformular", isChecked: true },
              { title: "Bildergalerie", isChecked: true },
              { title: "SEO-Grundoptimierung", isChecked: true },
              { title: "Individuelle Funktionen", isChecked: true },
              // { title: "E-Commerce (Shop)", isChecked: true },
              // { title: "Blog-Funktion", isChecked: true },
            ],
          },
        ]}
      />
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage;
