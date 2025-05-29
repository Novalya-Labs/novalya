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
		},
		{
			icon: Cog,
			key: "automation" as const,
			gradient: "from-purple-500 to-pink-500",
		},
		{
			icon: Brain,
			key: "ai" as const,
			gradient: "from-cyan-500 to-blue-500",
		},
		{
			icon: Code,
			key: "development" as const,
			gradient: "from-green-500 to-teal-500",
		},
		{
			icon: Users,
			key: "support" as const,
			gradient: "from-orange-500 to-red-500",
		},
	];

	return (
		<section className="flex flex-col gap-12 py-14 container mx-auto">
			<div className="text-center">
				<h2 className="text-4xl font-bold mb-6">
					{dictionary.home.ourServices.title}
				</h2>
				<p className="text-lg text-neutral-400 max-w-3xl mx-auto">
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
							className="bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
						>
							<div
								className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}
							>
								<IconComponent className="w-12 h-12 mb-4" />
								<h3 className="text-xl font-bold">{serviceData.title}</h3>
							</div>
							<div className="p-6">
								<p className="text-neutral-400 leading-relaxed">
									{serviceData.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
