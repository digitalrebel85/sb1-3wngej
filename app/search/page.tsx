import { Metadata } from "next"
import { AdvisorCard } from "@/components/advisor/advisor-card"
import { fetchAdvisors } from "@/lib/api"

export const metadata: Metadata = {
  title: "Search Results | FindAnAdvisor",
  description: "Find professional advisors matching your search criteria.",
}

// Remove dynamic search params and make this a static page
export default function SearchPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Search Results
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Use our search to find professionals in your area
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600">
              Please use the navigation menu to browse professionals by category and location.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}