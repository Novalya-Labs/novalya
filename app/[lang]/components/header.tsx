import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export default async function Header({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<header className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center p-2 backdrop-blur-sm bg-white/20 rounded-lg border border-neutral-200/30">
			<div className="flex-1 flex justify-start">
				<Link href="/">
					<Image src="/logo.png" alt="Novalya" width={48} height={48} />
				</Link>
			</div>
			<ul className="flex gap-8 flex-2 justify-center">
				<li>
					<Link
						href="/"
						className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow-sm"
					>
						{dictionary.navigation.home}
					</Link>
				</li>
				<li>
					<Link
						href="/teams"
						className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow-xl"
					>
						{dictionary.navigation.teams}
					</Link>
				</li>
				<li>
					<Link
						href="/services"
						className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow"
					>
						{dictionary.navigation.services}
					</Link>
				</li>
				<li>
					<Link
						href="/blogs"
						className="hover:text-purple-700 transition-colors duration-300 font-bold drop-shadow"
					>
						{dictionary.navigation.blogs}
					</Link>
				</li>
			</ul>
			<div className="flex-1 flex justify-end">
				<Link
					href="/contact"
					className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-700 text-white rounded-md font-bold hover:from-purple-600 hover:to-cyan-800 transition-colors duration-300"
				>
					{dictionary.navigation.contact}
				</Link>
			</div>
		</header>
	);
}
