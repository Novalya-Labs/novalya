import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { technologies } from "../lib/technologies";
import Image from "next/image";

export default async function Technologies({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	const extendedTechnologies = [
		...technologies,
		...technologies,
		...technologies,
	];

	return (
		<section className="flex flex-col items-center justify-center px-4 py-14 bg-gradient-to-r from-cyan-800 to-purple-800">
			<h2 className="text-4xl font-bold text-white mb-16">
				{dictionary.home.technologies.title}
			</h2>
			<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[infinite-scroll_60s_linear_infinite]">
					{extendedTechnologies.map((technology, index) => (
						<li key={`first-${technology.alt}-${index}`}>
							<Image
								src={technology.image}
								alt={technology.alt}
								width={100}
								height={100}
								className="w-20 h-20 md:w-24 md:h-24 object-contain"
							/>
						</li>
					))}
				</ul>
				<ul
					className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[infinite-scroll_60s_linear_infinite]"
					aria-hidden="true"
				>
					{extendedTechnologies.map((technology, index) => (
						<li key={`second-${technology.alt}-${index}`}>
							<Image
								src={technology.image}
								alt={technology.alt}
								width={100}
								height={100}
								className="w-20 h-20 md:w-24 md:h-24 object-contain"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
