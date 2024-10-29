import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Phone, Globe, MapPin } from "lucide-react"
import { Advisor } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface AdvisorCardProps {
  advisor: Advisor;
}

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl mb-2">{advisor.title}</CardTitle>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium">{advisor.rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-gray-600">({advisor.reviews} reviews)</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">{advisor.address}</p>
          </div>
          
          {advisor.phone && (
            <Button 
              asChild
              variant="ghost" 
              className="w-full hover:bg-purple-50 hover:text-purple-600"
            >
              <a 
                href={`tel:${advisor.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                {advisor.phone}
              </a>
            </Button>
          )}

          {advisor.link && (
            <Button asChild variant="outline" className="w-full">
              <a 
                href={advisor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Globe className="h-4 w-4 mr-2" />
                Visit Website
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}