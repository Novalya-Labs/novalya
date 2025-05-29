import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Header from "../components/header";
import Footer from "../components/footer";
import { generateSEOMetadata } from "@/lib/utils/seo";
import type { Metadata } from "next";

export async function generateMetadata(props: {
	params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	return generateSEOMetadata(
		{
			title: dictionary.contact.metatags.title,
			description: dictionary.contact.metatags.description,
			canonical: `/${lang}/contact`,
		},
		dictionary,
		lang,
	);
}

export default async function ContactPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	return (
		<>
			<Header lang={lang} />
			<main className="flex flex-col gap-16">
				<h1>{dictionary.contact.title}</h1>
			</main>
			<Footer lang={lang} />
		</>
	);
}
