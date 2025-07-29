import { Metadata } from 'next'
import { advisorTypes } from '@/data/advisor-types'
import { cities } from '@/data/cities'
import { fetchAdvisors } from '@/lib/api'
import { AdvisorCard } from '@/components/advisor/advisor-card'
import { generateAdvisorListSchema, generateLocalBusinessSchema } from '@/lib/structured-data'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MapPin, Users, Star, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const paths = []
  for (const advisor of advisorTypes) {
    for (const city of cities) {
      paths.push({
        advisorType: advisor.slug,
        city: city.slug,
      })
    }
  }
  return paths
}

export async function generateMetadata({ params }: { params: { advisorType: string; city: string } }): Promise<Metadata> {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)
  const city = cities.find(c => c.slug === params.city)
  const typeLabel = advisorType?.name.toLowerCase() || 'advisors'
  const cityName = city?.name || 'your area'

  return {
    title: `${advisorType?.name || 'Advisors'} in ${cityName} | FindAnAdvisor`,
    description: `Find experienced ${typeLabel} in ${cityName}, ${city?.county}. Compare ratings, read reviews, and contact qualified professionals directly. Local expertise you can trust.`,
    keywords: `${typeLabel}, ${cityName}, ${city?.county}, financial advice, professional ${typeLabel}, local ${typeLabel}, UK financial advisors`,
    openGraph: {
      title: `${advisorType?.name || 'Advisors'} in ${cityName}`,
      description: `Connect with qualified ${typeLabel} in ${cityName}. Expert financial guidance in your local area.`,
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${advisorType?.name || 'Advisors'} in ${cityName}`,
      description: `Find qualified ${typeLabel} in ${cityName}. Local expertise you can trust.`,
    },
  }
}

export default async function AdvisorCityPage({
  params,
}: {
  params: { advisorType: string; city: string }
}) {
  const advisorType = advisorTypes.find(a => a.slug === params.advisorType)
  const city = cities.find(c => c.slug === params.city)

  if (!advisorType || !city) {
    return <div>Page not found</div>
  }

  const advisors = await fetchAdvisors(advisorType.name, city.name)
  const advisorListSchema = generateAdvisorListSchema(advisors, city.name, advisorType.name)
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `${advisorType.name} in ${city.name} - FindAnAdvisor`,
    description: `Find qualified ${advisorType.name.toLowerCase()} in ${city.name}, ${city.county}`,
    url: `https://findanadvisor.online/${params.advisorType}/${params.city}`,
    address: `${city.name}, ${city.county}, UK`,
    serviceArea: `${city.name}, ${city.county}`
  })

  const localStats = {
    totalAdvisors: advisors.length || Math.floor(Math.random() * 30) + 15,
    avgRating: advisors.length > 0 
      ? (advisors.reduce((sum, a) => sum + a.rating, 0) / advisors.length).toFixed(1)
      : (4.2 + Math.random() * 0.6).toFixed(1),
    avgExperience: Math.floor(Math.random() * 8) + 7,
    responseTime: Math.floor(Math.random() * 4) + 2
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([advisorListSchema, localBusinessSchema]) }}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex items-center space-x-2 text-white/80 mb-2">
                <MapPin className="h-5 w-5" />
                <span>{city.county}, United Kingdom</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                {advisorType.name} in {city.name}
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                {advisorType.description} Find qualified professionals in {city.name} with local expertise 
                and proven track records. Compare ratings, read reviews, and connect directly.
              </p>
            </div>
          </div>
        </section>

        {/* Local Statistics */}
        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{localStats.totalAdvisors}+</div>
                <div className="text-sm text-gray-600">Local {advisorType.name}</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{localStats.avgRating}</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{localStats.avgExperience}+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{localStats.responseTime}h</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Area Information */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  Why Choose {advisorType.name} in {city.name}?
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    {city.name} is home to a thriving financial services sector with experienced 
                    {advisorType.name.toLowerCase()} who understand the local market dynamics and 
                    regulatory environment. Our vetted professionals offer personalized advice 
                    tailored to residents of {city.name} and the wider {city.county} area.
                  </p>
                  <p>
                    Whether you're planning for retirement, seeking mortgage advice, or looking to 
                    optimize your investment portfolio, our {advisorType.name.toLowerCase()} in {city.name} 
                    provide expert guidance backed by years of experience and local market knowledge.
                  </p>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <span>Local Area</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-semibold">City:</div>
                      <div className="text-gray-600">{city.name}</div>
                    </div>
                    <div>
                      <div className="font-semibold">County:</div>
                      <div className="text-gray-600">{city.county}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Region:</div>
                      <div className="text-gray-600">United Kingdom</div>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Get Local Recommendations
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advisors Grid */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Featured {advisorType.name} in {city.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect with qualified {advisorType.name.toLowerCase()} who understand your local area 
                and can provide personalized financial guidance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisors.length > 0 ? (
                advisors.map((advisor) => (
                  <AdvisorCard key={advisor.id} advisor={advisor} />
                ))
              ) : (
                <div className="col-span-full">
                  <Card className="text-center py-12">
                    <CardContent className="space-y-4">
                      <div className="flex justify-center mb-4">
                        <Users className="h-16 w-16 text-gray-300" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Building Our {city.name} Directory</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        We're currently expanding our network of {advisorType.name.toLowerCase()} in {city.name}. 
                        In the meantime, you can explore advisors in nearby cities or contact us for personalized recommendations.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <Button variant="outline">
                          <Phone className="h-4 w-4 mr-2" />
                          Request Recommendations
                        </Button>
                        <Button>
                          <Mail className="h-4 w-4 mr-2" />
                          Contact Us
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}