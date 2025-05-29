import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import MobileMenu from "./mobile-menu";

export default async function Header({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<header className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center p-2 md:p-4 backdrop-blur-sm bg-neutral-900/20 rounded-lg border border-neutral-200/30 md:container md:mx-auto">
			{/* Logo */}
			<div className="flex justify-start">
				<Link href={`/${lang}`}>
					<Image
						src="/logo.png"
						alt="Novalya"
						width={40}
						height={40}
						className="md:w-12 md:h-12"
					/>
				</Link>
			</div>

			{/* Desktop Navigation */}
			<nav className="hidden lg:flex">
				<ul className="flex gap-6 xl:gap-8">
					<li>
						<Link
							href={`/${lang}`}
							className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow-sm text-sm xl:text-base"
						>
							{dictionary.navigation.home}
						</Link>
					</li>
					<li>
						<Link
							href={`/${lang}/teams`}
							className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow-xl text-sm xl:text-base"
						>
							{dictionary.navigation.teams}
						</Link>
					</li>
					<li>
						<Link
							href={`/${lang}/services`}
							className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow text-sm xl:text-base"
						>
							{dictionary.navigation.services}
						</Link>
					</li>
					<li>
						<Link
							href={`/${lang}/blogs`}
							className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow text-sm xl:text-base"
						>
							{dictionary.navigation.blogs}
						</Link>
					</li>
				</ul>
			</nav>

			{/* Desktop CTA */}
			<div className="hidden md:flex justify-end">
				<Link
					href={`/${lang}/contact`}
					className="px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 bg-gradient-to-r from-cyan-500 to-purple-700 text-white rounded-md font-bold hover:from-purple-600 hover:to-cyan-800 transition-colors duration-300 text-sm lg:text-base"
				>
					{dictionary.navigation.contact}
				</Link>
			</div>

			{/* Mobile Menu Component */}
			<MobileMenu lang={lang} navigation={dictionary.navigation} />
		</header>
	);
}
