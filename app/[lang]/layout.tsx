import { i18n, type Locale } from "@/i18n-config";
import { Geist } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";

const geist = Geist({
	subsets: ["latin"],
});

export async function generateMetadata(props: {
	params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	return {
		metadataBase: new URL("https://novalya.dev"),
		alternates: {
			canonical: `/${lang}`,
			languages: dictionary.seo.languageAlternates,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
	children: React.ReactNode;
	params: Promise<{ lang: Locale }>;
}) {
	const params = await props.params;
	const { children } = props;

	return (
		<html lang={params.lang} className={geist.className}>
			<body className="bg-background text-foreground">{children}</body>
		</html>
	);
}
