const CACHE_DURATION = 31536000 // 1 year in seconds (365 days * 24 hours * 60 minutes * 60 seconds)

export async function getCachedData(key: string, fetchFn: () => Promise<any>) {
  // Check if running in browser
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(key)
    if (cached) {
      const { data, timestamp } = JSON.parse(cached)
      const age = (Date.now() - timestamp) / 1000
      
      if (age < CACHE_DURATION) {
        return data
      }
    }
  }

  const data = await fetchFn()
  
  // Cache the fresh data
  if (typeof window !== 'undefined') {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    )
  }

  return data
}