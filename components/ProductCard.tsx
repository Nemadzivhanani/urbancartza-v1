import Image from 'next/image';

interface ProductProps {
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  // Calculate the 3-month lay-by amount
  const laybyAmount = (product.price / 3).toFixed(2);

  return (
    <div className="group flex flex-col gap-3 cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-urban-grey">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-urban-black text-white text-[8px] font-bold px-2 py-1 tracking-widest uppercase z-10">
            New
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-urban-black group-hover:opacity-70 transition-opacity">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-urban-black">
          R {product.price.toLocaleString()}
        </p>
        
        {/* Lay-by Pricing */}
        <p className="text-[9px] text-layby-orange font-bold uppercase italic tracking-tighter mt-1">
          Or 3 x Lay-by payments of R {laybyAmount}
        </p>
      </div>

      {/* Action Button */}
      <div className="flex flex-col gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-full py-2.5 text-[9px] font-bold uppercase tracking-widest border border-urban-black text-urban-black hover:bg-urban-black hover:text-white transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}