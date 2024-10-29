import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { City } from "@/lib/types"

interface CityCardProps {
  city: City;
  advisorType: string;
}

export function CityCard({ city, advisorType }: CityCardProps) {
  return (
    <Link href={`/${advisorType}/${city.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-purple-600" />
            {city.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">{city.county}</p>
        </CardContent>
      </Card>
    </Link>
  )
}