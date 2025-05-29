import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import Header from "./components/header";
import Technologies from "./components/technologies";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import AboutUs from "./components/about-us";
import OurProcess from "./components/our-process";
import OurServices from "./components/our-services";
import Hero from "./components/hero";
import type { Metadata } from "next";

export async function generateMetadata(props: {
	params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	return {
		title: dictionary.home.metatags.title,
		description: dictionary.home.metatags.description,
		keywords: [
			dictionary.seo.keywords.digitalTransformation,
			"Next.js",
			"React",
			"AI",
			dictionary.seo.keywords.artificialIntelligence,
			dictionary.seo.keywords.automation,
			dictionary.seo.keywords.webDevelopment,
			dictionary.seo.keywords.mobileApp,
			dictionary.seo.keywords.sme,
			dictionary.seo.keywords.businessProcesses,
			dictionary.seo.keywords.digitalization,
			"Novalya",
		],
		authors: [{ name: "Novalya Team" }],
		creator: "Novalya",
		publisher: "Novalya",
		alternates: {
			canonical: `/${lang}`,
			languages: dictionary.seo.languageAlternates,
		},
		openGraph: {
			title: dictionary.home.metatags.title,
			description: dictionary.home.metatags.description,
			url: `https://novalya.dev/${lang}`,
			siteName: dictionary.seo.openGraph.siteName,
			images: [
				{
					url: "/og-image.jpg",
					width: 1200,
					height: 630,
					alt: dictionary.seo.openGraph.imageAlt,
				},
			],
			locale: dictionary.seo.openGraph.locale,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: dictionary.home.metatags.title,
			description: dictionary.home.metatags.description,
			images: ["/og-image.jpg"],
		},
	};
}

export default async function IndexPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await props.params;

	return (
		<>
			<Header lang={lang} />
			<main className="flex flex-col gap-16">
				<Hero lang={lang} />
				<Technologies lang={lang} />
				<AboutUs lang={lang} />
				<OurServices lang={lang} />
				<OurProcess lang={lang} />
				<Blogs lang={lang} />
			</main>
			<Footer lang={lang} />
		</>
	);
}
