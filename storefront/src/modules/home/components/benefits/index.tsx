import { Shield, Truck, Award, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: "Gwarancja autentyczności",
    description: "Certyfikowane kamienie naturalne"
  },
  {
    icon: Truck,
    title: "Darmowa dostawa",
    description: "Przy zamówieniach powyżej 500 zł"
  },
  {
    icon: Award,
    title: "Rękodzieło najwyższej jakości",
    description: "Ręcznie wykonane przez mistrzów"
  },
  {
    icon: HeartHandshake,
    title: "Satysfakcja gwarantowana",
    description: "30 dni na zwrot bez pytań"
  }
]

export default function Benefits() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors mb-4">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-medium text-stone-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-stone-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}