/**
 * Security utilities for the application
 */

/**
 * Checks if an IP address belongs to a known web crawler
 * @param ip IP address to check
 * @param userAgent Optional user agent string to verify crawler identity
 * @returns boolean indicating if the IP is from a known crawler
 */
export function isKnownCrawler(ip: string, userAgent?: string): boolean {
  // Known crawler IP prefixes from major search engines
  const crawlerIPPrefixes = [
    // Google crawlers (Googlebot)
    "66.249.", // Main Googlebot range
    "64.233.", // Google crawlers
    "216.239.", // Google crawlers
    "72.14.", // Google
    "209.85.", // Google
    "34.100.", // Google

    // Bing/Microsoft crawlers
    "207.46.", // Bingbot
    "40.77.", // Bingbot/MSNBot
    "13.66.", // Bingbot
    "157.55.", // Bingbot/MSNBot
    "131.253.", // Bingbot
    "199.30.", // Bingbot

    // Yahoo/Slurp
    "8.12.",
    "68.180.",
    "72.30.",

    // Baidu
    "220.181.",
    "123.125.",

    // DuckDuckGo
    "50.16.",
    "54.208.",
    "52.4.",
    "52.5.",
    "52.22.",
    "52.23.",
    "52.44.",
    "52.45.",
    "52.2.",
    "54.174.",
    "23.21.",

    // SEO Tools
    "162.158.", // Ahrefs
    "46.229.", // SemrushBot
    "54.210.", // Moz
    "199.102.", // Majestic
    "34.154.", // Screaming Frog
    "185.191.", // SEMrush IPs

    // Social Media / Aggregators
    "31.13.", // Facebook crawlers
    "66.220.", // Facebook crawlers
    "173.252.", // Facebook crawlers
    "69.171.", // Facebook crawlers
    "54.88.", // Feedly
    "207.241.", // Internet Archive
    "208.70.", // Internet Archive

    // Monitoring Services
    "216.144.", // Pingdom
    "65.19.", // Pingdom
    "65.151.", // Uptime Robot
    "173.208.", // StatusCake
    "122.248.", // Uptime Robot
    "184.75.", // New Relic

    // Other known legitimate bots
    "151.101.", // Fastly CDN (powers many services)
    "192.36.", // Yandex
    "178.154.", // Yandex
    "95.108.", // Yandex
    "77.88.", // Yandex
    "130.193.", // Yandex
    "213.180.", // Yandex
  ];

  // Known crawler User-Agent substrings
  const crawlerUserAgents = [
    "googlebot",
    "bingbot",
    "msnbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "sogou",
    "exabot",
    "facebookexternalhit",
    "ia_archiver",
    "ahrefsbot",
    "semrushbot",
    "mj12bot",
    "seznambot",
    "screaming frog",
    "pingdom",
    "uptimerobot",
    "statuscake",
    "netsystemsresearch",
    "crawler",
    "spider",
    "bot/",
  ];

  // Check if IP starts with any known crawler prefix
  const hasIPPrefix = crawlerIPPrefixes.some((prefix) => ip.startsWith(prefix));

  if (hasIPPrefix) {
    // If no User-Agent is provided, assume it's a crawler based on IP
    if (!userAgent) {
      return true;
    }

    // If User-Agent is provided, verify it has crawler-like patterns
    const lowerUA = userAgent.toLowerCase();
    const hasMatchingUA = crawlerUserAgents.some((botString) =>
      lowerUA.includes(botString)
    );

    // If IP is from crawler range but UA doesn't match, this is suspicious
    // but we'll still trust the IP range as primary identifier
    return true;
  }

  // IP is not in any known crawler range, so not a legitimate crawler
  return false;
}
