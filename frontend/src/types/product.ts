export interface Product {
  id: string
  title: string
  price: number
  category: "electronics" | "clothing" | "home"
  image: string
  description: string
  rating?: number
}
