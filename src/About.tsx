import React from "react";
import Roadmap from "./Components/Roadmap";
import { Lightbulb, CircleFadingArrowUp, SquareChartGantt } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* <HeroSection
        imgPos="right"
        header="Our Mission with Daily UI"
        desc="Steigere deine Design-Skills mit spannenden Daily UI Challenges! Jeden Tag eine neue Aufgabe, um deine Kreativität zu fördern und dein Portfolio zu erweitern. Perfekt für Designer aller Erfahrungsstufen. Starte jetzt und bring dein UI-Game auf das nächste Level!"
        alt=""
        imgSrc="placeholder.svg"
      /> */}
      <Roadmap
        title={"Roadmap Title"}
        desc={"dafsadas af adsfafhkl sfaosfgafpo"}
        mapItems={[
          {
            title: "Idee des konzeptes",
            desc: "Das Konzept wurde konzepiert.",
            icon: <Lightbulb size={36} />,
            date: "15.01.2025"
          },
          {
            title: "Ausarbeitung",
            desc: "Das Konzept wurde ausgearbeitet und kann nun in die Planung übergehen",
            icon: <CircleFadingArrowUp size={36} />,
            date: "18.01.2025"
          },
          {
            title: "Planung",
            desc: "Das Konzept wurde geplant. Die Entwicklung kann beginnen.",
            icon: <SquareChartGantt size={36} />,
            date: "21.01.2025"
          },
        ]}
      />
    </div>
  );
};

export default About;
