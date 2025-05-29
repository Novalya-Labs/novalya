"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
	lang,
	navigation,
}: {
	lang: string;
	navigation: {
		home: string;
		teams: string;
		services: string;
		blogs: string;
		contact: string;
	};
}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="lg:hidden">
			<button
				type="button"
				onClick={toggleMenu}
				className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-blue rounded-md"
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
				aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
			>
				{isOpen ? (
					<X className="w-6 h-6 animate-fade-in" />
				) : (
					<Menu className="w-6 h-6 animate-fade-in" />
				)}
			</button>

			{isOpen && (
				<div
					id="mobile-menu"
					className="fixed inset-0 z-40 bg-glass backdrop-blur-lg flex flex-col items-center justify-center animate-scale-in"
				>
					<div className="absolute top-4 right-4">
						<button
							type="button"
							onClick={toggleMenu}
							className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-blue rounded-md"
							aria-label="Fermer le menu"
						>
							<X className="w-6 h-6" />
						</button>
					</div>

					<nav className="flex flex-col items-center justify-center space-y-8">
						<Link
							href={`/${lang}`}
							className="text-2xl font-bold hover:text-highlight-purple transition-colors duration-300 relative group"
							onClick={toggleMenu}
						>
							{navigation.home}
							<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full" />
						</Link>
						<Link
							href={`/${lang}/teams`}
							className="text-2xl font-bold hover:text-highlight-purple transition-colors duration-300 relative group"
							onClick={toggleMenu}
						>
							{navigation.teams}
							<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full" />
						</Link>
						<Link
							href={`/${lang}/services`}
							className="text-2xl font-bold hover:text-highlight-purple transition-colors duration-300 relative group"
							onClick={toggleMenu}
						>
							{navigation.services}
							<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full" />
						</Link>
						<Link
							href={`/${lang}/blogs`}
							className="text-2xl font-bold hover:text-highlight-purple transition-colors duration-300 relative group"
							onClick={toggleMenu}
						>
							{navigation.blogs}
							<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-blue-purple transition-all duration-300 group-hover:w-full" />
						</Link>
						<Link
							href={`/${lang}/contact`}
							className="btn btn-primary hover-lift mt-4"
							onClick={toggleMenu}
						>
							{navigation.contact}
						</Link>
					</nav>

					{/* Éléments décoratifs */}
					<div className="floating-elements-container pointer-events-none">
						<div
							className="geometric-shape shape-circle bg-gradient-blue-purple animate-pulse w-64 h-64"
							style={{
								top: "10%",
								left: "-10%",
								opacity: "0.1",
								filter: "blur(60px)",
							}}
						/>
						<div
							className="geometric-shape shape-circle bg-gradient-cyan-blue animate-pulse delay-500 w-80 h-80"
							style={{
								bottom: "10%",
								right: "-5%",
								opacity: "0.1",
								filter: "blur(70px)",
							}}
						/>
						<div
							className="particle particle-blue animate-float w-3 h-3"
							style={{ top: "30%", right: "20%" }}
						/>
						<div
							className="particle particle-purple animate-float delay-400 w-4 h-4"
							style={{ bottom: "25%", left: "15%" }}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
