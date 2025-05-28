import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function Hero({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<header className="flex flex-col gap-4 px-4 py-14 h-screen pt-24">
			<h1>{dictionary.home.hero.title}</h1>
			<p>{dictionary.home.hero.description}</p>
		</header>
	);
}
