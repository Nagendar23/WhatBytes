"use client"

import { Suspense, useState } from "react"
import Header from "@/components/Header"
import HomeContent from "@/components/HomeContent"

export default function HomePage() {
  const [search, setSearch] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header search={search} onSearchChange={setSearch} />

      <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading products...</div>}>
        <HomeContent onSearchChange={setSearch} />
      </Suspense>
    </div>
  )
}
