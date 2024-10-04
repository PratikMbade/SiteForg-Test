'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Search } from "lucide-react"

const products = [
  { id: 1, name: "Leather Backpack", price: 79.99, rating: 4.5, image:"https://www.tailwind-kit.com/images/object/10.png"  },
  { id: 2, name: "Wireless Earbuds", price: 129.99, rating: 4.8, image:"https://www.tailwind-kit.com/images/object/10.png"},
  { id: 3, name: "Smart Watch", price: 199.99, rating: 4.2,  image:"https://www.tailwind-kit.com/images/object/10.png"},
  { id: 4, name: "Portable Charger", price: 49.99, rating: 4.7,  image:"https://www.tailwind-kit.com/images/object/10.png"},
  { id: 5, name: "Noise-Canceling Headphones", price: 299.99, rating: 4.9, image:"https://www.tailwind-kit.com/images/object/10.png"},
  { id: 6, name: "Fitness Tracker", price: 89.99, rating: 4.4,  image:"https://www.tailwind-kit.com/images/object/10.png"},


]

export default function ProductListPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLowToHigh") return a.price - b.price
    if (sortBy === "priceHighToLow") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black rounded-sm">
   
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
              <div className="relative w-full sm:w-64">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                  <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden transition-shadow duration-300  ">
                  <CardContent className="p-4">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700 dark:text-gray-300">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{product.rating.toFixed(1)}</span>
                    </div>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}