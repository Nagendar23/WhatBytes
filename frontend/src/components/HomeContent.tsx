"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import SidebarFilters from "@/components/SidebarFilters"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

type Props = {
  onSearchChange: (value: string) => void
}

export default function HomeContent({ onSearchChange }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedCategory, setSelectedCategory] = useState(
    (searchParams?.get('category')) || "all"
  )
  const [price, setPrice] = useState(
    Number(searchParams?.get("price")) || 1000
  )
  const [search] = useState(
    searchParams?.get("search") || ""
  )

  useEffect(() => {
    onSearchChange(search)
  }, [search, onSearchChange])

  useEffect(() => {
    const params = new URLSearchParams()
    if (selectedCategory !== "all") {
      params.set("category", selectedCategory)
    }
    if (price !== 1000) {
      params.set("price", price.toString())
    }
    if (search.trim() !== "") {
      params.set("search", search)
    }

    const queryString = params.toString()
    router.replace(queryString ? `/?${queryString}` : "/")
  }, [selectedCategory, price, search, router])

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory

    const priceMatch = product.price <= price

    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase())

    return categoryMatch && priceMatch && searchMatch
  })

  return (
    <div className="px-8 py-8 flex gap-6">
      {/* Sidebar */}
      <SidebarFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        price={price}
        onPriceChange={setPrice}
      />

      {/* Product Grid */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Product Listing</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length === 0 && (
            <p className="text-gray-500 text-lg col-span-full">No products found</p>
          )}

          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
