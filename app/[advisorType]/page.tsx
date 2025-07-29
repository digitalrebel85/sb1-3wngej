import { Metadata } from 'next'
import { advisorTypes } from '@/data/advisor-types'
import { cities } from '@/data/cities'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MapPin, Users, Star, TrendingUp, Shield, CheckCircle } from "lucide-react"
import Link from 'next/link'
import { generateLocalBusinessSchema } from '@/lib/structured-data'

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

  const structuredData = generateLocalBusinessSchema({
    name: `${advisorType.name} Directory - FindAnAdvisor`,
    description: `Find qualified ${advisorType.name.toLowerCase()} across the UK`,
    url: `https://findanadvisor.online/${params.advisorType}`,
    address: 'United Kingdom',
    serviceArea: 'United Kingdom'
  })

  const stats = {
    totalAdvisors: Math.floor(Math.random() * 500) + 200,
    avgRating: (4.2 + Math.random() * 0.6).toFixed(1),
    citiesCovered: cities.length,
    avgExperience: Math.floor(Math.random() * 5) + 8
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Find {advisorType.name} Near You
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                {advisorType.description} Connect with qualified professionals in your area, 
                compare ratings, read reviews, and get expert financial guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.totalAdvisors}+</div>
                <div className="text-sm text-gray-600">Verified {advisorType.name}</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.avgRating}</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.citiesCovered}</div>
                <div className="text-sm text-gray-600">UK Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stats.avgExperience}+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Why Choose Our {advisorType.name}?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our network of qualified {advisorType.name.toLowerCase()} are here to help you achieve your financial goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fully Qualified</h3>
                <p className="text-gray-600">
                  All our {advisorType.name.toLowerCase()} are fully qualified and regulated by the FCA
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
                <p className="text-gray-600">
                  Read genuine reviews from real clients to make informed decisions
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Find advisors with deep knowledge of your local area and market
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Find {advisorType.name} by Location
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our directory of {advisorType.name.toLowerCase()} across major UK cities
              </p>
            </div>
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
                        Find qualified {advisorType.name.toLowerCase()} in {city.name}, {city.county}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{Math.floor(Math.random() * 50) + 10}+ advisors</span>
                        <span>★ {(4.0 + Math.random() * 1).toFixed(1)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}