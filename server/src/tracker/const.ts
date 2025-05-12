/**
 * Set to true to disable origin checking for tracking requests
 * This should only be enabled in development or testing environments
 */
export const DISABLE_ORIGIN_CHECK = process.env.DISABLE_ORIGIN_CHECK === "true";

export const searchDomains = [
  // Google and variants
  "google.com",
  "google.",

  // Bing
  "bing.com",
  "bing.",

  // Yahoo
  "yahoo.com",
  "yahoo.",
  "search.yahoo.",

  // Other global search engines
  "duckduckgo.com",
  "duck.com",
  "baidu.com",
  "baidu.",
  "yandex.com",
  "yandex.",
  "ya.ru",
  "qwant.com",
  "search.",
  "ecosia.org",
  "brave.com",
  "startpage.com",
  "searchencrypt.com",
  "searx.",
  "swisscows.com",
  "mojeek.com",
  "gibiru.com",
  "metager.org",
  "search.aol.com",
  "lycos.com",
  "wolframalpha.com",
  "ask.com",
  "dogpile.com",
  "webcrawler.com",

  // Regional search engines
  "naver.com",
  "daum.net",
  "seznam.cz",
  "coccoc.com",
  "yam.com",
  "so.com",
  "sogou.com",
  "goo.ne.jp",
  "rambler.ru",
];

export const socialDomains = [
  // Major social networks and their variants
  "facebook.com",
  "fb.com",
  "fb.me",
  "messenger.com",
  "m.facebook.com",
  "instagram.com",
  "instagram.",
  "ig.me",
  "twitter.com",
  "t.co",
  "x.com",
  "linkedin.com",
  "lnkd.in",
  "tiktok.com",
  "tiktok.",
  "vm.tiktok.com",
  "pinterest.com",
  "pinterest.",
  "pin.it",
  "reddit.com",
  "redd.it",
  "old.reddit.com",

  // Other global social platforms
  "snapchat.com",
  "snap.com",
  "youtube.com",
  "youtu.be",
  "discord.com",
  "discord.gg",
  "whatsapp.com",
  "wa.me",
  "telegram.org",
  "t.me",
  "medium.com",
  "tumblr.com",
  "tmblr.co",
  "quora.com",
  "threads.net",
  "mastodon.social",
  "mastodon.",
  "slack.com",
  "nextdoor.com",
  "clubhouse.com",
  "twitch.tv",
  "news.ycombinator.com",
  "hn.algolia.com",

  // Regional social platforms
  "wechat.com",
  "weixin.qq.com",
  "vk.com",
  "qq.com",
  "weibo.com",
  "weibo.cn",
  "line.me",
];

export const videoDomains = [
  // Major video platforms
  "youtube.com",
  "youtu.be",
  "vimeo.com",
  "twitch.tv",
  "dailymotion.com",

  // Streaming services
  "netflix.com",
  "disneyplus.com",
  "hulu.com",
  "hbomax.com",
  "peacocktv.com",
  "primevideo.com",
  "amazon.com/prime-video",
  "paramountplus.com",
  "discoveryplus.com",
  "crunchyroll.com",
  "funimation.com",
  "curiositystream.com",
  "mubi.com",

  // Video sharing
  "tiktok.com",
  "vm.tiktok.com",
  "vevo.com",
  "streamable.com",
  "bitchute.com",
  "rumble.com",
  "odysee.com",
  "lbry.tv",
  "reels.instagram.com",

  // Educational
  "ted.com",
  "khanacademy.org",
  "skillshare.com",
  "udemy.com",
  "masterclass.com",
  "coursera.org",
  "pluralsight.com",
  "lynda.com",
  "linkedin.com/learning",

  // Live streaming
  "facebook.com/gaming",
  "youtube.com/live",
  "kick.com",
  "caffeine.tv",

  // Regional platforms
  "bilibili.com",
  "niconico.jp",
  "vlive.tv",
  "youku.com",
  "tudou.com",
  "iqiyi.com",
];

