import { Instagram as InstagramIcon } from 'lucide-react'

const instagramPosts = [
  { id: 1, image: "/instagram/1.jpg", likes: 234 },
  { id: 2, image: "/instagram/2.jpg", likes: 189 },
  { id: 3, image: "/instagram/3.jpg", likes: 456 },
  { id: 4, image: "/instagram/4.jpg", likes: 321 },
  { id: 5, image: "/instagram/5.jpg", likes: 567 },
  { id: 6, image: "/instagram/6.jpg", likes: 423 }
]

export default function Instagram() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <InstagramIcon className="w-6 h-6 text-emerald-600" />
            <span className="text-emerald-600 font-medium">@emeraldstone.pl</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-stone-800 mb-4">
            Dołącz do naszej społeczności
          </h2>
          <p className="text-stone-600">
            Śledź nas na Instagramie i bądź na bieżąco z nowościami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/emeraldstone.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg overflow-hidden"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white/30" />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-bold">{post.likes}</p>
                  <p className="text-xs">polubień</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}