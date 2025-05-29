import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { technologies } from "../lib/technologies";
import Image from "next/image";
import { Brain, Cog, Smartphone } from "lucide-react";

export default async function Technologies({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	const extendedTechnologies = [
		...technologies,
		...technologies,
		...technologies,
	];

	return (
		<section className="flex flex-col items-center justify-center py-14 bg-gradient-to-r from-cyan-800 to-purple-800">
			<div className="container mx-auto text-center px-4 md:px-0">
				<h2 className="text-4xl font-bold text-white mb-6">
					{dictionary.home.technologies.title}
				</h2>
				<p className="text-lg text-cyan-100 mb-16 max-w-4xl mx-auto">
					{dictionary.home.technologies.description}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
						<Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
						<h3 className="text-xl font-bold text-white mb-3">
							{dictionary.home.technologies.ai.title}
						</h3>
						<p className="text-cyan-100">
							{dictionary.home.technologies.ai.description}
						</p>
					</div>

					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
						<Cog className="w-12 h-12 text-purple-400 mx-auto mb-4" />
						<h3 className="text-xl font-bold text-white mb-3">
							{dictionary.home.technologies.automation.title}
						</h3>
						<p className="text-cyan-100">
							{dictionary.home.technologies.automation.description}
						</p>
					</div>

					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
						<Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
						<h3 className="text-xl font-bold text-white mb-3">
							{dictionary.home.technologies.development.title}
						</h3>
						<p className="text-cyan-100">
							{dictionary.home.technologies.development.description}
						</p>
					</div>
				</div>
			</div>

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
