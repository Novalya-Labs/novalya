import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function AboutUs({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<section className="flex flex-col gap-4 px-4 py-14">
			<h2>{dictionary.home.about.title}</h2>
		</section>
	);
}
