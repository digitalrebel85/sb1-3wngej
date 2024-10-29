"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchForm() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        className="max-w-lg flex-1"
        placeholder="Search professionals..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" className="bg-white text-purple-600 hover:bg-zinc-100">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  )
}