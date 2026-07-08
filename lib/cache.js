class MemoryCache {
  constructor() {
    this.cache = new Map();
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    // Check expiration
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  set(key, value, ttlMs = 60000) {
    this.cache.set(key, {
      value,
      expiry: Date.now() + ttlMs,
    });
  }

  invalidate(key) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}

const globalCache = global.memoryCache || new MemoryCache();
if (process.env.NODE_ENV !== 'production') {
  global.memoryCache = globalCache;
}

export default globalCache;
