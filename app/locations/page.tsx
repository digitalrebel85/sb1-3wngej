import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Users, Building, TrendingUp, Search, Star } from 'lucide-react'
import { cities } from '@/data/cities'
import { advisorTypes } from '@/data/advisor-types'

export const metadata: Metadata = {
  title: 'Find Financial Advisors by Location - UK Cities & Regions',
  description: 'Find qualified financial advisors, mortgage specialists, and wealth managers in major UK cities. Compare local experts, read reviews, and get personalized financial advice in your area.',
  keywords: [
    'financial advisors by location',
    'UK financial advisors',
    'local financial advice',
    'mortgage advisors UK cities',
    'pension advisors near me',
    'wealth managers by location'
  ],
  openGraph: {
    title: 'Find Financial Advisors by Location - UK Cities & Regions',
    description: 'Find qualified financial advisors, mortgage specialists, and wealth managers in major UK cities.',
    type: 'website',
  },
}

// Mock data for city statistics
const getCityStats = () => ({
  totalAdvisors: 2847,
  avgRating: 4.7,
  citiesCovered: cities.length,
  advisorTypes: advisorTypes.length
})

const featuredCities = cities.slice(0, 6)
const allCities = cities.slice(6)

export default function LocationsPage() {
  const stats = getCityStats()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Financial Advisors by Location
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with qualified financial advisors, mortgage specialists, and wealth managers 
          in your local area. Browse by city to find expert financial advice tailored to your region.
        </p>
      </div>

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalAdvisors.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Qualified Advisors</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stats.citiesCovered}</div>
              <div className="text-sm text-gray-600">UK Cities Covered</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stats.avgRating}</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Building className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stats.advisorTypes}</div>
              <div className="text-sm text-gray-600">Advisor Types</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Search Section */}
      <section className="mb-12 bg-blue-50 rounded-lg p-8">
        <div className="text-center mb-6">
          <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Find Advisors in Your Area
          </h2>
          <p className="text-gray-600">
            Enter your city or postcode to find qualified financial advisors near you
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter city or postcode..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="px-6 py-3">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Major UK Cities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCities.map((city) => (
            <Card key={city.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">
                      <Link href={`/locations/${city.slug}`} className="hover:text-blue-600 transition-colors">
                        {city.name}
                      </Link>
                    </CardTitle>
                    <CardDescription>{city.county}</CardDescription>
                  </div>
                  <MapPin className="w-6 h-6 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <strong>Available Services:</strong>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {advisorTypes.slice(0, 3).map((type) => (
                      <Badge key={type.id} variant="outline" className="text-xs">
                        {type.name}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="text-xs">
                      +{advisorTypes.length - 3} more
                    </Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/locations/${city.slug}`}>
                      View Advisors in {city.name}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Cities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All UK Locations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allCities.map((city) => (
            <Card key={city.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      <Link href={`/locations/${city.slug}`} className="hover:text-blue-600 transition-colors">
                        {city.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">{city.county}</p>
                  </div>
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Find Your Local Financial Advisor?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Browse advisors in your area, compare qualifications and reviews, and take the first step 
          towards achieving your financial goals with expert local guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/search">
              Search All Advisors
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/guides">
              Read Planning Guides
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}