export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "connect-src": [
            "'self'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "blob:",
            "*.strapi.io",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "img-src": [
            "'self'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            process.env.STRAPI_ADMIN_BUNNY_PULL_ZONE,
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            process.env.STRAPI_ADMIN_BUNNY_PULL_ZONE,
          ],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  {
    name: "strapi::poweredBy",
    config: {
      poweredBy: "Tap Payments",
    },
  },
  "strapi::cors",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::compression",
    config: {
      // Brotli compression to reduce file size
      br: true,
    },
  },
];