export const shoppingDomains = [
  // Major marketplaces
  "amazon.com",
  "amazon.",
  "ebay.com",
  "ebay.",
  "etsy.com",
  "walmart.com",
  "target.com",
  "aliexpress.com",
  "wish.com",
  "shopify.com",
  "shop.app",

  // Fashion and apparel
  "asos.com",
  "zara.com",
  "forever21.com",
  "hm.com",
  "gap.com",
  "macys.com",
  "nordstrom.com",
  "net-a-porter.com",
  "farfetch.com",
  "fashionnova.com",

  // Electronics
  "bestbuy.com",
  "newegg.com",
  "bhphotovideo.com",
  "apple.com/shop",
  "samsung.com/shop",

  // Home and furniture
  "wayfair.com",
  "ikea.com",
  "homedepot.com",
  "lowes.com",
  "overstock.com",

  // Regional marketplaces
  "taobao.com",
  "jd.com",
  "rakuten.com",
  "flipkart.com",
  "lazada.com",
  "mercadolibre.com",
  "ozon.ru",
  "allegro.pl",
  "coupang.com",
  "gmarket.co.kr",

  // Grocery and food
  "instacart.com",
  "freshdirect.com",
  "ocado.com",
  "groceries.",
  "doordash.com",
  "ubereats.com",
  "grubhub.com",
  "deliveroo.com",
];

// Define sources types
export const searchSources = [
  // Major search engines
  "google",
  "bing",
  "yahoo",
  "duckduckgo",
  "baidu",
  "yandex",
  "qwant",

  // Other search engines
  "ecosia",
  "brave",
  "startpage",
  "searchencrypt",
  "swisscows",
  "mojeek",
  "gibiru",
  "metager",
  "wolframalpha",
  "ask",
  "dogpile",
  "webcrawler",
  "aol",

  // Regional search engines
  "naver",
  "daum",
  "seznam",
  "coccoc",
  "yam",
  "so",
  "sogou",
  "goo",
  "rambler",
];
export const socialSources = [
  // Major social platforms
  "facebook",
  "twitter",
  "linkedin",
  "instagram",
  "tiktok",
  "pinterest",
  "reddit",

  // Other platforms
  "snapchat",
  "youtube",
  "discord",
  "whatsapp",
  "telegram",
  "medium",
  "tumblr",
  "quora",
  "threads",
  "mastodon",
  "slack",
  "nextdoor",
  "clubhouse",
  "twitch",
  "hacker news",
  "hackernews",
  "ycombinator",

  // Shortened variants
  "fb",
  "ig",
  "pin",
  "li",
  "tw",
  "yt",

  // Regional platforms
  "wechat",
  "weixin",
  "vk",
  "qq",
  "weibo",
  "line",
  "kakao",
];
export const videoSources = [
  // Major video platforms
  "youtube",
  "vimeo",
  "twitch",
  "dailymotion",
  "tiktok",

  // Streaming services
  "disneyplus",
  "netflix",
  "hulu",
  "hbomax",
  "peacock",
  "prime video",
  "paramount+",
  "discovery+",
  "crunchyroll",
  "funimation",
  "curiositystream",
  "mubi",

  // Video sharing
  "vevo",
  "streamable",
  "bitchute",
  "rumble",
  "odysee",
  "lbry",
  "reels",

  // Educational
  "ted",
  "khanacademy",
  "skillshare",
  "udemy",
  "masterclass",
  "coursera",
  "pluralsight",
  "lynda",

  // Live streaming
  "kick",
  "caffeine",

  // Regional platforms
  "bilibili",
  "niconico",
  "vlive",
  "youku",
  "tudou",
  "iqiyi",
];
export const shoppingSources = [
  // Major marketplaces
  "amazon",
  "ebay",
  "etsy",
  "shopify",
  "walmart",
  "target",
  "aliexpress",
  "wish",
  "shop",
  "store",
  "shopping",

  // Fashion and apparel
  "asos",
  "zara",
  "forever21",
  "hm",
  "gap",
  "macys",
  "nordstrom",
  "net-a-porter",
  "farfetch",
  "fashionnova",

  // Electronics
  "bestbuy",
  "newegg",
  "bhphotovideo",
  "apple",
  "samsung",

  // Home and furniture
  "wayfair",
  "ikea",
  "homedepot",
  "lowes",
  "overstock",

  // Regional marketplaces
  "taobao",
  "jd",
  "rakuten",
  "flipkart",
  "lazada",
  "mercadolibre",
  "ozon",
  "allegro",
  "coupang",
  "gmarket",

  // Grocery and food
  "instacart",
  "freshdirect",
  "ocado",
  "groceries",
  "doordash",
  "ubereats",
  "grubhub",
  "deliveroo",
];
export const emailSources = [
  "email",
  "e_mail",
  "e-mail",
  "mail",
  "newsletter",
  "mailchimp",
  "campaign-archive",
  "sendgrid",
  "mailgun",
  "constantcontact",
  "klaviyo",
  "hubspot",
  "marketo",
  "brevo",
  "sendinblue",
  "getresponse",
  "activecampaign",
  "mailerlite",
  "convertkit",
  "drip",
  "gmail",
  "yahoo",
  "outlook",
  "hotmail",
  "list",
  "blast",
  "campaign",
];
export const smsSources = [
  "sms",
  "text",
  "twilio",
  "message",
  "whatsapp",
  "viber",
  "line",
  "imessage",
];

