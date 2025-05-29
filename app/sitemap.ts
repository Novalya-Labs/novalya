import type { MetadataRoute } from "next";
import { i18n } from "@/i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://novalya.dev";

	// Static pages - these should match your actual routes
	const staticPages = ["", "/blogs", "/contact", "/legal", "/privacy"];

	// Generate sitemap entries for all languages
	const sitemap: MetadataRoute.Sitemap = [];

	for (const locale of i18n.locales) {
		for (const page of staticPages) {
			sitemap.push({
				url: `${baseUrl}/${locale}${page}`,
				lastModified: new Date(),
				changeFrequency: page === "/blogs" ? "weekly" : "monthly",
				priority: page === "" ? 1 : page === "/blogs" ? 0.8 : 0.7,
			});
		}
	}

	return sitemap;
}
