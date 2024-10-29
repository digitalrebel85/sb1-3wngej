import { Advisor } from './types';
import { getCachedData } from './utils/cache';

const VALUESERP_API_KEY = '5C3FD44146204B86AED94576A4E40E6F';

export async function fetchAdvisors(advisorType: string, location: string): Promise<Advisor[]> {
  const cacheKey = `advisors-${advisorType}-${location}`;
  
  return getCachedData(cacheKey, async () => {
    try {
      const searchQuery = `${advisorType} in ${location}`;
      const url = `https://api.valueserp.com/search?api_key=${VALUESERP_API_KEY}&q=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}&search_type=places&google_domain=google.co.uk&gl=uk&hl=en`;

      const response = await fetch(url, { 
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip, deflate',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.places_results) {
        console.log('No results found:', data);
        return [];
      }

      return data.places_results.map((result: any) => ({
        id: result.data_cid || String(Math.random()),
        title: result.title,
        rating: result.rating || 0,
        reviews: result.reviews || 0,
        address: result.address || '',
        phone: result.phone,
        category: result.category || advisorType,
        link: result.link
      }));
    } catch (error) {
      console.error('Error fetching advisors:', error);
      return [];
    }
  });
}