// Medium types
export const socialMediums = [
  "sm",
  "social-media",
  "social-network",
  "social",
  "community",
  "forum",
  "organic-social",
  "feed",
  "share",
  "repost",
  "tweet",
  "post",
  "update",
  "engagement",
  "ugc",
  "user-generated",
  "social_post",
];

export const videoMediums = [
  "video",
  "youtube",
  "vimeo",
  "streaming",
  "live",
  "tv",
  "ott",
  "broadcast",
  "clip",
  "trailer",
  "episode",
  "series",
  "documentary",
  "film",
  "movie",
  "animation",
  "video_ad",
  "pre-roll",
  "mid-roll",
  "post-roll",
];

export const displayMediums = [
  "display",
  "interstitial",
  "banner",
  "ad",
  "advert",
  "advertisement",
  "rich-media",
  "popup",
  "popunder",
  "overlay",
  "expandable",
  "floating",
  "skin",
  "wallpaper",
  "native",
  "programmatic",
  "dsp",
  "retargeting",
  "remarketing",
  "impression",
];

export const affiliateMediums = [
  "affiliate",
  "aff",
  "partner",
  "partnership",
  "commission",
  "rev-share",
  "performance",
  "cpa",
  "lead-gen",
  "lead-generation",
];

export const referralMediums = [
  "referral",
  "link",
  "app",
  "invite",
  "recommendation",
  "advocate",
  "refer-a-friend",
  "share",
  "web",
  "embed",
  "backlink",
  "qr",
  "qr-code",
  "deeplink",
  "vanity-url",
];

export const emailMediums = [
  "email",
  "e_mail",
  "e-mail",
  "mail",
  "newsletter",
  "digest",
  "bulletin",
  "marketing_email",
  "promotional",
  "transactional",
  "notification_email",
  "alert",
  "confirmation",
  "update",
  "news",
];

export const pushMediums = [
  "push",
  "notification",
  "mobile",
  "app-notification",
  "web-notification",
  "browser-notification",
  "alert",
  "toast",
  "prompt",
  "pwa",
  "install",
];

export const audioMediums = [
  "audio",
  "podcast",
  "radio",
  "broadcast",
  "streaming",
  "music",
  "playlist",
  "episode",
  "show",
  "airplay",
  "song",
  "track",
  "voice",
  "audio_ad",
  "spot",
  "jingle",
  "commercial",
];

