import { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { advisorTypes } from "@/data/advisor-types"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Advisor Types | FindAnAdvisor",
  description: "Browse different types of financial advisors and professionals to help with your financial needs.",
}

export default function AdvisorTypesPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Browse Advisor Types
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Find the right professional for your financial needs
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisorTypes.map((type) => (
              <Link key={type.slug} href={`/${type.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}