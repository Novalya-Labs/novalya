import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default async function BlogsPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	return (
		<>
			<Head>
				<title>{dictionary.blogs.metatags.title}</title>
				<meta
					name="description"
					content={dictionary.blogs.metatags.description}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={dictionary.blogs.metatags.title} />
				<meta
					name="twitter:description"
					content={dictionary.blogs.metatags.description}
				/>
				<meta name="twitter:image" content="https://novalya.dev/og-image.jpg" />
				<meta property="og:title" content={dictionary.blogs.metatags.title} />
				<meta
					property="og:description"
					content={dictionary.blogs.metatags.description}
				/>
				<meta property="og:image" content="https://novalya.dev/og-image.jpg" />
			</Head>
			<Header lang={lang} />
			<main className="flex flex-col gap-16">
				<h1>{dictionary.blogs.title}</h1>
			</main>
			<Footer lang={lang} />
		</>
	);
}
