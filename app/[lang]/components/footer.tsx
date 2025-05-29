import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default async function Footer({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo and company info */}
					<div className="col-span-1">
						<Link href="/" className="inline-block mb-4">
							<Image src="/logo.png" alt="Novalya" width={48} height={48} />
						</Link>
						<p className="text-gray-300 text-sm leading-relaxed">
							{dictionary.home.hero.descriptionPart1}{" "}
							{dictionary.home.hero.descriptionPart2}
						</p>
					</div>

					{/* Navigation */}
					<div className="col-span-1">
						<h3 className="text-lg font-bold mb-4">Navigation</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/"
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.navigation.home}
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.footer.navigation.services}
								</Link>
							</li>
							<li>
								<Link
									href="/teams"
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.footer.navigation.about}
								</Link>
							</li>
							<li>
								<Link
									href="/blogs"
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.footer.navigation.blog}
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.navigation.contact}
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div className="col-span-1">
						<h3 className="text-lg font-bold mb-4">Contact</h3>
						<ul className="space-y-3 text-sm">
							<li className="flex items-center gap-2">
								<Phone className="w-4 h-4 text-cyan-400" />
								<a
									href={`tel:${dictionary.footer.contact.phone}`}
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.footer.contact.phoneLabel}
								</a>
							</li>
							<li className="flex items-center gap-2">
								<Mail className="w-4 h-4 text-cyan-400" />
								<a
									href={`mailto:${dictionary.footer.contact.email}`}
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.footer.contact.email}
								</a>
							</li>
							<li className="flex items-center gap-2">
								<MapPin className="w-4 h-4 text-cyan-400" />
								<span className="text-gray-300">
									{dictionary.footer.contact.location}
								</span>
							</li>
						</ul>
					</div>

					{/* Legal Links */}
					<div className="col-span-1">
						<h3 className="text-lg font-bold mb-4">Legal</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/legal"
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.footer.legal.mentions}
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-gray-300 hover:text-white transition-colors duration-200"
								>
									{dictionary.footer.legal.privacy}
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom section */}
				<div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-xs text-gray-400">
						&copy; {new Date().getFullYear()} Novalya.{" "}
						{dictionary.footer.copyright}
					</p>
					<div className="flex gap-4 mt-4 md:mt-0">
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors duration-200"
						>
							<span className="sr-only">LinkedIn</span>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
