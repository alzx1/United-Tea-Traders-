"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const whatsappNumber = "+919640002059";
  // Using a placeholder map link
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

  // Reusable Decorative Tea Leaf Divider (Darker color for visibility on gold)
  const TeaDivider = () => (
    <div className="flex items-center justify-center gap-4 py-8 opacity-60">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-900"></div>
        <svg className="w-6 h-6 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-900"></div>
    </div>
  );

  return (
    // UPDATED BACKGROUND: A rich gradient from warm beige to golden amber
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbf7] via-[#fceeb5] to-[#f0c38e] text-emerald-950 font-sans selection:bg-emerald-800 selection:text-white relative">
      
      {/* Navigation - Sticky & Glassy */}
      <header className="sticky top-0 z-50 bg-[#fffdf5]/90 backdrop-blur-md border-b border-amber-500/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
               <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-full flex items-center justify-center text-amber-400 font-serif font-bold text-xl border-2 border-amber-500 shadow-md">
                 UT
               </div>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-emerald-950 tracking-tight leading-none">United Tea Traders</h1>
              <p className="text-xs uppercase tracking-wider text-amber-700 font-medium mt-1">Est. 2000 • Hyderabad</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-900">
            <a href="#products" className="hover:text-amber-700 transition-colors">Our Blends</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">Our Story</a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">Visit Us</a>
            <a 
              href={`https://wa.me/${whatsappNumber.replace(/[+\s]/g, "")}`} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-700 hover:to-emerald-800 text-white px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 border border-emerald-700"
            >
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>WhatsApp Order</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center bg-emerald-950 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-50 mix-blend-overlay">
            <Image 
              src="/hero-teashop.jpg" 
              alt="Tea Garden" 
              fill
              className="object-cover grayscale-[30%]"
              priority
            />
          </div>
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-amber-900/20" />
          
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200/10 via-transparent to-transparent opacity-70"></div>

          <div className="relative z-20 text-center max-w-4xl px-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm">
              Wholesale & Retail Since 2000
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
              A Sip of Tradition, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 italic">A Taste of Gold.</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience 25 years of mastery in every blend. Crafted for aroma, strength, and the perfect chai moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="bg-gradient-to-b from-amber-400 to-amber-500 text-emerald-950 px-8 py-4 rounded-lg font-bold hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/30 active:scale-95 relative overflow-hidden group">
                <span className="relative z-10">Explore Premium Blends</span>
                <div className="absolute inset-0 h-full w-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              <a href="#contact" className="border-2 border-amber-200/30 bg-emerald-900/30 backdrop-blur-sm text-amber-100 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-900/50 hover:border-amber-200/50 transition shadow-sm">
                Locate Store
              </a>
            </div>
          </div>
        </section>

        <TeaDivider />

        {/* Products Grid */}
        <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950 mb-3">Our Signature Blends</h3>
            <div className="h-1.5 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-4 shadow-sm"></div>
            <p className="text-emerald-900 font-medium max-w-2xl mx-auto">Handcrafted & family-approved. Discover the perfect balance of flavor and heritage.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative z-10">
            {products.map((p) => (
              // UPDATED CARD: Added backdrop-blur and slight transparency so the gold background shows through subtly
              <div key={p.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-200/60 shadow-md hover:shadow-xl hover:shadow-amber-900/10 hover:border-amber-400 transition-all duration-300 overflow-hidden flex flex-col relative">
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-300 to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200 -z-10"></div>
                
                {/* Image Container */}
                <div className="relative h-64 w-full bg-[#f8f5f0] overflow-hidden border-b border-amber-100">
                  {p.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-yellow-500 text-emerald-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                      BESTSELLER
                    </div>
                  )}
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/5 mix-blend-overlay transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <h4 className="font-serif text-xl font-bold text-emerald-950 group-hover:text-amber-700 transition-colors">
                      {p.name}
                    </h4>
                  </div>
                  <p className="text-emerald-900/70 text-sm mb-6 flex-1 leading-relaxed">{p.desc}</p>
                  
                  <div className="pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4 bg-amber-50 p-3 rounded-lg border border-amber-100">
                      <span className="text-lg font-bold text-emerald-900">{p.price}</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <input
                        type="number"
                        min="1"
                        value={quantities[p.id]}
                        onChange={(e) => handleQtyChange(p.id, e.target.value)}
                        className="w-16 border-2 border-amber-200 rounded-lg px-3 py-2 text-center focus:outline-none focus:border-amber-500 font-medium text-emerald-900 bg-white"
                      />
                      <button
                        onClick={() => orderOnWhatsApp(p)}
                        className="flex-1 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white px-4 py-2 rounded-lg font-bold hover:from-amber-500 hover:to-yellow-500 hover:text-emerald-950 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <TeaDivider />

        {/* Story Section */}
        {/* Updated background to be slightly darker/warmer than the main background to create a "card" effect */}
        <section id="about" className="py-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-amber-100/40 transform skew-y-3 scale-110"></div>
           
           {/* Subtle Tea Branch Graphic */}
           <div className="absolute -right-20 top-0 opacity-10 pointer-events-none">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="#d97706"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>
           </div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 md:order-1">
              <div className="relative pl-8 border-l-4 border-amber-500/50">
                <h3 className="relative text-3xl font-serif font-bold text-emerald-950 mb-6">A Family Tradition <br/>Golden Since 2000.</h3>
                <p className="relative text-emerald-950/80 mb-6 leading-relaxed font-medium">
                  United Tea Traders started from humble beginnings with a single vision: to bring high-quality tea to every household in Hyderabad. 
                  With <strong className="text-amber-800">25 years of experience</strong> passed down through generations, we don't just sell tea; we curate experiences.
                </p>
                <p className="relative text-emerald-950/80 mb-8 leading-relaxed font-medium">
                   Our teas are sourced from the finest gardens, ensuring that every packet delivers that authentic, nostalgic taste of home.
                </p>
                <div className="flex gap-8 p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg border border-amber-200 inline-flex">
                    <div className="text-center">
                        <span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-600 to-amber-800">25+</span>
                        <span className="text-xs uppercase text-emerald-900 font-bold tracking-wider">Years of Trust</span>
                    </div>
                    <div className="w-px bg-amber-400/50 h-12 self-center"></div>
                    <div className="text-center">
                        <span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-600 to-amber-800">10k+</span>
                        <span className="text-xs uppercase text-emerald-900 font-bold tracking-wider">Happy Families</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 group">
               <Image src="/hero-teashop.jpg" alt="Shop History" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 border-4 border-amber-500/20 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <footer id="contact" className="bg-emerald-950 text-stone-300 py-16 relative overflow-hidden font-sans border-t-4 border-amber-500">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">
            
            {/* Brand */}
            <div>
              <h4 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-amber-500">✦</span> United Tea Traders
              </h4>
              <p className="text-sm opacity-80 mb-6 max-w-xs leading-relaxed">
                Premium quality wholesale and retail tea merchants. Serving the community with trust, taste, and tradition for over two decades.
              </p>
            </div>

            {/* Quick Contact */}
            <div>
              <h5 className="text-amber-400 font-bold mb-6 uppercase tracking-widest text-sm border-b border-amber-500/30 pb-2 inline-block">Reach Us</h5>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 group">
                  <span className="text-amber-500 mt-1 group-hover:text-amber-300 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clipRule="evenodd" /></svg>
                  </span>
                  <a href={mapLink} target="_blank" rel="noreferrer" className="hover:text-amber-300 transition leading-relaxed">
                    United Tea Traders,<br/>Old Eidgah Road, Madannapet,<br/>Hyderabad, Telangana
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="text-amber-500 group-hover:text-amber-300 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
                  </span>
                  <a href={`tel:${whatsappNumber}`} className="hover:text-amber-300 transition font-medium">{whatsappNumber}</a>
                </li>
                <li className="flex items-center gap-3">
                   <span className="text-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" /></svg>
                   </span>
                  <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Map Embed with Gold Border */}
            <div className="rounded-xl overflow-hidden border-2 border-amber-600/50 h-56 bg-emerald-900/50 relative shadow-lg shadow-emerald-900/50">
               <iframe 
                 title="Google Map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.178369528119!2d78.49679137516418!3d17.355147983526518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99002c6109c7%3A0x98566935d95dd211!2sUnited%20Tea%20Traders!5e0!3m2!1sen!2sin!4v1767250520149!5m2!1sen!2sin"
                 className="absolute inset-0 w-full h-full opacity-75 hover:opacity-100 transition-opacity grayscale-[50%] hover:grayscale-0" 
                 allowFullScreen="" 
                 loading="lazy"
               ></iframe>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-emerald-900/50 text-center text-xs text-emerald-200/60 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} United Tea Traders. All rights reserved.</p>
            <p className="flex items-center gap-1">Brewed with <span className="text-amber-500">♥</span> in Hyderabad</p>
          </div>
        </footer>

      </main>
    </div>
  );
}

