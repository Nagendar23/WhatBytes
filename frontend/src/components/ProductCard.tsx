import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state)=>state.addToCart)
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col h-full">

      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="h-48 w-full overflow-hidden rounded-md bg-gray-100 cursor-pointer hover:opacity-95 transition-opacity">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain bg-white"
          />
        </div>
        {/* title */}
        <h3 className="mt-4 font-semibold text-base text-gray-800 line-clamp-2 hover:text-[#0658A8] transition-colors">
          {product.title}
        </h3>
      </Link>

      {/* price */}
      <p className="text-[#0658A8] font-bold text-xl mt-3">${product.price}</p>

      {/* rating */}
      {product.rating && (
        <div className="flex items-center gap-1 text-sm mt-2 text-gray-600">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="font-medium text-gray-700">{product.rating}</span>
        </div>
      )}

      <button
        onClick={()=> addToCart(product)}
        className="mt-auto bg-[#0658A8] text-white py-2.5 px-4 rounded-lg hover:bg-[#054580] transition-colors font-semibold text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
