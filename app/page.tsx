import Image from "next/image";
import Header from "@/components/Header";

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
        
        {/* Overlay Content with Dark Background for Maximum Text Contrast */}
        {/* Adding 'bg-black/60' creates a standard semi-transparent dark grey overlay */}
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
    </main>
  );
}