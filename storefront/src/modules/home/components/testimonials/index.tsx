import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Anna Kowalska",
    rating: 5,
    text: "Wspaniała jakość i dbałość o szczegóły. Naszyjnik ze szmaragdem jest jeszcze piękniejszy niż na zdjęciach.",
    product: "Naszyjnik Szmaragdowa Łza"
  },
  {
    name: "Marek Nowak",
    rating: 5,
    text: "Kupiłem bransoletę dla żony na rocznicę. Była zachwycona! Obsługa na najwyższym poziomie.",
    product: "Bransoletka z Rubinem"
  },
  {
    name: "Katarzyna Wiśniewska",
    rating: 5,
    text: "Kolczyki z labradorytami są absolutnie magiczne. Każdy pyta skąd je mam!",
    product: "Kolczyki Labradoryt Moonlight"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-stone-800 mb-4">
            Co mówią nasi klienci
          </h2>
          <p className="text-stone-600">
            Dołącz do tysięcy zadowolonych klientów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <Quote className="w-8 h-8 text-emerald-200 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-stone-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-medium text-stone-800">{testimonial.name}</p>
                <p className="text-sm text-emerald-600">{testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}