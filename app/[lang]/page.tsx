import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import Head from "next/head";
import Header from "./components/header";
import Technologies from "./components/technologies";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import AboutUs from "./components/about-us";
import OurProcess from "./components/our-process";
import OurServices from "./components/our-services";
import Hero from "./components/hero";

export default async function IndexPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await props.params;

	const dictionary = await getDictionary(lang);

	return (
		<>
			<Head>
				<title>{dictionary.home.metatags.title}</title>
				<meta
					name="description"
					content={dictionary.home.metatags.description}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content={dictionary.home.metatags.title} />
				<meta
					property="og:description"
					content={dictionary.home.metatags.description}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://novalya.dev/" />
				<meta property="og:image" content="https://novalya.dev/og-image.jpg" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={dictionary.home.metatags.title} />
				<meta
					name="twitter:description"
					content={dictionary.home.metatags.description}
				/>
				<meta name="twitter:image" content="https://novalya.dev/og-image.jpg" />
			</Head>
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
