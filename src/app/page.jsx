"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const whatsappNumber = "+919640002059";
  // Updated map link for better reliability
  const mapLink = "https://maps.google.com/?q=United+Tea+Traders+Old+Eidgah+Road+Madannapet+Hyderabad";

  const products = [
    { id: "suhani-mix", name: "Suhani Family Mix Blend", desc: "A family favorite — balanced, rich and fragrant.", price: "₹100 / 250g", image: "/suhani-mix.jpg", featured: true },
    { id: "suhani-dust", name: "Suhani Family Plain Dust", desc: "Strong and quick brewing — perfect for morning wake-ups.", price: "₹100 / 250g", image: "/suhani-dust.jpg" },
    { id: "raj-mix", name: "Raj Kirana Mix Blend", desc: "Strong body, perfect for everyday chai lovers.", price: "₹80 / 250g", image: "/raj-mix.jpg" },
    { id: "raj-dust", name: "Raj Kirana Plain Dust", desc: "Robust dust tea for a darker, stronger cup.", price: "₹80 / 250g", image: "/raj-dust.jpg" },
    { id: "masala", name: "Masala Tea", desc: "Hand-blended with cardamom, ginger, and cloves.", price: "₹120 / 250g", image: "/masala-tea.jpg", featured: true },
    { id: "hotel", name: "Hotel Blend", desc: "Robust, bold and made for milk-heavy chai.", price: "₹120 / 250g", image: "/hotel-blend.jpg" },
    { id: "op", name: "OP Tea Leaves", desc: "Whole leaf option — cleaner, lighter cup.", price: "₹150 / 250g", image: "/op-tea.jpg" },
    { id: "kashmiri", name: "Kashmiri Tea", desc: "Aromatic and floral — a special pink tea indulgence.", price: "₹250 / 250g", image: "/kashmiri-tea.jpg" },
    { id: "green", name: "Green Tea", desc: "Healthy choice — rich in antioxidants.", price: "₹200 / 250g", image: "/green-tea.jpg" },
  ];

  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    products.forEach((p) => (initial[p.id] = 1));
    return initial;
  });

  function handleQtyChange(id, value) {
    const n = Math.max(1, Number(value || 1));
    setQuantities((q) => ({ ...q, [id]: n }));
  }

  function orderOnWhatsApp(product) {
    const qty = quantities[product.id] || 1;
    const message = `Assalamualaikum, I'd like to order ${qty} pack(s) of ${product.name} (${product.price}) from United Tea Traders.`;
    const url = `https://wa.me/${whatsappNumber.replace(/[+\s]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Navigation - Sticky & Glassy */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
               {/* Ensure you have a logo.png or svg in public folder */}
               <div className="w-full h-full bg-emerald-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                 UT
               </div>
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-emerald-950 tracking-tight">United Tea Traders</h1>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-stone-500 font-medium">Est. 2000 • Hyderabad</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#products" className="hover:text-emerald-800 transition-colors">Our Blends</a>
            <a href="#about" className="hover:text-emerald-800 transition-colors">Our Story</a>
            <a href="#contact" className="hover:text-emerald-800 transition-colors">Visit Us</a>
            <a 
              href={`https://wa.me/${whatsappNumber.replace(/[+\s]/g, "")}`} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2"
            >
              <span>WhatsApp Order</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-emerald-900 overflow-hidden">
          {/* Background Image Placeholder - Replace src with a real tea garden or shop image */}
          <div className="absolute inset-0 opacity-40">
            <Image 
              src="/hero-teashop.jpg" 
              alt="Tea Garden" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent" />
          
          <div className="relative z-10 text-center max-w-4xl px-6">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-200 border border-amber-500/30 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 backdrop-blur-sm">
              Wholesale & Retail
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-sm">
              Brewing 25 Years <br/><span className="text-amber-400 italic">of Trust</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light">
              From the heritage lanes of Hyderabad to your cup. Experience the perfect balance of tradition, aroma, and strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="bg-white text-emerald-950 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition shadow-xl">
                Shop Collections
              </a>
              <a href="#contact" className="border border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition">
                Locate Store
              </a>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-3">Signature Blends</h3>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">Hand-picked and blended to perfection. Whether you like it strong, spiced, or floral, we have a cup for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((p) => (
              <div key={p.id} className="group bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 w-full bg-stone-100 overflow-hidden">
                  {p.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      BESTSELLER
                    </div>
                  )}
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      {p.name}
                    </h4>
                  </div>
                  <p className="text-stone-500 text-sm mb-6 flex-1">{p.desc}</p>
                  
                  <div className="border-t border-stone-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-emerald-900">{p.price}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        value={quantities[p.id]}
                        onChange={(e) => handleQtyChange(p.id, e.target.value)}
                        className="w-16 border border-stone-200 rounded-lg px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => orderOnWhatsApp(p)}
                        className="flex-1 bg-emerald-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-900 active:scale-95 transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section id="about" className="bg-stone-100 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-50 blur-xl"></div>
                <h3 className="relative text-3xl font-serif font-bold text-emerald-950 mb-6">A Family Tradition <br/>Poured Into Every Cup</h3>
                <p className="relative text-stone-600 mb-6 leading-relaxed">
                  United Tea Traders started from humble beginnings with a single vision: to bring high-quality tea to every household in Hyderabad. 
                  With <strong>25 years of experience</strong> passed down through generations, we don't just sell tea; we curate experiences.
                </p>
                <p className="relative text-stone-600 mb-8 leading-relaxed">
                   Our teas are sourced from the finest gardens in Assam and Darjeeling, ensuring that every packet of Suhani or Raj blend delivers that authentic, nostalgic taste of home.
                </p>
                <div className="flex gap-4">
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-emerald-800">25+</span>
                        <span className="text-xs uppercase text-stone-500 tracking-wider">Years</span>
                    </div>
                    <div className="w-px bg-stone-300 h-10 self-center"></div>
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-emerald-800">10k+</span>
                        <span className="text-xs uppercase text-stone-500 tracking-wider">Families</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <Image src="/hero-teashop.jpg" alt="Shop History" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <footer id="contact" className="bg-emerald-950 text-stone-300 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            
            {/* Brand */}
            <div>
              <h4 className="text-2xl font-serif font-bold text-white mb-4">United Tea Traders</h4>
              <p className="text-sm opacity-80 mb-6 max-w-xs">
                Quality tea wholesale and retail shop. Serving the community with trust and taste for over two decades.
              </p>
              <div className="flex gap-4">
                 {/* Social Icons Placeholder */}
                 <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer transition">F</div>
                 <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer transition">I</div>
                 <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer transition">W</div>
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">📍</span>
                  <a href={mapLink} target="_blank" rel="noreferrer" className="hover:text-white transition">
                    United Tea Traders<br/>Old Eidgah Road, Madannapet,<br/>Hyderabad, Telangana
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-500">📞</span>
                  <a href={`tel:${whatsappNumber}`} className="hover:text-white transition">{whatsappNumber}</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-500">⏰</span>
                  <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden border border-emerald-800 h-48 bg-emerald-900/50 relative">
               <iframe 
                 title="Google Map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.868667634865!2d78.498!3d17.370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzEyLjAiTiA3OMKwMjknNTIuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity" 
                 allowFullScreen="" 
                 loading="lazy"" 
                 className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity" 
                 allowFullScreen="" 
                 loading="lazy"
               ></iframe>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-emerald-900 text-center text-xs opacity-60">
            © {new Date().getFullYear()} United Tea Traders. All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
}

