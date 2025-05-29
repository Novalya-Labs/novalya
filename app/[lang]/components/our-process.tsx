import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Search, Users, Rocket, TrendingUp } from "lucide-react";

export default async function OurProcess({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	const steps = [
		{
			number: 1,
			icon: Search,
			key: "step1" as const,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		{
			number: 2,
			icon: Users,
			key: "step2" as const,
			color: "text-purple-500",
			bgColor: "bg-purple-100",
		},
		{
			number: 3,
			icon: Rocket,
			key: "step3" as const,
			color: "text-cyan-500",
			bgColor: "bg-cyan-100",
		},
		{
			number: 4,
			icon: TrendingUp,
			key: "step4" as const,
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
	];

	return (
		<section className="flex flex-col gap-12 py-14 container mx-auto">
			<div className="text-center">
				<h2 className="text-4xl font-bold mb-6">
					{dictionary.home.ourProcess.title}
				</h2>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto">
					{dictionary.home.ourProcess.description}
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{steps.map((step, index) => {
					const IconComponent = step.icon;
					const stepData = dictionary.home.ourProcess[step.key];
					return (
						<div key={step.key} className="relative">
							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0" />
							)}
							<div className="relative bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 p-6 text-center h-full">
								<div
									className={`${step.bgColor} ${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}
								>
									<IconComponent className="w-8 h-8" />
									<div className="absolute -top-2 -right-2 bg-neutral-100 border-2 border-neutral-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-neutral-900">
										{step.number}
									</div>
								</div>
								<h3 className="text-xl font-bold mb-3 text-neutral-100">
									{stepData.title}
								</h3>
								<p className="text-neutral-400 leading-relaxed">
									{stepData.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
