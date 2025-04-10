"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <div className="relative mb-12 mt-8">
      <div className="absolute inset-0 -top-10 -z-10 mx-auto h-32 w-full max-w-3xl rounded-full bg-saffron-100 opacity-50 blur-3xl"></div>
      <form onSubmit={handleSearch} className="relative mx-auto max-w-3xl">
        <div className="flex overflow-hidden rounded-full bg-white shadow-xl ring-1 ring-saffron-200 transition-all focus-within:ring-2 focus-within:ring-saffron-400">
          <input
            type="text"
            placeholder="Search for Lord Ram, Hanuman, Shiva, Lakshmi..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-none py-5 px-8 text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-saffron-500 to-saffron-600 px-8 text-white transition-colors hover:from-saffron-600 hover:to-saffron-700"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    </div>
  )
}
