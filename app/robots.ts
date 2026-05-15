import { SITE_CONFIG } from "@/app/config/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_CONFIG.SITE_URL}/sitemap.xml`,
  };
}
