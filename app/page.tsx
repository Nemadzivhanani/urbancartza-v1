import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Clean, minimalist hero section */}
      <section className="flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-urban-black mb-4">
          The New Standard
        </h1>
        <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest max-w-lg">
          Curated sneakers, heavy-weight apparel, and tech.
        </p>
      </section>
    </main>
  );
}