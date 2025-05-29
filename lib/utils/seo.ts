import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";

interface SEOConfig {
	title: string;
	description: string;
	keywords?: string[];
	canonical?: string;
	openGraph?: {
		title?: string;
		description?: string;
		images?: string[];
		type?: "website" | "article";
	};
}

interface Dictionary {
	seo: {
		languageAlternates: Record<string, string>;
		keywords: {
			digitalTransformation: string;
			artificialIntelligence: string;
			automation: string;
			privacyPolicy: string;
			dataProtection: string;
			privacy: string;
			legalNotice: string;
			termsOfService: string;
			intellectualProperty: string;
			liability: string;
		};
		openGraph: {
			siteName: string;
			locale: string;
		};
	};
}

export function generateSEOMetadata(
	seoConfig: SEOConfig,
	dictionary: Dictionary,
	lang: Locale,
): Metadata {
	return {
		title: seoConfig.title,
		description: seoConfig.description,
		keywords: [
			...(seoConfig.keywords || []),
			dictionary.seo.keywords.digitalTransformation,
			dictionary.seo.keywords.artificialIntelligence,
			dictionary.seo.keywords.automation,
			"Novalya",
		],
		authors: [{ name: "Novalya Team" }],
		creator: "Novalya",
		publisher: "Novalya",
		alternates: {
			canonical: seoConfig.canonical || `/${lang}`,
			languages: dictionary.seo.languageAlternates,
		},
		openGraph: {
			title: seoConfig.openGraph?.title || seoConfig.title,
			description: seoConfig.openGraph?.description || seoConfig.description,
			url: `https://novalya.dev${seoConfig.canonical || `/${lang}`}`,
			siteName: dictionary.seo.openGraph.siteName,
			images: seoConfig.openGraph?.images || ["/og-image.jpg"],
			locale: dictionary.seo.openGraph.locale,
			type: seoConfig.openGraph?.type || "website",
		},
		twitter: {
			card: "summary_large_image",
			title: seoConfig.openGraph?.title || seoConfig.title,
			description: seoConfig.openGraph?.description || seoConfig.description,
			images: seoConfig.openGraph?.images || ["/og-image.jpg"],
		},
	};
}
