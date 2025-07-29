import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Star, Users, Building, TrendingUp } from 'lucide-react'
import { cities } from '@/data/cities'
import { advisorTypes } from '@/data/advisor-types'
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/structured-data'

type Props = {
  params: { city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.city)
  
  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  return {
    title: `Financial Advisors in ${city.name} | Expert Financial Advice`,
    description: `Find qualified financial advisors, mortgage specialists, and wealth managers in ${city.name}, ${city.county}. Compare local experts, read reviews, and get personalized financial advice.`,
    keywords: [
      `financial advisors ${city.name}`,
      `mortgage advisors ${city.name}`,
      `pension advisors ${city.name}`,
      `investment advisors ${city.name}`,
      `financial advice ${city.name}`,
      `wealth management ${city.name}`,
      `${city.county} financial advisors`
    ],
    openGraph: {
      title: `Financial Advisors in ${city.name} | Expert Financial Advice`,
      description: `Find qualified financial advisors, mortgage specialists, and wealth managers in ${city.name}, ${city.county}. Compare local experts and get personalized advice.`,
      type: 'website',
    },
    alternates: {
      canonical: `https://findanadvisor.online/locations/${city.slug}`,
    },
  }
}

// Mock data - in real app this would come from database
const getCityAdvisors = (cityName: string) => [
  {
    id: '1',
    name: 'Sarah Johnson Financial Planning',
    type: 'Financial Advisors',
    rating: 4.9,
    reviews: 127,
    address: `123 High Street, ${cityName}`,
    phone: '01234 567890',
    email: 'info@sarahjohnsonfinancial.co.uk',
    specialties: ['Retirement Planning', 'Investment Management', 'Tax Planning'],
    description: `Leading financial advisory firm in ${cityName} with over 15 years of experience helping individuals and families achieve their financial goals.`,
    qualifications: ['Chartered Financial Planner', 'Certified Financial Planner'],
    established: 2008
  },
  {
    id: '2',
    name: 'City Mortgage Solutions',
    type: 'Mortgage Advisors',
    rating: 4.8,
    reviews: 89,
    address: `456 Market Square, ${cityName}`,
    phone: '01234 567891',
    email: 'enquiries@citymortgagesolutions.co.uk',
    specialties: ['First Time Buyers', 'Buy-to-Let', 'Remortgaging'],
    description: `Specialist mortgage brokers serving ${cityName} and surrounding areas. We help you find the best mortgage deals from across the market.`,
    qualifications: ['CeMAP Qualified', 'FCA Regulated'],
    established: 2012
  },
  {
    id: '3',
    name: 'Pension Planning Experts',
    type: 'Pension Advisors',
    rating: 4.7,
    reviews: 156,
    address: `789 Business Park, ${cityName}`,
    phone: '01234 567892',
    email: 'advice@pensionplanningexperts.co.uk',
    specialties: ['Auto-Enrolment', 'SIPP Management', 'Pension Transfers'],
    description: `Dedicated pension specialists helping ${cityName} residents maximize their retirement savings and navigate complex pension regulations.`,
    qualifications: ['Diploma in Regulated Financial Planning', 'Pension Transfer Specialist'],
    established: 2005
  }
]

const getCityStats = (cityName: string) => ({
  population: cityName === 'London' ? '9,000,000' : cityName === 'Manchester' ? '547,000' : '1,100,000',
  averageHousePrice: cityName === 'London' ? '£735,000' : cityName === 'Manchester' ? '£195,000' : '£180,000',
  unemploymentRate: '3.2%',
  averageIncome: cityName === 'London' ? '£41,000' : '£28,500'
})

export default function CityPage({ params }: Props) {
  const city = cities.find(c => c.slug === params.city)
  
  if (!city) {
    notFound()
  }

  const advisors = getCityAdvisors(city.name)
  const stats = getCityStats(city.name)
  const localBusinessSchema = generateLocalBusinessSchema(city)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://findanadvisor.online' },
    { name: 'Locations', url: 'https://findanadvisor.online/locations' },
    { name: city.name, url: `https://findanadvisor.online/locations/${city.slug}` }
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/locations" className="hover:text-blue-600">Locations</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{city.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Advisors in {city.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Connect with qualified financial advisors, mortgage specialists, and wealth managers 
            in {city.name}, {city.county}. Compare local experts, read reviews, and get personalized 
            financial advice tailored to your needs.
          </p>
        </div>

        {/* City Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{city.name} Financial Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stats.population}</div>
                <div className="text-sm text-gray-600">Population</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stats.averageHousePrice}</div>
                <div className="text-sm text-gray-600">Avg House Price</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stats.averageIncome}</div>
                <div className="text-sm text-gray-600">Avg Income</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stats.unemploymentRate}</div>
                <div className="text-sm text-gray-600">Unemployment</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advisor Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Types of Financial Advisors in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisorTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">
                    <Link 
                      href={`/locations/${city.slug}/${type.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {type.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/locations/${city.slug}/${type.slug}`}>
                      Find {type.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Advisors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top-Rated Financial Advisors in {city.name}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {advisors.map((advisor) => (
              <Card key={advisor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{advisor.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{advisor.type}</Badge>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(advisor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {advisor.rating} ({advisor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {advisor.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{advisor.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{advisor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{advisor.email}</span>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {advisor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button className="w-full">Contact {advisor.name}</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Local Financial Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Financial Planning in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Choose a Local Financial Advisor?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Understanding of local property market in {city.name}</li>
                <li>• Knowledge of regional employment trends</li>
                <li>• Face-to-face meetings and personal service</li>
                <li>• Local networking and referral opportunities</li>
                <li>• Understanding of {city.county} specific regulations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Common Financial Challenges in {city.name}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• High property prices affecting first-time buyers</li>
                <li>• Planning for retirement with rising living costs</li>
                <li>• Managing debt and improving credit scores</li>
                <li>• Investment strategies for different life stages</li>
                <li>• Protection planning for families and businesses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Find Your Financial Advisor in {city.name}?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get personalized financial advice from qualified professionals in your area. 
            Compare advisors, read reviews, and take the first step towards your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={`/search?location=${city.slug}`}>
                Find Advisors Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                Read Financial Tips
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}
