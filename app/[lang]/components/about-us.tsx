import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function AboutUs({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<section className="flex flex-col gap-8 py-14 container mx-auto">
			<h2 className="text-4xl font-bold text-center mb-8">
				{dictionary.home.about.title}
			</h2>

			<div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
				<p className="text-neutral-400">
					{dictionary.home.about.paragraph1Part1}{" "}
					<span className="font-bold text-purple-700">
						{dictionary.home.about.paragraph1Highlight1}
					</span>{" "}
					{dictionary.home.about.paragraph1Part2}{" "}
					<span className="font-bold text-cyan-600">
						{dictionary.home.about.paragraph1Highlight2}
					</span>{" "}
					{dictionary.home.about.paragraph1Part3}{" "}
					<span className="font-bold text-purple-700">
						{dictionary.home.about.paragraph1Highlight3}
					</span>
					{dictionary.home.about.paragraph1Part4}
				</p>

				<p className="text-neutral-400">
					{dictionary.home.about.paragraph2Part1}{" "}
					<span className="font-bold text-cyan-600">
						{dictionary.home.about.paragraph2Highlight1}
					</span>
					{dictionary.home.about.paragraph2Part2}{" "}
					<span className="font-bold text-purple-700">
						{dictionary.home.about.paragraph2Highlight2}
					</span>{" "}
					{dictionary.home.about.paragraph2Part3}{" "}
					<span className="font-bold text-cyan-600">
						{dictionary.home.about.paragraph2Highlight3}
					</span>
					{dictionary.home.about.paragraph2Part4}
				</p>

				<p className="text-neutral-100 font-medium text-center mt-8 text-xl">
					{dictionary.home.about.conclusion}
				</p>
			</div>
		</section>
	);
}
