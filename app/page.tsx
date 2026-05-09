import Image from "next/image";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

// Temporary dummy data for the demo
const MOCK_PRODUCTS = [
  { name: "Jordan 4 Retro 'Military Black'", price: 4299, image: "/shoes1.jpg", isNew: true },
  { name: "Bape Sta Low 'White/Black'", price: 3499, image: "/shoes2.jpg", isNew: false },
  { name: "Lattafa Qaed Al Fursan EDP", price: 850, image: "/perfume.jpg", isNew: true },
  { name: "Sony WH-1000XM5 Headphones", price: 7999, image: "/tech.jpg", isNew: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
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

        {/* CSS Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {MOCK_PRODUCTS.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      
    </main>
  );
}