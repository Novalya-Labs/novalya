import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import MobileMenu from "./mobile-menu";

export default async function Header({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);
	
	return (
		<header className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center p-3 md:p-4 lg:p-5 backdrop-blur-sm bg-neutral-900/20 rounded-lg border border-neutral-200/30 md:container md:mx-auto animate-fade-in">
			{/* Logo */}
			<div className="flex justify-start">
				<Link href={`/${lang}`} aria-label="Novalya - Page d'accueil">
					<div className="relative hover-scale">
						<Image
							src="/logo.png"
							alt="Novalya"
							width={48}
							height={48}
							className="md:w-12 md:h-12"
						/>
						<div className="absolute inset-0 rounded-full shadow-glow-blue opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
					</div>
				</Link>
			</div>
			
			{/* Desktop Navigation */}
			<nav className="hidden lg:flex">
				<ul className="flex gap-6 xl:gap-8">
					<li>
						<Link
							href={`/${lang}`}
							className="hover:text-highlight-purple transition-colors duration-300 font-bold text-sm xl:text-base relative group"
							aria-current={lang === 'fr' ? 'page' : undefined}
						>
							{dictionary.navigation.home}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
					<li>
						<Link
							href={`/${lang}/teams`}
							className="hover:text-highlight-purple transition-colors duration-300 font-bold text-sm xl:text-base relative group"
						>
							{dictionary.navigation.teams}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
					<li>
						<Link
							href={`/${lang}/services`}
							className="hover:text-highlight-purple transition-colors duration-300 font-bold text-sm xl:text-base relative group"
						>
							{dictionary.navigation.services}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
					<li>
						<Link
							href={`/${lang}/blogs`}
							className="hover:text-highlight-purple transition-colors duration-300 font-bold text-sm xl:text-base relative group"
						>
							{dictionary.navigation.blogs}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</li>
				</ul>
			</nav>
			
			{/* Desktop CTA */}
			<div className="hidden md:flex justify-end">
				<Link
					href={`/${lang}/contact`}
					className="btn btn-primary hover-lift"
					aria-label={dictionary.navigation.contact}
				>
					{dictionary.navigation.contact}
				</Link>
			</div>
			
			{/* Mobile Menu Component */}
			<MobileMenu lang={lang} navigation={dictionary.navigation} />
		</header>
	);
}
