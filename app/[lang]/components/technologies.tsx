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
		<section className="relative flex flex-col items-center justify-center py-16 md:py-24 bg-gradient-to-r from-cyan-800 to-purple-800 overflow-hidden">
			{/* Éléments décoratifs */}
			<div className="floating-elements-container">
				<div className="geometric-shape shape-circle bg-white animate-pulse w-64 h-64" style={{ top: '10%', right: '5%', opacity: '0.05', filter: 'blur(60px)' }}></div>
				<div className="geometric-shape shape-circle bg-white animate-pulse delay-500 w-80 h-80" style={{ bottom: '5%', left: '10%', opacity: '0.05', filter: 'blur(70px)' }}></div>
				<div className="particle particle-blue animate-float w-3 h-3" style={{ top: '20%', left: '20%' }}></div>
				<div className="particle particle-cyan animate-float delay-400 w-4 h-4" style={{ bottom: '30%', right: '25%' }}></div>
				<div className="particle particle-purple animate-float delay-700 w-2 h-2" style={{ top: '40%', right: '10%' }}></div>
			</div>
			
			<div className="container mx-auto text-center px-4 md:px-6 lg:px-8 relative z-10">
				<div className="scroll-reveal">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						{dictionary.home.technologies.title}
					</h2>
					<p className="text-lg md:text-xl text-cyan-100 mb-16 max-w-4xl mx-auto">
						{dictionary.home.technologies.description}
					</p>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<div className="bg-glass rounded-lg p-6 border border-light hover-lift scroll-reveal">
						<Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
						<h3 className="text-xl font-bold text-white mb-3">
							{dictionary.home.technologies.ai.title}
						</h3>
						<p className="text-cyan-100">
							{dictionary.home.technologies.ai.description}
						</p>
					</div>
					
					<div className="bg-glass rounded-lg p-6 border border-light hover-lift scroll-reveal delay-200">
						<Cog className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
						<h3 className="text-xl font-bold text-white mb-3">
							{dictionary.home.technologies.automation.title}
						</h3>
						<p className="text-cyan-100">
							{dictionary.home.technologies.automation.description}
						</p>
					</div>
					
					<div className="bg-glass rounded-lg p-6 border border-light hover-lift scroll-reveal delay-400">
						<Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
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
						<li key={`first-${technology.alt}-${index}`} className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
							<div className="bg-glass p-4 rounded-lg hover-scale">
								<Image
									src={technology.image}
									alt={technology.alt}
									width={100}
									height={100}
									className="w-20 h-20 md:w-24 md:h-24 object-contain"
								/>
							</div>
						</li>
					))}
				</ul>
				<ul
					className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[infinite-scroll_60s_linear_infinite]"
					aria-hidden="true"
				>
					{extendedTechnologies.map((technology, index) => (
						<li key={`second-${technology.alt}-${index}`} className="animate-float" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
							<div className="bg-glass p-4 rounded-lg hover-scale">
								<Image
									src={technology.image}
									alt={technology.alt}
									width={100}
									height={100}
									className="w-20 h-20 md:w-24 md:h-24 object-contain"
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
