import { motion } from "framer-motion"
import { Rocket, Target, Users, Shield, Clock, HeartHandshake } from "lucide-react"

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovative Lösungen",
      description: "Wir setzen auf modernste Technologien und kreative Ansätze, um Ihr Projekt zum Erfolg zu führen.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Maßgeschneiderte Entwicklung",
      description: "Jedes Projekt wird individuell auf Ihre spezifischen Anforderungen und Ziele zugeschnitten.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Erfahrenes Team",
      description: "Unser Team besteht aus erfahrenen Experten, die ihr Handwerk verstehen und lieben.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Qualitätssicherung",
      description: "Höchste Qualitätsstandards und regelmäßige Code-Reviews garantieren erstklassige Ergebnisse.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Termintreue",
      description: "Wir halten uns an vereinbarte Zeitpläne und kommunizieren transparent über den Projektfortschritt.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Langfristige Partnerschaft",
      description: "Wir begleiten Sie auch nach Projektabschluss und stehen Ihnen als zuverlässiger Partner zur Seite.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">Warum Rayden Studios?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto">
            Entdecken Sie, was uns von anderen unterscheidet und warum führende Unternehmen auf unsere Expertise
            vertrauen.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-primary/5 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-medium text-gray-800">
              "Mit Rayden Studios haben wir einen Partner gefunden, der nicht nur technisch brilliert, sondern auch
              versteht, wie wichtig der menschliche Aspekt in der Zusammenarbeit ist."
            </p>
          </div>
          <p className="mt-4 font-semibold text-gray-700">- Zufriedener Kunde</p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

