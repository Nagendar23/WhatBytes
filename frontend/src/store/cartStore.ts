import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "@/types/product"

export type CartItem = Product & {
  quantity: number
}

type CartStore = {
  items: CartItem[]
  addToCart: (product: Product) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const items = get().items
        const existingItem = items.find((i) => i.id === product.id)

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === product.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          })
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          })
        }
      },
    }),
    {
      name: "cart-storage",
    }
  )
)
