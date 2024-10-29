import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  LineChart, 
  Home, 
  Wallet, 
  TrendingUp, 
  Shield, 
  Calculator, 
  PiggyBank,
  ScrollText,
  BookOpen,
  Target,
  Building,
  Users,
  Scale
} from "lucide-react"
import { advisorTypes } from "@/data/advisor-types"

export function ServicesSection() {
  const iconMap = {
    LineChart,
    Home,
    Wallet,
    TrendingUp,
    Shield,
    Calculator,
    PiggyBank,
    ScrollText,
    BookOpen,
    Target,
    Building,
    Users,
    Scale
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisorTypes.map((type) => {
            const Icon = iconMap[type.icon as keyof typeof iconMap]
            return (
              <Link key={type.slug} href={`/${type.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2 text-purple-600" />
                    <CardTitle>{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Find experienced {type.name.toLowerCase()} to help you make informed decisions about your future.</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}