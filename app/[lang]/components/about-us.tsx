import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function AboutUs({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);
	
	return (
		<section className="relative flex flex-col gap-8 py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
			{/* Éléments décoratifs */}
			<div className="floating-elements-container">
				<div className="geometric-shape shape-circle bg-gradient-cyan-blue animate-pulse w-96 h-96" style={{ top: '10%', left: '-10%', opacity: '0.1', filter: 'blur(80px)' }}></div>
				<div className="geometric-shape shape-circle bg-gradient-blue-purple animate-pulse delay-500 w-80 h-80" style={{ bottom: '10%', right: '-5%', opacity: '0.1', filter: 'blur(70px)' }}></div>
				<div className="particle particle-blue animate-float w-3 h-3" style={{ top: '30%', right: '10%' }}></div>
				<div className="particle particle-purple animate-float delay-400 w-4 h-4" style={{ bottom: '20%', left: '15%' }}></div>
			</div>
			
			<div className="scroll-reveal">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text gradient-text-blue-purple">
					{dictionary.home.about.title}
				</h2>
			</div>
			
			<div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed scroll-reveal">
				<p className="text-muted">
					{dictionary.home.about.paragraph1Part1}{" "}
					<span className="font-bold text-highlight-purple">
						{dictionary.home.about.paragraph1Highlight1}
					</span>{" "}
					{dictionary.home.about.paragraph1Part2}{" "}
					<span className="font-bold text-highlight-blue">
						{dictionary.home.about.paragraph1Highlight2}
					</span>{" "}
					{dictionary.home.about.paragraph1Part3}{" "}
					<span className="font-bold text-highlight-purple">
						{dictionary.home.about.paragraph1Highlight3}
					</span>
					{dictionary.home.about.paragraph1Part4}
				</p>
				
				<p className="text-muted">
					{dictionary.home.about.paragraph2Part1}{" "}
					<span className="font-bold text-highlight-blue">
						{dictionary.home.about.paragraph2Highlight1}
					</span>
					{dictionary.home.about.paragraph2Part2}{" "}
					<span className="font-bold text-highlight-purple">
						{dictionary.home.about.paragraph2Highlight2}
					</span>{" "}
					{dictionary.home.about.paragraph2Part3}{" "}
					<span className="font-bold text-highlight-blue">
						{dictionary.home.about.paragraph2Highlight3}
					</span>
					{dictionary.home.about.paragraph2Part4}
				</p>
				
				<div className="glass-card mt-12 scroll-reveal">
					<p className="text-light font-medium text-center text-xl md:text-2xl">
						{dictionary.home.about.conclusion}
					</p>
				</div>
			</div>
		</section>
	);
}
