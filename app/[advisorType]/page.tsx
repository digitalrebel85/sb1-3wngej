import { Metadata } from 'next'
import { advisorTypes } from '@/data/advisor-types'
import { cities } from '@/data/cities'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from 'next/link'

export async function generateStaticParams() {
  return [
    ...advisorTypes.map((advisor) => ({
      advisorType: advisor.slug,
    })),
    {
      advisorType: 'advisor-types',
    }
  ]
}

export async function generateMetadata({ params }: { params: { advisorType: string } }): Promise<Metadata> {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)
  const typeLabel = advisorType?.name.toLowerCase() || 'advisors'

  return {
    title: `Find ${advisorType?.name || 'Advisors'} Near You | FindAnAdvisor`,
    description: `Connect with experienced ${typeLabel} in your area. Compare ratings, read reviews, and contact professionals directly.`,
    keywords: `${typeLabel}, financial advice, professional ${typeLabel}, local ${typeLabel}`,
  }
}

export default function AdvisorTypePage({
  params,
}: {
  params: { advisorType: string }
}) {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)

  if (!advisorType) {
    return null
  }

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Find {advisorType.name} Near You
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Browse our directory of experienced {advisorType.name.toLowerCase()} in your area. 
              Compare ratings, read reviews, and contact professionals directly.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link 
                key={city.slug} 
                href={`/${params.advisorType}/${city.slug}`}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <CardTitle>{city.name}</CardTitle>
                    </div>
                    <CardDescription>
                      Find {advisorType.name} in {city.name}
                    </CardDescription>
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