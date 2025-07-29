import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from 'lucide-react'
import { generateFAQSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Financial Advisor Directory',
  description: 'Get answers to common questions about finding financial advisors, mortgage specialists, and wealth managers. Learn about qualifications, fees, and how to choose the right advisor.',
  keywords: ['financial advisor FAQ', 'mortgage advisor questions', 'pension advice FAQ', 'financial planning questions', 'advisor qualifications'],
  openGraph: {
    title: 'Frequently Asked Questions - Financial Advisor Directory',
    description: 'Get answers to common questions about finding financial advisors, mortgage specialists, and wealth managers.',
    type: 'website',
  },
}

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is a financial advisor and do I need one?',
        answer: 'A financial advisor is a qualified professional who provides guidance on financial matters including investments, retirement planning, insurance, and tax strategies. You might need one if you have complex financial goals, lack investment knowledge, or want professional guidance for major financial decisions like retirement planning or buying a home.'
      },
      {
        question: 'How do I know if a financial advisor is qualified and regulated?',
        answer: 'In the UK, financial advisors must be authorized by the Financial Conduct Authority (FCA). Check the FCA register at register.fca.org.uk to verify their authorization. Look for qualifications like Chartered Financial Planner (CFP), Diploma in Regulated Financial Planning (DipPFS), or Advanced Diploma in Financial Planning (ADFP).'
      },
      {
        question: 'What\'s the difference between independent and restricted advice?',
        answer: 'Independent financial advisors can recommend products from across the entire market and must consider all types of retail investment products. Restricted advisors may only recommend certain products or product types, often from a limited panel of providers. Independent advice typically offers more comprehensive options but may cost more.'
      },
      {
        question: 'How much does financial advice cost?',
        answer: 'Financial advice costs vary significantly. Initial consultations may be free or cost £100-£500. Ongoing advice can be charged as a percentage of assets under management (typically 0.5%-2% annually), fixed annual fees (£500-£5,000+), or hourly rates (£100-£300). Always ask for a clear fee structure upfront.'
      }
    ]
  },
  {
    category: 'Mortgages',
    questions: [
      {
        question: 'Should I use a mortgage broker or go directly to a bank?',
        answer: 'Mortgage brokers have access to deals from multiple lenders and can often find better rates than going direct. They understand the application process and can match you with suitable lenders. However, some lenders offer exclusive direct-only deals. A good broker should save you time and potentially money, especially if you have complex circumstances.'
      },
      {
        question: 'What documents do I need for a mortgage application?',
        answer: 'Typically you\'ll need: 3 months\' payslips, 3 months\' bank statements, P60 or SA302 forms, proof of deposit source, photo ID, proof of address, and details of existing credit commitments. Self-employed applicants need 2-3 years\' accounts or SA302 forms. Requirements vary by lender.'
      },
      {
        question: 'How much deposit do I need as a first-time buyer?',
        answer: 'The minimum deposit is typically 5% of the property value, though 10-15% deposits offer better rates and more lender choice. Government schemes like Help to Buy ISA, Lifetime ISA, or shared ownership can help with smaller deposits. Some guarantor mortgages allow deposits as low as 5% with family support.'
      },
      {
        question: 'What is mortgage protection insurance and do I need it?',
        answer: 'Mortgage protection insurance pays your mortgage if you can\'t work due to illness, injury, or unemployment. While not legally required, lenders often recommend it. Consider your existing protection (employer benefits, savings) and the policy terms carefully. Life insurance is typically required by lenders to cover the outstanding mortgage balance.'
      }
    ]
  },
  {
    category: 'Pensions',
    questions: [
      {
        question: 'What is auto-enrolment and how does it work?',
        answer: 'Auto-enrolment automatically enrolls eligible employees into a workplace pension scheme. You contribute a minimum of 5% of qualifying earnings (with 3% from you and 2% from your employer). You can opt out but will be automatically re-enrolled every 3 years. It\'s designed to help people save for retirement.'
      },
      {
        question: 'Should I transfer my old pension pots?',
        answer: 'Consolidating pensions can simplify management and potentially reduce fees, but transfers aren\'t always beneficial. Consider exit penalties, loss of guarantees, different charging structures, and investment options. Transfers from defined benefit schemes require specialist advice and are often not recommended due to valuable guarantees.'
      },
      {
        question: 'When can I access my pension and how much can I take?',
        answer: 'You can typically access private pensions from age 55 (rising to 57 in 2028). You can take 25% as a tax-free lump sum and the remainder is taxable. State pension starts at state pension age (currently 66, rising to 67). Consider your tax position and retirement income needs before accessing pensions.'
      },
      {
        question: 'What is a SIPP and should I consider one?',
        answer: 'A Self-Invested Personal Pension (SIPP) offers greater investment flexibility than standard personal pensions, allowing you to choose from a wider range of investments including individual shares, funds, and commercial property. They\'re suitable for experienced investors who want control but require more active management and typically have higher charges.'
      }
    ]
  },
  {
    category: 'Investments',
    questions: [
      {
        question: 'What are ISAs and how much can I save?',
        answer: 'Individual Savings Accounts (ISAs) allow tax-free saving and investing. The annual allowance is £20,000 (2024/25) split between Cash ISAs and Stocks & Shares ISAs. Lifetime ISAs (for under 40s) have a £4,000 allowance with 25% government bonus. Junior ISAs allow £9,000 annually for children. ISA savings grow tax-free.'
      },
      {
        question: 'Should I invest in individual stocks or funds?',
        answer: 'Funds offer instant diversification and professional management, making them suitable for most investors. Individual stocks require more research, time, and carry higher risk but offer potential for higher returns. Most advisors recommend funds for core holdings, with individual stocks only for experienced investors with sufficient diversification.'
      },
      {
        question: 'How much should I invest and how often?',
        answer: 'Invest only money you won\'t need for 5+ years, after building an emergency fund. Many advisors suggest regular monthly investing (pound-cost averaging) to smooth market volatility. The amount depends on your income, expenses, and goals. Start with what you can afford and increase gradually as income grows.'
      },
      {
        question: 'What is risk profiling and why is it important?',
        answer: 'Risk profiling assesses your attitude to investment risk, capacity for loss, and investment timeline. It helps determine suitable investment strategies - from cautious (lower risk, lower returns) to adventurous (higher risk, higher potential returns). Your risk profile should align with your financial goals and personal circumstances.'
      }
    ]
  }
]

export default function FAQPage() {
  const allFAQs = faqs.flatMap(category => 
    category.questions.map(q => ({
      question: q.question,
      answer: q.answer
    }))
  )
  
  const faqSchema = generateFAQSchema(allFAQs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about finding financial advisors, understanding 
            different types of financial advice, and making informed decisions about your money.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid gap-8">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                <Badge variant="secondary">{category.questions.length} questions</Badge>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader className="cursor-pointer">
                      <CardTitle className="text-lg flex items-center justify-between">
                        <span>{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help you understand 
            your options and connect you with the right financial professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Find an Advisor
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Helpful Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Financial Planning Guide</CardTitle>
                <CardDescription>
                  Comprehensive guide to getting started with financial planning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Read Guide
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Advisor Comparison Tool</CardTitle>
                <CardDescription>
                  Compare different types of financial advisors and their services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Compare Advisors
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Financial Calculators</CardTitle>
                <CardDescription>
                  Use our tools to calculate mortgage payments, pension contributions, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Use Calculators
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
