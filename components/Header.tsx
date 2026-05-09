import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Left: Mobile Menu */}
        <div className="flex w-1/3 lg:hidden text-urban-black">
          <Menu size={24} strokeWidth={1.5} className="cursor-pointer" />
        </div>
        
        {/* Left: Desktop Navigation (Hidden on mobile) */}
        <nav className="hidden w-1/3 lg:flex lg:gap-x-8">
          {['Sneakers', 'Fragrances', 'Tech'].map((item) => (
            <Link key={item} href="#" className="streetwear-label hover:opacity-50 transition-opacity">
              {item}
            </Link>
          ))}
        </nav>

        {/* Center: The New Stacked Logo */}
        <div className="flex w-1/3 justify-center">
          <Link href="/" className="flex flex-col items-center text-urban-black group">
            {/* Main Brand */}
            <span className="text-[14px] sm:text-[16px] font-black tracking-[0.15em] leading-none ml-[0.15em] group-hover:opacity-70 transition-opacity">
              URBANCARTZA
            </span>
            {/* Sub Brand - Smaller text, wider tracking to match width */}
            <span className="text-[7px] sm:text-[8px] font-medium tracking-[0.55em] leading-none mt-1.5 ml-[0.55em] text-gray-500 group-hover:opacity-70 transition-opacity">
              COLLECTIVE
            </span>
          </Link>
        </div>

        {/* Right: Search & Cart */}
        <div className="flex w-1/3 items-center justify-end gap-x-5 text-urban-black">
          <Search size={22} strokeWidth={1.5} className="cursor-pointer hover:opacity-50 transition-opacity" />
          <div className="relative cursor-pointer hover:opacity-50 transition-opacity">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-layby-orange text-[9px] font-bold text-white">
              0
            </span>
          </div>
        </div>
        
      </div>
    </header>
  );
}