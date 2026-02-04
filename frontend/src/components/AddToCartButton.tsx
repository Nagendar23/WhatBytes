"use client"
import { Product } from "@/types/product"
import { useCartStore } from "@/store/cartStore"

type Props = {
  product: Product
}

export function AddToCartButton({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <button
      onClick={() => addToCart(product)}
      className='bg-[#0658A8] text-white px-8 py-3.5 rounded-lg hover:bg-[#054580] transition-colors font-semibold text-lg'
    >
      Add to Cart
    </button>
  )
}
