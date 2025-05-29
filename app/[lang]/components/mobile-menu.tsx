"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/i18n-config";

interface NavigationDictionary {
	home: string;
	teams: string;
	services: string;
	blogs: string;
	contact: string;
}

interface MobileMenuProps {
	lang: Locale;
	navigation: NavigationDictionary;
}

export default function MobileMenu({ lang, navigation }: MobileMenuProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			{/* Mobile Menu Button */}
			<button
				type="button"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="md:hidden flex flex-col gap-1 p-2"
				aria-label="Toggle menu"
			>
				<span
					className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
				/>
				<span
					className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
				/>
				<span
					className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
				/>
			</button>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div className="fixed inset-0 z-40 bg-neutral-900/95 backdrop-blur-sm md:hidden">
					<div className="flex flex-col items-center justify-center h-full gap-8">
						<Link
							href={`/${lang}`}
							className="text-2xl font-bold hover:text-purple-700 transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							{navigation.home}
						</Link>
						<Link
							href={`/${lang}/teams`}
							className="text-2xl font-bold hover:text-purple-700 transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							{navigation.teams}
						</Link>
						<Link
							href={`/${lang}/services`}
							className="text-2xl font-bold hover:text-purple-700 transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							{navigation.services}
						</Link>
						<Link
							href={`/${lang}/blogs`}
							className="text-2xl font-bold hover:text-purple-700 transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							{navigation.blogs}
						</Link>
						<Link
							href={`/${lang}/contact`}
							className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-700 text-white rounded-md font-bold hover:from-purple-600 hover:to-cyan-800 transition-colors duration-300 text-xl mt-4"
							onClick={() => setIsMenuOpen(false)}
						>
							{navigation.contact}
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
