import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { advisorTypes } from "@/data/advisor-types"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            Find Top Professionals in Your Area
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
            Connect with expert mortgage advisors, solicitors, and wealth managers to help you make informed decisions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {advisorTypes.slice(0, 3).map((type) => (
              <Button 
                key={type.slug}
                asChild
                variant="secondary"
                className="w-full"
              >
                <Link href={`/${type.slug}`}>
                  {type.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}