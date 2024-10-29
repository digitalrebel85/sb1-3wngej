import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LineChart, MapPin, Users } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <LineChart className="h-6 w-6" />
          <span className="font-bold">FindAnAdvisor</span>
        </Link>
        
        <div className="ml-8 flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/locations" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Locations</span>
            </Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link href="/advisor-types" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Advisor Types</span>
            </Link>
          </Button>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}