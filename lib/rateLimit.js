import { headers } from 'next/headers';

class RateLimiter {
  constructor() {
    this.requests = new Map();
  }

  isLimitReached(ip, limit = 10, windowMs = 60000) {
    const now = Date.now();
    const userRequests = this.requests.get(ip) || [];
    
    // Filter out requests older than the window
    const recentRequests = userRequests.filter(timestamp => now - timestamp < windowMs);
    
    if (recentRequests.length >= limit) {
      this.requests.set(ip, recentRequests);
      return true;
    }
    
    recentRequests.push(now);
    this.requests.set(ip, recentRequests);
    return false;
  }
}

const globalLimiter = global.rateLimiter || new RateLimiter();
if (process.env.NODE_ENV !== 'production') {
  global.rateLimiter = globalLimiter;
}

export function getClientIp() {
  const headersList = headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return '127.0.0.1';
}

export default globalLimiter;
