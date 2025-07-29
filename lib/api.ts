import { Advisor } from './types';
import { getCachedData } from './utils/cache';

const SERPER_API_KEY = process.env.SERPER_API_KEY;

export async function fetchAdvisors(advisorType: string, location: string): Promise<Advisor[]> {
  const cacheKey = `advisors-${advisorType}-${location}`;
  
  return getCachedData(cacheKey, async () => {
    try {
      // Check if API key is available
      if (!SERPER_API_KEY) {
        console.warn('SERPER_API_KEY not found, returning mock data');
        return generateMockAdvisors(advisorType, location);
      }

      const searchQuery = `${advisorType} in ${location} UK`;
      
      const response = await fetch('https://google.serper.dev/places', {
        method: 'POST',
        headers: {
          'X-API-KEY': SERPER_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: searchQuery,
          location: `${location}, UK`,
          gl: 'uk',
          hl: 'en'
        }),
        cache: 'force-cache'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.places || data.places.length === 0) {
        console.log('No places results found:', data);
        return generateMockAdvisors(advisorType, location);
      }

      return data.places.map((result: any, index: number) => ({
        id: result.placeId || `serper-${index}`,
        title: result.title || result.name,
        rating: result.rating || 0,
        reviews: result.reviews || 0,
        address: result.address || '',
        phone: result.phoneNumber || result.phone,
        category: result.category || advisorType,
        link: result.website || '#'
      }));
    } catch (error) {
      console.error('Error fetching advisors from Serper:', error);
      // Return mock data as fallback
      return generateMockAdvisors(advisorType, location);
    }
  });
}

// Fallback mock data generator
function generateMockAdvisors(advisorType: string, location: string): Advisor[] {
  const mockAdvisors: Advisor[] = [
    {
      id: '1',
      title: `${advisorType} Specialists ${location}`,
      rating: 4.8,
      reviews: 127,
      address: `123 High Street, ${location}`,
      phone: '01234 567890',
      category: advisorType,
      link: '#'
    },
    {
      id: '2', 
      title: `Professional ${advisorType} Services`,
      rating: 4.6,
      reviews: 89,
      address: `456 Market Square, ${location}`,
      phone: '01234 567891',
      category: advisorType,
      link: '#'
    },
    {
      id: '3',
      title: `Expert ${advisorType} Consultancy`,
      rating: 4.9,
      reviews: 156,
      address: `789 Business Park, ${location}`,
      phone: '01234 567892', 
      category: advisorType,
      link: '#'
    }
  ];
  
  return mockAdvisors;
}