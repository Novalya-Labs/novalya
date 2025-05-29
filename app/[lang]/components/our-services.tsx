import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Search, Cog, Brain, Code, Users } from "lucide-react";

export default async function OurServices({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);
	const services = [
		{
			icon: Search,
			key: "audit" as const,
			gradient: "from-blue-500 to-cyan-500",
			delay: "delay-100",
		},
		{
			icon: Cog,
			key: "automation" as const,
			gradient: "from-purple-500 to-pink-500",
			delay: "delay-200",
		},
		{
			icon: Brain,
			key: "ai" as const,
			gradient: "from-cyan-500 to-blue-500",
			delay: "delay-300",
		},
		{
			icon: Code,
			key: "development" as const,
			gradient: "from-green-500 to-teal-500",
			delay: "delay-400",
		},
		{
			icon: Users,
			key: "support" as const,
			gradient: "from-orange-500 to-red-500",
			delay: "delay-500",
		},
	];
	
	return (
		<section className="relative flex flex-col gap-12 py-16 md:py-24 container mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
			{/* Éléments décoratifs */}
			<div className="floating-elements-container">
				<div className="geometric-shape shape-square bg-gradient-blue-purple animate-rotate-slowly w-64 h-64" style={{ top: '20%', right: '-10%', opacity: '0.1', filter: 'blur(60px)' }}></div>
				<div className="geometric-shape shape-triangle bg-gradient-cyan-blue animate-float w-48 h-48" style={{ bottom: '10%', left: '-5%', opacity: '0.1', filter: 'blur(40px)' }}></div>
				<div className="particle particle-cyan animate-float delay-300 w-4 h-4" style={{ top: '40%', left: '10%' }}></div>
				<div className="particle particle-purple animate-float delay-700 w-3 h-3" style={{ bottom: '30%', right: '15%' }}></div>
			</div>
			
			<div className="text-center scroll-reveal">
				<h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text gradient-text-blue-purple">
					{dictionary.home.ourServices.title}
				</h2>
				<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
					{dictionary.home.ourServices.description}
				</p>
			</div>
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service) => {
					const IconComponent = service.icon;
					const serviceData = dictionary.home.ourServices[service.key];
					return (
						<div
							key={service.key}
							className={`glass-card hover-lift scroll-reveal ${service.delay}`}
						>
							<div
								className={`bg-gradient-to-r ${service.gradient} p-6 text-white rounded-t-lg`}
							>
								<IconComponent className="w-12 h-12 mb-4 animate-pulse" />
								<h3 className="text-xl font-bold">{serviceData.title}</h3>
							</div>
							<div className="p-6">
								<p className="text-muted leading-relaxed">
									{serviceData.description}
								</p>
							</div>
							<div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-glow-blue"></div>
						</div>
					);
				})}
			</div>
			
			<div className="flex justify-center mt-8 scroll-reveal">
				<Link
					href={`/${lang}/services`}
					className="btn btn-primary hover-lift"
					aria-label="Découvrir tous nos services"
				>
					{dictionary.home.ourServices.cta || "Découvrir tous nos services"}
				</Link>
			</div>
		</section>
	);
}

import Link from "next/link";
