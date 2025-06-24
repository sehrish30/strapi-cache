export default () => ({
  "strapi-cache": {
    enabled: true,
    config: {
      debug: true,
      ttl: 86400000, // Time to live for cache items (24 hours)
      cacheableRoutes: [],
      provider: "redis",
      redisConfig: `redis://127.0.0.1:6379`,
      cacheAuthorizedRequests: false,
      cacheHeaders: true,
      cacheableHeaders: ['content-type', 'accept-encoding', 'content-security-policy'],
      cacheGetTimeoutInMs: 2000, // 2s
    },
  },
  "deep-populate": {
    enabled: true,
    config: {
      useCache: false,
      replaceWildcard: true,
      contentTypes: {
        "api::page.page": {
          deny: { relations: ["api::page.page"] }, // Prevent circular references
        },
      },
    },
  },
});
