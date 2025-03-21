import { useState } from "react"
import { Layout, Smartphone, Search, Zap, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Individuelles Webdesign",
    description: "Einzigartige Designs, die Ihre Unternehmensidentität widerspiegeln.",
  },
  {
    icon: Smartphone,
    title: "Responsives Layout",
    description: "Perfekte Darstellung auf allen Endgeräten – ob Smartphone, Tablet oder PC.",
  },
  {
    icon: Search,
    title: "SEO-Optimierung",
    description: "Höhere Platzierungen in den Suchmaschinen durch moderne Techniken.",
  },
  {
    icon: Zap,
    title: "Schnelle Ladezeiten",
    description: "Optimierte Performance für eine reibungslose Nutzung.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-Konformität",
    description: "Rechtssichere Webseiten mit allen notwendigen Datenschutzbestimmungen.",
  },
]

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  isOpen: boolean;
  toggleOpen: () => void;
}

function ServiceCard({ service, isOpen, toggleOpen }: ServiceCardProps) {
  return (
    <div id="Service" className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleOpen}>
        <div className="flex items-center space-x-4">
          <service.icon className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold">{service.title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-600">{service.description}</p>
        </div>
      )}
    </div>
  )
}

export default function ServicesOverview() {
  const [openService, setOpenService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen im Überblick</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isOpen={openService === index}
              toggleOpen={() => toggleService(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

