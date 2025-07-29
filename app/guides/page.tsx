import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Clock, Users, TrendingUp, Home, PiggyBank, Shield, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Planning Guides - Expert Step-by-Step Instructions',
  description: 'Comprehensive guides covering financial planning, mortgage applications, pension optimization, and investment strategies. Learn from certified financial professionals.',
  keywords: ['financial planning guides', 'mortgage guide', 'pension planning', 'investment guides', 'financial education', 'money management'],
  openGraph: {
    title: 'Financial Planning Guides - Expert Step-by-Step Instructions',
    description: 'Comprehensive guides covering financial planning, mortgage applications, pension optimization, and investment strategies.',
    type: 'website',
  },
}

const guides = [
  {
    id: 'complete-financial-planning',
    title: 'Complete Guide to Financial Planning',
    description: 'Master the fundamentals of financial planning with this comprehensive step-by-step guide covering budgeting, saving, investing, and protection.',
    category: 'Financial Planning',
    difficulty: 'Beginner',
    readTime: '25 min read',
    steps: 8,
    icon: TrendingUp,
    featured: true,
    topics: ['Budgeting', 'Emergency Funds', 'Goal Setting', 'Investment Basics']
  },
  {
    id: 'first-time-buyer-journey',
    title: 'First-Time Buyer Complete Journey',
    description: 'Everything you need to know about buying your first home, from saving for a deposit to completing your purchase.',
    category: 'Mortgages',
    difficulty: 'Intermediate',
    readTime: '30 min read',
    steps: 12,
    icon: Home,
    featured: true,
    topics: ['Deposit Saving', 'Mortgage Applications', 'Property Search', 'Legal Process']
  },
  {
    id: 'pension-maximization',
    title: 'Maximizing Your Pension Benefits',
    description: 'Learn how to optimize your pension contributions, understand different pension types, and plan for a comfortable retirement.',
    category: 'Pensions',
    difficulty: 'Intermediate',
    readTime: '20 min read',
    steps: 10,
    icon: PiggyBank,
    featured: true,
    topics: ['Auto-enrolment', 'SIPP Management', 'Tax Relief', 'Retirement Planning']
  },
  {
    id: 'investment-portfolio-building',
    title: 'Building Your Investment Portfolio',
    description: 'Step-by-step guide to creating a diversified investment portfolio that matches your risk tolerance and financial goals.',
    category: 'Investments',
    difficulty: 'Intermediate',
    readTime: '35 min read',
    steps: 15,
    icon: TrendingUp,
    featured: false,
    topics: ['Asset Allocation', 'Risk Assessment', 'Fund Selection', 'Portfolio Rebalancing']
  },
  {
    id: 'protection-insurance-guide',
    title: 'Understanding Protection Insurance',
    description: 'Comprehensive guide to life insurance, critical illness cover, and income protection to safeguard your financial future.',
    category: 'Insurance',
    difficulty: 'Beginner',
    readTime: '18 min read',
    steps: 7,
    icon: Shield,
    featured: false,
    topics: ['Life Insurance', 'Critical Illness', 'Income Protection', 'Family Protection']
  },
  {
    id: 'isa-optimization',
    title: 'ISA Optimization Strategies',
    description: 'Make the most of your ISA allowances with strategies for cash ISAs, stocks & shares ISAs, and Lifetime ISAs.',
    category: 'Investments',
    difficulty: 'Beginner',
    readTime: '15 min read',
    steps: 6,
    icon: Calculator,
    featured: false,
    topics: ['Cash ISAs', 'Stocks & Shares ISAs', 'Lifetime ISAs', 'Tax Efficiency']
  },
  {
    id: 'debt-management',
    title: 'Effective Debt Management',
    description: 'Learn proven strategies to manage and eliminate debt while building a strong financial foundation.',
    category: 'Financial Planning',
    difficulty: 'Beginner',
    readTime: '22 min read',
    steps: 9,
    icon: TrendingUp,
    featured: false,
    topics: ['Debt Consolidation', 'Payment Strategies', 'Credit Score Improvement', 'Budgeting']
  },
  {
    id: 'retirement-planning',
    title: 'Comprehensive Retirement Planning',
    description: 'Plan for a secure retirement with strategies covering pensions, investments, and lifestyle considerations.',
    category: 'Pensions',
    difficulty: 'Advanced',
    readTime: '40 min read',
    steps: 18,
    icon: PiggyBank,
    featured: false,
    topics: ['Retirement Income', 'Pension Drawdown', 'State Benefits', 'Healthcare Planning']
  }
]

const categories = ['All', 'Financial Planning', 'Mortgages', 'Pensions', 'Investments', 'Insurance']
const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export default function GuidesPage() {
  const featuredGuides = guides.filter(guide => guide.featured)
  const allGuides = guides.filter(guide => !guide.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Financial Planning Guides
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master your finances with our comprehensive step-by-step guides. From first-time 
          home buying to retirement planning, get expert insights and practical advice.
        </p>
      </div>

      {/* Featured Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGuides.map((guide) => {
            const IconComponent = guide.icon
            return (
              <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={`/guides/${guide.id}`} className="hover:text-blue-600 transition-colors">
                      {guide.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <Badge variant="outline">{guide.category}</Badge>
                      <Badge variant="outline">{guide.difficulty}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{guide.steps} steps</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {guide.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {guide.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{guide.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button className="w-full mt-4" asChild>
                      <Link href={`/guides/${guide.id}`}>
                        Start Guide
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Filters */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-blue-50">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Badge key={difficulty} variant="outline" className="cursor-pointer hover:bg-blue-50">
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGuides.map((guide) => {
            const IconComponent = guide.icon
            return (
              <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                    <Badge variant="outline">{guide.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-lg">
                    <Link href={`/guides/${guide.id}`} className="hover:text-blue-600 transition-colors">
                      {guide.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <Badge variant="outline">{guide.category}</Badge>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{guide.steps} steps</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{guide.readTime}</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/guides/${guide.id}`}>
                        Read Guide
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
        <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Need Personalized Advice?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          While our guides provide excellent general advice, every financial situation is unique. 
          Connect with a qualified financial advisor for personalized guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/search">
              Find an Advisor
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/calculators">
              Use Our Calculators
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
