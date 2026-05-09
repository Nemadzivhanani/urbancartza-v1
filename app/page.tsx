import Image from "next/image";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

// Hardcoded product data
const MOCK_PRODUCTS = [
  { name: "Nike Air Max 90", price: 2999, image: "/airmax90.jpg", isNew: false },
  { name: "Nike Air Max 95", price: 3499, image: "/airmax95.jpg", isNew: true },
  { name: "Nike Air Force 1 '07", price: 2499, image: "/af1.jpg", isNew: false },
  { name: "Nike Shox TL", price: 3299, image: "/shox.jpg", isNew: true },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[75vh] bg-urban-black overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="UrbanCartza Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white mb-4 drop-shadow-xl">
              The New Standard
            </h1>
            <p className="text-xs md:text-sm text-gray-100 uppercase tracking-[0.2em] max-w-md drop-shadow-lg mb-8">
              Curated sneakers, heavy-weight apparel, and tech.
            </p>
            <button className="border-2 border-white bg-transparent text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-urban-black transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </section>

        

        {/* New Arrivals Grid Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-lg md:text-xl font-black uppercase tracking-widest text-urban-black">
              New Arrivals
            </h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-urban-black transition-colors">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
            {MOCK_PRODUCTS.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Categories Banners */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[60vh]">
            
            {/* Sneaker Block */}
            <div className="relative group cursor-pointer overflow-hidden flex items-center justify-center bg-urban-black">
              <Image 
                src="/sneakers-cat.jpg" 
                alt="Sneakers Category" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
              <h3 className="relative z-20 text-3xl font-black uppercase tracking-widest text-white drop-shadow-xl group-hover:scale-110 transition-transform duration-500">
                Sneakers
              </h3>
            </div>
            
            {/* Split Right Side */}
            <div className="grid grid-rows-2 gap-4 h-full">
              
              {/* Tech Block */}
              <div className="relative group cursor-pointer overflow-hidden flex items-center justify-center bg-urban-black">
                <Image 
                  src="/tech-cat.jpg" 
                  alt="Tech Category" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                <h3 className="relative z-20 text-2xl font-black uppercase tracking-widest text-white drop-shadow-xl group-hover:scale-110 transition-transform duration-500">
                  Tech
                </h3>
              </div>
              
              {/* Fragrances Block */}
              <div className="relative group cursor-pointer overflow-hidden flex items-center justify-center bg-urban-black">
                <Image 
                  src="/fragrances-cat.jpg" 
                  alt="Fragrances Category" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                <h3 className="relative z-20 text-2xl font-black uppercase tracking-widest text-white drop-shadow-xl group-hover:scale-110 transition-transform duration-500">
                  Fragrances
                </h3>
              </div>
              
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}