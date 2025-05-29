import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import Link from "next/link";

export default async function Hero({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<header className="flex flex-col gap-4 py-14 h-screen pt-24">
			<div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-4 h-full px-4 md:px-0">
				<div className="flex flex-col gap-4 justify-center order-2 md:order-1 -mt-40 md:mt-0 z-10">
					<h1 className="text-6xl font-bold">
						{dictionary.home.hero.titlePart1}{" "}
						<span className="text-purple-700 font-black">
							{dictionary.home.hero.titleHighlight}
						</span>
					</h1>
					<p className="text-lg text-gray-300 font-thin">
						<span className="font-bold text-cyan-400">
							{dictionary.home.hero.descriptionPart1}
						</span>{" "}
						{dictionary.home.hero.descriptionPart2}
					</p>
					<div className="flex flex-col gap-2 items-start">
						<Link
							href="/contact"
							className="bg-gradient-to-r from-cyan-500 to-purple-700 text-white inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold hover:from-purple-600 hover:to-cyan-800 transition-colors duration-300"
						>
							{dictionary.home.hero.cta}
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4 justify-center">
					<Image
						src="/hero-image.png"
						alt="Hero Image"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</header>
	);
}
