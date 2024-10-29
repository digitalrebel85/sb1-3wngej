import { City, AdvisorType } from './types';

export const ukCities: City[] = [
  { 
    id: '1', 
    name: 'London', 
    slug: 'london',
    county: 'Greater London'
  },
  { 
    id: '2', 
    name: 'Manchester', 
    slug: 'manchester',
    county: 'Greater Manchester'
  },
  { 
    id: '3', 
    name: 'Birmingham', 
    slug: 'birmingham',
    county: 'West Midlands'
  },
  { 
    id: '4', 
    name: 'Bristol', 
    slug: 'bristol',
    county: 'Bristol'
  },
  { 
    id: '5', 
    name: 'Leeds', 
    slug: 'leeds',
    county: 'West Yorkshire'
  },
  { 
    id: '6', 
    name: 'Edinburgh', 
    slug: 'edinburgh',
    county: 'Midlothian'
  },
  { 
    id: '7', 
    name: 'Glasgow', 
    slug: 'glasgow',
    county: 'Lanarkshire'
  },
  { 
    id: '8', 
    name: 'Liverpool', 
    slug: 'liverpool',
    county: 'Merseyside'
  },
  { 
    id: '9', 
    name: 'Cardiff', 
    slug: 'cardiff',
    county: 'South Glamorgan'
  },
  { 
    id: '10', 
    name: 'Belfast', 
    slug: 'belfast',
    county: 'County Antrim'
  }
];

export const advisorTypes: AdvisorType[] = [
  {
    id: '1',
    name: 'Financial Advisors',
    slug: 'financial-advisors',
    description: 'Expert guidance for your financial planning needs',
    icon: 'LineChart'
  },
  {
    id: '2',
    name: 'Mortgage Advisors',
    slug: 'mortgage-advisors',
    description: 'Expert guidance for your home financing needs',
    icon: 'Home'
  },
  {
    id: '3',
    name: 'Pension Advisors',
    slug: 'pension-advisors',
    description: 'Retirement planning and pension expertise',
    icon: 'Wallet'
  },
  {
    id: '4',
    name: 'Investment Advisors',
    slug: 'investment-advisors',
    description: 'Strategic investment planning and portfolio management',
    icon: 'TrendingUp'
  },
  {
    id: '5',
    name: 'Insurance Advisors',
    slug: 'insurance-advisors',
    description: 'Protection planning and insurance solutions',
    icon: 'Shield'
  },
  {
    id: '6',
    name: 'Tax Advisors',
    slug: 'tax-advisors',
    description: 'Tax planning and optimization strategies',
    icon: 'Calculator'
  },
  {
    id: '7',
    name: 'Wealth Managers',
    slug: 'wealth-managers',
    description: 'Comprehensive wealth management services',
    icon: 'PiggyBank'
  }
];