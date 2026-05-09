import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden text-urban-black">
          <Menu size={20} />
        </div>
        
        {/* Centered Logo for that boutique feel */}
        <div className="flex flex-1 justify-center lg:justify-start">
          <Link href="/" className="text-sm font-black uppercase tracking-widest text-urban-black">
            UrbanCartza<span className="font-light text-gray-400 ml-1">Collective</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-8">
          {['Sneakers', 'Fragrances', 'Tech'].map((item) => (
            <Link key={item} href="#" className="streetwear-label hover:opacity-50 transition-opacity">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right-side Icons */}
        <div className="flex flex-1 items-center justify-end gap-x-4 text-urban-black">
          <Search size={18} strokeWidth={1.5} className="cursor-pointer hover:opacity-50 transition-opacity" />
          <div className="relative cursor-pointer hover:opacity-50 transition-opacity">
            <ShoppingBag size={18} strokeWidth={1.5} />
            {/* The Lay-by orange accent popping on the cart notification */}
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-layby-orange text-[9px] font-bold text-white">
              0
            </span>
          </div>
        </div>
        
      </div>
    </header>
  );
}