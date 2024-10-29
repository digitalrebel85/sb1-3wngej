import { Metadata } from 'next'
import { advisorTypes } from '@/data/advisor-types'
import { cities } from '@/data/cities'
import { fetchAdvisors } from '@/lib/api'
import { AdvisorCard } from '@/components/advisor/advisor-card'
import { generateAdvisorListSchema } from '@/lib/structured-data'

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
    description: `Find experienced ${typeLabel} in ${cityName}. Compare ratings, read reviews, and contact professionals directly.`,
    keywords: `${typeLabel}, ${cityName}, financial advice, professional ${typeLabel}, local ${typeLabel}`,
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
  const structuredData = generateAdvisorListSchema(advisors, city.name, advisorType.name)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                {advisorType.name} in {city.name}
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                Find the best {advisorType.name.toLowerCase()} in {city.name}. Compare ratings, read reviews, and contact professionals directly.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisors.length > 0 ? (
                advisors.map((advisor) => (
                  <AdvisorCard key={advisor.id} advisor={advisor} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h2 className="text-2xl font-bold mb-4">No Results Found</h2>
                  <p className="text-gray-600">
                    We couldn't find any {advisorType.name.toLowerCase()} in {city.name} at the moment.
                    Please try another city or contact us for assistance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}