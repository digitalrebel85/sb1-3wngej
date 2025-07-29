import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calculator, Home, PiggyBank, TrendingUp, Percent, CreditCard, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Calculators - Free Tools for Planning Your Finances',
  description: 'Use our free financial calculators to plan mortgages, pensions, investments, and loans. Get instant results and expert guidance for your financial decisions.',
  keywords: ['mortgage calculator', 'pension calculator', 'investment calculator', 'loan calculator', 'financial planning tools', 'UK financial calculators'],
  openGraph: {
    title: 'Financial Calculators - Free Tools for Planning Your Finances',
    description: 'Use our free financial calculators to plan mortgages, pensions, investments, and loans. Get instant results and expert guidance.',
    type: 'website',
  },
}

const calculators = [
  {
    id: 'mortgage-affordability',
    title: 'Mortgage Affordability Calculator',
    description: 'Calculate how much you can borrow for a mortgage based on your income, expenses, and deposit.',
    category: 'Mortgages',
    icon: Home,
    popular: true,
    features: ['Income assessment', 'Affordability analysis', 'Deposit requirements', 'Monthly payment estimates'],
    useCase: 'Planning to buy a home and want to know your budget'
  },
  {
    id: 'mortgage-repayment',
    title: 'Mortgage Repayment Calculator',
    description: 'Calculate monthly mortgage payments, total interest, and see how overpayments can save you money.',
    category: 'Mortgages',
    icon: Calculator,
    popular: true,
    features: ['Monthly payments', 'Interest calculations', 'Overpayment scenarios', 'Amortization schedule'],
    useCase: 'Comparing mortgage deals and payment options'
  },
  {
    id: 'pension-contribution',
    title: 'Pension Contribution Calculator',
    description: 'Calculate optimal pension contributions, tax relief benefits, and projected retirement income.',
    category: 'Pensions',
    icon: PiggyBank,
    popular: true,
    features: ['Tax relief calculation', 'Employer matching', 'Retirement projections', 'Contribution optimization'],
    useCase: 'Maximizing your pension savings and tax benefits'
  },
  {
    id: 'investment-growth',
    title: 'Investment Growth Calculator',
    description: 'Project how your investments could grow over time with compound interest and regular contributions.',
    category: 'Investments',
    icon: TrendingUp,
    popular: false,
    features: ['Compound growth', 'Regular contributions', 'Different scenarios', 'Goal planning'],
    useCase: 'Planning long-term investment strategies'
  },
  {
    id: 'loan-comparison',
    title: 'Loan Comparison Calculator',
    description: 'Compare different loan options including personal loans, car finance, and credit cards.',
    category: 'Loans',
    icon: CreditCard,
    popular: false,
    features: ['Multiple loan types', 'APR comparison', 'Total cost analysis', 'Payment schedules'],
    useCase: 'Finding the best borrowing option for your needs'
  },
  {
    id: 'savings-goal',
    title: 'Savings Goal Calculator',
    description: 'Calculate how much to save monthly to reach your financial goals within your timeframe.',
    category: 'Savings',
    icon: PiggyBank,
    popular: false,
    features: ['Goal setting', 'Timeline planning', 'Interest calculations', 'Progress tracking'],
    useCase: 'Planning for specific financial goals'
  },
  {
    id: 'stamp-duty',
    title: 'Stamp Duty Calculator',
    description: 'Calculate stamp duty land tax for property purchases across England, Scotland, and Wales.',
    category: 'Property',
    icon: Home,
    popular: true,
    features: ['All UK regions', 'First-time buyer relief', 'Additional property rates', 'Recent rate changes'],
    useCase: 'Budgeting for property purchase costs'
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance Calculator',
    description: 'Estimate how much life insurance coverage you need to protect your family\'s financial future.',
    category: 'Insurance',
    icon: Shield,
    popular: false,
    features: ['Coverage assessment', 'Family protection', 'Debt consideration', 'Income replacement'],
    useCase: 'Determining adequate life insurance coverage'
  },
  {
    id: 'isa-allowance',
    title: 'ISA Allowance Tracker',
    description: 'Track your ISA contributions and optimize your tax-free savings across different ISA types.',
    category: 'ISAs',
    icon: Percent,
    popular: false,
    features: ['Allowance tracking', 'Multiple ISA types', 'Tax savings', 'Optimization tips'],
    useCase: 'Maximizing your annual ISA allowances'
  }
]

const categories = ['All', 'Mortgages', 'Pensions', 'Investments', 'Loans', 'Savings', 'Property', 'Insurance', 'ISAs']

export default function CalculatorsPage() {
  const popularCalculators = calculators.filter(calc => calc.popular)
  const allCalculators = calculators.filter(calc => !calc.popular)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Financial Calculators
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Make informed financial decisions with our comprehensive suite of free calculators. 
          Get instant results and expert guidance for mortgages, pensions, investments, and more.
        </p>
      </div>

      {/* Popular Calculators */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Popular Calculators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCalculators.map((calculator) => {
            const IconComponent = calculator.icon
            return (
              <Card key={calculator.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="mb-2">Popular</Badge>
                  <CardTitle className="text-lg">
                    <Link href={`/calculators/${calculator.id}`} className="hover:text-blue-600 transition-colors">
                      {calculator.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {calculator.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" asChild>
                    <Link href={`/calculators/${calculator.id}`}>
                      Use Calculator
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="cursor-pointer hover:bg-blue-50 px-4 py-2">
              {category}
            </Badge>
          ))}
        </div>
      </section>

      {/* All Calculators */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Calculators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCalculators.map((calculator) => {
            const IconComponent = calculator.icon
            return (
              <Card key={calculator.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                    <Badge variant="outline">{calculator.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={`/calculators/${calculator.id}`} className="hover:text-blue-600 transition-colors">
                      {calculator.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {calculator.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {calculator.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Best for:</strong> {calculator.useCase}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/calculators/${calculator.id}`}>
                        Use Calculator
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12 bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          How Our Calculators Work
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Enter Your Details</h4>
            <p className="text-gray-600 text-sm">
              Input your financial information using our simple, secure forms
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">2</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Get Instant Results</h4>
            <p className="text-gray-600 text-sm">
              Our calculators provide immediate, accurate calculations
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">3</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Get Expert Advice</h4>
            <p className="text-gray-600 text-sm">
              Connect with qualified advisors for personalized guidance
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
        <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Need More Than Calculations?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          While our calculators provide valuable insights, complex financial decisions often 
          require professional advice. Connect with qualified financial advisors for comprehensive guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/search">
              Find an Advisor
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/guides">
              Read Our Guides
            </Link>
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-8 text-center text-sm text-gray-500">
        <p>
          <strong>Important:</strong> These calculators provide estimates for guidance only. 
          Results should not be considered as financial advice. For personalized recommendations, 
          consult with a qualified financial advisor.
        </p>
      </section>
    </div>
  )
}
