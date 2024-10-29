export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-100 p-3 mb-4">
              <svg
                className="h-6 w-6 text-purple-600"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Professionals</h3>
            <p className="text-zinc-500">All professionals in our directory are thoroughly vetted and verified.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-100 p-3 mb-4">
              <svg
                className="h-6 w-6 text-purple-600"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
            <p className="text-zinc-500">Your data and interactions are protected by state-of-the-art security measures.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-100 p-3 mb-4">
              <svg
                className="h-6 w-6 text-purple-600"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Support</h3>
            <p className="text-zinc-500">Our team is always ready to assist you in finding the right professional for your needs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}