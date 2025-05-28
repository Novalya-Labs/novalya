import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export default async function Footer({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<footer className="bg-background py-4 border-t border-neutral-800">
			<div className="container mx-auto px-4">
				<p className="text-xs text-center text-neutral-500">
					&copy; {new Date().getFullYear()} Novalya.{" "}
					{dictionary.footer.copyright}
				</p>
			</div>
		</footer>
	);
}
