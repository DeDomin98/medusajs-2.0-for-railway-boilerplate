import { Mail, Gift } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="py-20 bg-emerald-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Otrzymaj 10% zniżki na pierwsze zakupy
          </h2>
          
          <p className="text-white/90 mb-8">
            Zapisz się do newslettera i bądź pierwsza/pierwszy, który dowie się o nowościach, 
            promocjach i ekskluzywnych ofertach.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój adres email"
              className="flex-1 px-6 py-3 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-stone-50 transition-colors flex items-center justify-center"
            >
              <Gift className="w-4 h-4 mr-2" />
              Odbierz zniżkę
            </button>
          </form>
          
          <p className="text-white/70 text-xs mt-4">
            Zapisując się wyrażasz zgodę na otrzymywanie newslettera. 
            Możesz zrezygnować w każdej chwili.
          </p>
        </div>
      </div>
    </section>
  )
}