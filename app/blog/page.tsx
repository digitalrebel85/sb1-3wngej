import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Clock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Advice Blog - Expert Insights & Tips',
  description: 'Stay informed with the latest financial advice, investment strategies, mortgage tips, and pension planning insights from certified financial advisors.',
  keywords: ['financial advice blog', 'investment tips', 'mortgage advice', 'pension planning', 'financial planning tips', 'UK financial news'],
  openGraph: {
    title: 'Financial Advice Blog - Expert Insights & Tips',
    description: 'Stay informed with the latest financial advice, investment strategies, mortgage tips, and pension planning insights from certified financial advisors.',
    type: 'website',
  },
}

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Financial Planning Tips for 2024',
    excerpt: 'Discover the most important financial planning strategies to secure your future in the current economic climate.',
    author: 'Sarah Johnson, CFP',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Financial Planning',
    slug: 'essential-financial-planning-tips-2024',
    featured: true
  },
  {
    id: 2,
    title: 'First-Time Buyer Mortgage Guide: Everything You Need to Know',
    excerpt: 'Complete guide for first-time homebuyers navigating the UK mortgage market, including government schemes and tips.',
    author: 'Michael Brown, CeMAP',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Mortgages',
    slug: 'first-time-buyer-mortgage-guide',
    featured: true
  },
  {
    id: 3,
    title: 'Pension Auto-Enrolment: Maximizing Your Retirement Savings',
    excerpt: 'Understanding how to make the most of your workplace pension and additional retirement planning strategies.',
    author: 'Emma Wilson, DipPFS',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Pensions',
    slug: 'pension-auto-enrolment-guide',
    featured: false
  },
  {
    id: 4,
    title: 'ISA Allowances 2024: How to Maximize Your Tax-Free Savings',
    excerpt: 'Complete guide to ISA types, allowances, and strategies to optimize your tax-free savings in 2024.',
    author: 'David Thompson, APFS',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Investments',
    slug: 'isa-allowances-2024-guide',
    featured: false
  },
  {
    id: 5,
    title: 'Protection Insurance: Do You Really Need It?',
    excerpt: 'Exploring different types of protection insurance and how to determine what coverage is right for your situation.',
    author: 'Lisa Anderson, Cert CII',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Insurance',
    slug: 'protection-insurance-guide',
    featured: false
  },
  {
    id: 6,
    title: 'Buy-to-Let Mortgages: Investment Property Financing in 2024',
    excerpt: 'Everything landlords need to know about buy-to-let mortgages, tax implications, and investment strategies.',
    author: 'Robert Clarke, CeMAP',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'Mortgages',
    slug: 'buy-to-let-mortgages-2024',
    featured: false
  }
]

const categories = ['All', 'Financial Planning', 'Mortgages', 'Pensions', 'Investments', 'Insurance']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Financial Advice Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed with expert insights, practical tips, and the latest trends in financial planning, 
          mortgages, pensions, and investments from certified financial advisors across the UK.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-gray-500">Featured</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-GB')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="cursor-pointer hover:bg-blue-50">
              {category}
            </Badge>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-lg">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Stay Updated with Financial Insights
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest financial advice, market updates, and expert tips delivered directly to your inbox. 
          Join thousands of UK residents making smarter financial decisions.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}
