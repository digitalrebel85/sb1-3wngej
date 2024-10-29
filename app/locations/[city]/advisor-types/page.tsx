import { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { cities } from "@/data/cities"
import { advisorTypes } from "@/data/advisor-types"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.city)
  const cityName = city?.name || 'your area'

  return {
    title: `Find Advisors in ${cityName} | FindAnAdvisor`,
    description: `Connect with financial advisors and professionals in ${cityName}. Compare services and contact experts directly.`,
  }
}

export default function CityAdvisorTypesPage({
  params,
}: {
  params: { city: string }
}) {
  const city = cities.find(c => c.slug === params.city)

  if (!city) {
    return null
  }

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Find Advisors in {city.name}
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Choose the type of professional you need in {city.name}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisorTypes.map((type) => (
              <Link 
                key={type.slug} 
                href={`/${type.slug}/${params.city}`}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <CardTitle>{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-purple-50 group-hover:text-purple-600"
                    >
                      <span>View {type.name}</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}