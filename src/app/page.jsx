import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const products = [
  {
    name: "Suhani Family Mix Blend",
    desc: "A family favorite — balanced, rich and fragrant.",
    price: "₹100 / 250g",
    image: "/suhani-mix.jpg",
  },
  {
    name: "Suhani Family Plain Dust",
    desc: "A family favorite — balanced, rich and fragrant.",
    price: "₹100 / 250g",
    image: "/suhani-dust.jpg",
  },
  {
    name: "Raj Kirana Mix Blend",
    desc: "Strong body, perfect for everyday chai.",
    price: "₹80 / 250g",
    image: "/raj-mix.jpg",
  },
  {
    name: "Raj Kirana Plain Dust",
    desc: "Strong body, perfect for everyday chai.",
    price: "₹80 / 250g",
    image: "/raj-dust.jpg",
  },
  {
    name: "Masala Tea",
    desc: "Hand-blended masala for that perfect spice kick.",
    price: "₹120 / 200g",
    image: "/masala-tea.jpg",
  },
  {
    name: "Hotel Blend",
    desc: "Robust, bold and made for milk-heavy chai.",
    price: "₹120 / 250g",
    image: "/hotel-blend.jpg",
  },
  {
    name: "OP Tea Leaves",
    desc: "Whole leaf option — cleaner, lighter cup.",
    price: "₹150 / 250g",
    image: "/op-tea.jpg",
  },
  {
    name: "Kashmiri Tea",
    desc: "Aromatic and floral — a special indulgence.",
    price: "₹250 / 200g",
    image: "/kashmiri-tea.jpg",
  },
  {
    name: "Green Tea",
    desc: "Healthy choice — a special indulgence.",
    price: "₹200 / 200g",
    image: "/green-tea.jpg",
  },
];

  const address = 'Old Eidgah Road, Madannapet, Hyderabad'
  const whatsappNumber = '+919640002059'

  return (
    <div className="min-h-screen bg-cream-50 text-gray-900">
      <header className="bg-gradient-to-r from-green-700 via-green-600 to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
              <Image src="/logo.svg" alt="United Tea Traders Logo" width={40} height={40} />
            </div>
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold">United Tea Traders</h1>
              <p className="text-xs md:text-sm opacity-90">Brewing 25 years of trust • Wholesale & Retail</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="#products" className="hover:underline">Products</Link>
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#gallery" className="hover:underline">Gallery</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
            <a href={`https://wa.me/${whatsappNumber.replace(/[+\s]/g, '')}`} target="_blank" rel="noreferrer" className="bg-white text-green-700 px-4 py-2 rounded-full font-medium shadow">WhatsApp</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 leading-tight">A sip of tradition, a taste of perfection.</h2>
            <p className="mt-4 text-gray-700">United Tea Traders brings 25 years of family passion to every blend. From heritage mixes to aromatic Kashmiri leaf — discover tea crafted with care.</p>

            <div className="mt-6 flex gap-4">
              <Link href="#products" className="inline-block bg-green-700 text-white px-5 py-3 rounded-md font-semibold shadow">Explore Blends</Link>
              <a href={`https://wa.me/${whatsappNumber.replace(/[+\s]/g, '')}`} target="_blank" rel="noreferrer" className="inline-block border border-green-700 text-green-700 px-5 py-3 rounded-md font-semibold">Order on WhatsApp</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Visit Us:</strong> {address}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="/hero-teashop.jpg" alt="United Tea Traders Shop" width={600} height={400} className="w-full h-80 object-cover" />
          </div>
        </section>

        <section id="products" className="mt-12">
          <h3 className="text-2xl font-bold text-green-800">Our Signature Blends</h3>
          <p className="text-sm text-gray-600">Handcrafted & family-approved</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, idx) => (
              <div key={p.name + idx} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div className="h-36 bg-gray-50 rounded-md flex items-center justify-center mb-3 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h4 className="font-semibold text-lg">{p.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium">{p.price}</span>
                  <a href={`https://wa.me/${whatsappNumber.replace(/[+\s]/g, '')}`} target="_blank" rel="noreferrer" className="text-sm bg-green-700 text-white px-3 py-1 rounded">Order</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-green-800">Our Story</h3>
          <p className="mt-3 text-gray-700">United Tea Traders started from humble beginnings in wholesale and retail. With 25 years of experience passed down through generations, our blends celebrate tradition, quality, and the everyday comfort of a perfect cup of chai.</p>
        </section>

        <section id="gallery" className="mt-12">
          <h3 className="text-2xl font-bold text-green-800">Gallery</h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Image key={i} src={`/gallery-${i}.jpg`} alt={`Gallery ${i}`} width={200} height={120} className="w-full h-32 object-cover rounded" />
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-green-800">Contact Us</h3>
          <p className="text-sm text-gray-600 mt-2">Questions, orders, or wholesale inquiries — we’re here to help.</p>

          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li><strong>Address:</strong> {address}</li>
            <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${whatsappNumber.replace(/[+\s]/g, '')}`} target="_blank" rel="noreferrer" className="text-green-700">Message us</a></li>
            <li><strong>Timings:</strong> Mon–Sat, 9 AM – 8 PM</li>
          </ul>

          <div className="mt-4">
            <iframe
              title="map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              className="w-full h-48 rounded"
            />
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold">United Tea Traders</div>
            <div className="text-sm opacity-90">Old Eidgah Road, Madannapet, Hyderabad</div>
          </div>
          <div className="text-sm opacity-90">© {new Date().getFullYear()} United Tea Traders — 25 years of brewing trust</div>
        </div>
      </footer>
    </div>
  )
}