// Mobile App IDs (reverse DNS format)
export const socialAppIds = [
  // Facebook family
  "com.facebook",
  "com.facebook.katana",
  "com.facebook.facebook",
  "com.facebook.messenger",
  "com.facebook.orca",

  // Instagram
  "com.instagram",
  "com.instagram.android",
  "com.burbn.instagram",

  // Twitter/X
  "com.twitter",
  "com.twitter.android",
  "com.atebits.tweetie2",

  // TikTok
  "com.zhiliaoapp.musically",
  "com.tiktok",

  // Snapchat
  "com.snapchat",
  "com.snapchat.android",
  "com.toyopagroup.picaboo",

  // LinkedIn
  "com.linkedin",
  "com.linkedin.android",
  "com.linkedin.LinkedIn",

  // Pinterest
  "com.pinterest",

  // Reddit
  "com.reddit",
  "com.reddit.frontpage",
  "com.reddit.reddit",

  // Discord
  "com.discord",
  "com.hammerandchisel.discord",

  // Telegram
  "org.telegram",
  "org.telegram.messenger",
  "ph.telegra.Telegraph",

  // WhatsApp
  "com.whatsapp",

  // Thread
  "com.instagram.barcelona",
  "com.threads",

  // Bluesky
  "xyz.blueskyweb.app",

  // Mastodon
  "org.joinmastodon.android",

  // Other social
  "com.slack",
  "im.vector.app",
];

export const videoAppIds = [
  // YouTube
  "com.google.android.youtube",
  "com.google.ios.youtube",
  "com.google.ios.youtubekids",
  "com.google.android.apps.youtube.kids",
  "com.google.ios.youtubeunplugged",
  "com.google.android.youtube.tv",

  // Streaming services
  "com.netflix",
  "com.disney.disneyplus",
  "com.hulu",
  "com.hbo.hbonow",
  "com.hbo.hbomax",
  "com.peacocktv",
  "com.amazon.avod",
  "com.amazon.amazonvideo",
  "com.cbs.app",
  "com.paramountplus",

  // Twitch
  "tv.twitch",
  "tv.twitch.android.app",

  // Other video
  "com.vimeo",
  "com.dailymotion",
];

export const searchAppIds = [
  // Google
  "com.google.android.googlequicksearchbox",
  "com.google.android.websearch",

  // Bing
  "com.microsoft.bing",

  // Yahoo
  "com.yahoo.mobile.client.android.search",
  "com.yahoo.search",

  // DuckDuckGo
  "com.duckduckgo.mobile.android",
  "com.duckduckgo.mobile.ios",

  // Other search
  "com.ecosia.android",
  "com.brave.browser",
  "org.mozilla.firefox",
  "com.microsoft.emmx",
];

export const emailAppIds = [
  // Gmail
  "com.google.android.gm",
  "com.google.android.gm.lite",
  "com.google.Gmail",

  // Outlook
  "com.microsoft.office.outlook",
  "com.microsoft.outlooklite",
  "com.microsoft.Office.Outlook",

  // Yahoo Mail
  "com.yahoo.mobile.client.android.mail",
  "com.yahoo.Aerogram",

  // Apple Mail
  "com.apple.mobilemail",

  // ProtonMail
  "ch.protonmail.android",
  "ch.protonmail.protonmail",

  // Other mail apps
  "com.superhuman.mail",
  "com.superhuman.Superhuman",
  "com.samsung.android.email.provider",
  "me.bluemail.mail",
  "com.easilydo.mail",
  "org.kman.AquaMail",
  "com.aol.mobile.aolapp",
  "ru.mail.mailapp",
  "ru.mail.mail",
  "ru.yandex.mail",
  "com.pingapp.app",
  "com.readdle.smartemail",
];

