import Link from "next/link"
import { advisorTypes } from "@/data/advisor-types"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-400">FindAnAdvisor connects you with top financial professionals to help you make informed decisions about your future.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {advisorTypes.map((type) => (
                <li key={type.slug}>
                  <Link href={`/${type.slug}`} className="hover:text-purple-400 transition-colors">
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">Email: info@findanadvisor.online</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 FindAnAdvisor. All rights reserved.
        </div>
      </div>
    </footer>
  )
}