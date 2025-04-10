"use client"

import { useState } from "react"
import Header from "@/components/header"
import SearchBar from "@/components/search-bar"
import ImageGallery from "@/components/image-gallery"
import FilterTabs from "@/components/filter-tabs"
import Footer from "@/components/footer"
import { getAllImages } from "@/lib/image-data"

export default function Home() {
  const allImages = getAllImages()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeDeity, setActiveDeity] = useState("all")

  // Filter images based on search term and active deity
  const filteredImages = allImages.filter((image) => {
    const matchesSearch =
      searchTerm === "" ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.deity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      image.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDeity = activeDeity === "all" || image.deity.toLowerCase() === activeDeity.toLowerCase()

    return matchesSearch && matchesDeity
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative flex-1 bg-gradient-to-b from-cream-50 to-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-saffron-100 opacity-40 blur-3xl"></div>
          <div className="absolute -right-20 top-80 h-64 w-64 rounded-full bg-cream-200 opacity-40 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-8">
          <SearchBar onSearch={setSearchTerm} />
          <FilterTabs activeDeity={activeDeity} setActiveDeity={setActiveDeity} />

          {filteredImages.length > 0 ? (
            <>
              <div className="mb-8 flex items-center">
                <div className="h-px flex-grow bg-saffron-200"></div>
                <h2 className="mx-4 text-xl font-semibold text-gray-800">Divine Gallery</h2>
                <div className="h-px flex-grow bg-saffron-200"></div>
              </div>

              <ImageGallery images={filteredImages} />
            </>
          ) : (
            <div className="my-16 text-center">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-saffron-100 p-6 text-saffron-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800">No images found</h3>
              <p className="mt-2 text-gray-600">Try adjusting your search or filter to find what you're looking for</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveDeity("all")
                }}
                className="mt-4 rounded-md bg-saffron-500 px-4 py-2 text-white hover:bg-saffron-600"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
