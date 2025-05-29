import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import Link from "next/link";

export default async function Hero({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);
	
	return (
		<header className="relative flex flex-col gap-4 py-14 h-screen pt-24 overflow-hidden">
			{/* Éléments décoratifs flottants */}
			<div className="floating-elements-container">
				<div className="particle particle-blue animate-float w-4 h-4" style={{ top: '15%', left: '10%' }}></div>
				<div className="particle particle-purple animate-float delay-300 w-6 h-6" style={{ top: '25%', right: '15%' }}></div>
				<div className="particle particle-cyan animate-float delay-700 w-3 h-3" style={{ bottom: '30%', left: '20%' }}></div>
				<div className="geometric-shape shape-circle bg-gradient-blue-purple animate-pulse w-64 h-64" style={{ top: '-10%', right: '-5%', opacity: '0.1', filter: 'blur(60px)' }}></div>
				<div className="geometric-shape shape-circle bg-gradient-cyan-blue animate-pulse delay-500 w-80 h-80" style={{ bottom: '-20%', left: '-10%', opacity: '0.1', filter: 'blur(70px)' }}></div>
			</div>
			
			<div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-8 h-full px-4 md:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col gap-6 justify-center order-2 md:order-1 -mt-40 md:mt-0">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in">
						{dictionary.home.hero.titlePart1}{" "}
						<span className="gradient-text gradient-text-blue-purple font-black">
							{dictionary.home.hero.titleHighlight}
						</span>
					</h1>
					<p className="text-lg md:text-xl text-muted font-light animate-fade-in delay-200">
						<span className="font-semibold text-highlight-blue">
							{dictionary.home.hero.descriptionPart1}
						</span>{" "}
						{dictionary.home.hero.descriptionPart2}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in delay-300">
						<Link
							href={`/${lang}/contact`}
							className="btn btn-primary hover-lift"
							aria-label={dictionary.home.hero.cta}
						>
							{dictionary.home.hero.cta}
						</Link>
						<Link
							href={`/${lang}/services`}
							className="btn btn-secondary hover-lift"
							aria-label={dictionary.navigation.services}
						>
							{dictionary.navigation.services}
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4 justify-center items-center md:items-end animate-fade-in delay-400">
					<div className="relative depth-effect">
						<div className="animate-float">
							<Image
								src="/hero-image.png"
								alt="Novalya - Solutions numériques pour entreprises"
								width={600}
								height={600}
								className="w-full max-w-md md:max-w-lg"
								priority
							/>
						</div>
						<div className="absolute inset-0 rounded-full bg-gradient-blue-purple opacity-20 blur-3xl -z-10 animate-pulse"></div>
					</div>
				</div>
			</div>
		</header>
	);
}
