"use client"

import { useEffect, useState } from "react"
import { useRouter,useSearchParams } from "next/navigation"
import Header from "@/components/Header"
import SidebarFilters from "@/components/SidebarFilters"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function HomePage() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedCategory, setSelectedCategory] = useState(
    (searchParams.get('category')) || "all"
  )
  const [price, setPrice] = useState(
    Number(searchParams.get("price")) || 1000
  )
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  )

  useEffect(()=>{
    const params = new URLSearchParams()
    if(selectedCategory !== "all"){
      params.set("category", selectedCategory)
    }
    if(price !== 1000){
      params.set("price", price.toString())
    }
    if(search.trim() !== ""){
      params.set("search", search)
    }

    const queryString = params.toString()
    router.replace(queryString ? `/?${queryString}` : "/")

  },[selectedCategory, price, search, router])


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
    <div className="min-h-screen bg-gray-50">
      <Header search={search} onSearchChange={setSearch} />

      <div className="px-8 py-6 flex gap-6">
        {/* Sidebar */}
        <SidebarFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          price={price}
          onPriceChange={setPrice}
        />

        {/* Product Grid */}
        <div className="flex-1 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.length === 0 && (
            <p className="text-gray-500">No products found</p>
          )}

          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
