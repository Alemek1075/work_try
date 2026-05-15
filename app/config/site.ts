export const SITE_CONFIG = {
  GOOGLE_FORM_FOOD_URL: process.env.NEXT_PUBLIC_GOOGLE_FORM_FOOD_URL || "https://docs.google.com/forms/d/YOUR_FOOD_FORM_ID/viewform",
  GOOGLE_FORM_DRIVE_URL: process.env.NEXT_PUBLIC_GOOGLE_FORM_DRIVE_URL || "https://docs.google.com/forms/d/YOUR_DRIVE_FORM_ID/viewform",

  PHONE_FOOD: process.env.NEXT_PUBLIC_PHONE_FOOD || "+421 918 000 000",
  PHONE_DRIVE: process.env.NEXT_PUBLIC_PHONE_DRIVE || "+421 915 000 000",
  EMAIL_FOOD: process.env.NEXT_PUBLIC_EMAIL_FOOD || "food@yourfleet.sk",
  EMAIL_DRIVE: process.env.NEXT_PUBLIC_EMAIL_DRIVE || "drive@yourfleet.sk",
  HOURS: process.env.NEXT_PUBLIC_HOURS || "Mon–Fri 9:00–17:00",

  COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME || "YourFleet",
  TAGLINE_SK: "Pracuj s Bolt. Zarábaj viac.",
  TAGLINE_EN: "Work with Bolt. Earn more.",
  META_DESCRIPTION_SK:
    "Pridaj sa do flotily Bolt Food a Bolt Drive na Slovensku. Flexibilná práca, týždenná výplata, nízka provízia. Zaregistruj sa ešte dnes.",
  META_DESCRIPTION_EN:
    "Join the Bolt Food and Bolt Drive fleet in Slovakia. Flexible work, weekly payments, low commission. Register today.",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://examplebolt.vercel.app",
  OG_IMAGE: process.env.NEXT_PUBLIC_OG_IMAGE || "/og-image.svg",

  STATS: {
    couriers: "500+",
    drivers: "200+",
    cities: "8",
    avgEarning: "€1 800",
  },
} as const;
