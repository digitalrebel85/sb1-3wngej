export interface City {
  id: string;
  name: string;
  slug: string;
  county: string;
}

export interface AdvisorType {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Advisor {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  address: string;
  phone?: string;
  category: string;
  link?: string;
}