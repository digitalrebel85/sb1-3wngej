import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <Button asChild>
              <Link href="/" className="inline-flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}