export const shoppingAppIds = [
  // Amazon
  "com.amazon.mShop",
  "com.amazon.shopping",

  // eBay
  "com.ebay.mobile",

  // Walmart
  "com.walmart.android",

  // Target
  "com.target.ui",

  // Etsy
  "com.etsy.android",

  // Shopify
  "com.shopify.mobile",

  // Wish
  "com.contextlogic.wish",

  // AliExpress
  "com.alibaba.aliexpresshd",

  // Other shopping
  "com.wayfair.wayfair",
  "com.newegg.app",
  "com.bestbuy.android",
  "com.ikea.app",
  "com.homedepot",
];

// Categorize mobile apps by their bundle ID/package name - helper function
export function isMobileAppId(source: string): boolean {
  // Check for common app identifier patterns (com.company.app, etc.)
  return /^[a-z0-9_]+(\.([a-z0-9_]+))+$/.test(source);
}

export const TOMATO_PATH_NAMES = [
  // Existing paths
  "/stats/*/EU",
  "/stats/*/NA",
  "/stats/*/ASIA",
  "/",

  // Main pages
  "/tanks",
  "/tank-stats",
  "/compare",
  "/account",
  "/blog",
  "/login",
  "/wg-login",
  "/patreon",
  "/contact",
  "/error",
  "/top-battles",

  // Economic pages
  "/economics/all",
  "/economics/premium",
  "/economics/standard",

  // Tank performance pages
  "/tank-performance/recent/EU",
  "/tank-performance/recent/NA",
  "/tank-performance/recent/ASIA",
  "/tank-performance/EU/recent",
  "/tank-performance/NA/recent",
  "/tank-performance/ASIA/recent",
  "/tank-performance/overall/EU",
  "/tank-performance/overall/NA",
  "/tank-performance/overall/ASIA",
  "/tank-performance/onslaught/EU",
  "/tank-performance/onslaught/NA",
  "/tank-performance/onslaught/ASIA",

  // Server stats pages
  "/server-stats/EU",
  "/server-stats/NA",
  "/server-stats/ASIA",

  // Stats related
  "/stats/no-player",

  // MoE pages
  "/moe/EU",
  "/moe/NA",
  "/moe/ASIA",
  "/moe",

  // Mastery pages
  "/mastery/EU",
  "/mastery/NA",
  "/mastery/ASIA",
  "/mastery",

  // Leaderboard pages
  "/leaderboards/EU",
  "/leaderboards/NA",
  "/leaderboards/ASIA",
  "/leaderboards",

  // Meta insights
  "/meta-insights/EU",
  "/meta-insights/NA",
  "/meta-insights/ASIA",

  // Mod guides
  "/mod-guide",
  "/mod-guide/manual-install",
  "/mod-guide/uninstall",

  // Generalized clan stats paths
  "/clan-stats/*/EU",
  "/clan-stats/*/NA",
  "/clan-stats/*/ASIA",

  // Generalized WoWS paths
  "/wows",
  "/wows/stats/*/EU",
  "/wows/stats/*/NA",
  "/wows/stats/*/ASIA",
  "/wows/stats/no-player",
  "/wows/ship-stats/recent/EU",
  "/wows/ship-stats/recent/NA",
  "/wows/ship-stats/recent/ASIA",
  "/wows/ship-stats/overall/EU",
  "/wows/ship-stats/overall/NA",
  "/wows/ship-stats/overall/ASIA",
  "/wows/ship-stats/EU/EU",
  "/wows/ship-stats/NA/EU",
  "/wows/ship-stats/ASIA/EU",
  "/wows/ship-stats/EU/recent",
  "/wows/ship-stats/NA/recent",
  "/wows/ship-stats/ASIA/recent",
  "/wows/leaderboards/recent/all/EU",
  "/wows/leaderboards/EU/recent/EU",
  "/wows/leaderboards/EU/recent/all",

  // Generalized maps paths
  "/maps/EU",
  "/maps/NA",
  "/maps/ASIA",
  "/maps/EU/*",
  "/maps/NA/*",
  "/maps/ASIA/*",
];

export const TOMATO_EVENT_NAMES = [
  "page-visit",
  "player-page-tab",
  "player-page-action",
  "battle-row-click",
  "battle-result",
  "tank-page-tab",
];
