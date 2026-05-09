import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-urban-black text-white pt-20 pb-10 px-4 sm:px-6 mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-white">
              <span className="text-[18px] font-black tracking-[0.15em] leading-none ml-[0.15em]">
                URBANCARTZA
              </span>
              <span className="text-[9px] font-medium tracking-[0.55em] leading-none mt-1.5 ml-[0.55em] text-gray-400">
                COLLECTIVE
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-xs">
              The new standard for curated streetwear, premium fragrances, and imported tech in South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Shop</h4>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Latest Arrivals</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sneakers</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Tech Hub</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Fragrances</Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Support</h4>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">How Lay-by Works</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Track Order</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Returns & Exchanges</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Join The Collective</h4>
            <p className="text-xs text-gray-400">Subscribe for early access to drops and exclusive discounts.</p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border border-gray-700 text-white px-4 py-3 text-xs w-full focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-urban-black px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} UrbanCartza Collective. All rights reserved.
          </p>
          <div className="flex gap-4">
             {/* Payment Icons Placeholder */}
             <span className="text-xs font-bold text-gray-600">VISA</span>
             <span className="text-xs font-bold text-gray-600">MASTERCARD</span>
             <span className="text-xs font-bold text-layby-orange">LAY-BY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}