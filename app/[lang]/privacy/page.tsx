import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import Header from "../components/header";
import Footer from "../components/footer";
import { generateSEOMetadata } from "@/lib/utils/seo";
import type { Metadata } from "next";

export async function generateMetadata(props: {
	params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	return generateSEOMetadata(
		{
			title: dictionary.privacy.title,
			description: dictionary.privacy.introduction.content,
			canonical: `/${lang}/privacy`,
			keywords: [
				dictionary.seo.keywords.privacyPolicy,
				dictionary.seo.keywords.dataProtection,
				"RGPD",
				"GDPR",
				dictionary.seo.keywords.privacy,
			],
		},
		dictionary,
		lang,
	);
}

export default async function PrivacyPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const params = await props.params;
	const dictionary = await getDictionary(params.lang);

	return (
		<>
			<Header lang={params.lang} />
			<main className="min-h-screen pb-12 pt-32 md:container md:mx-auto px-4 md:px-0">
				<h1 className="text-4xl font-bold text-center mb-8">
					{dictionary.privacy.title}
				</h1>

				<div className="prose prose-lg max-w-none">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.privacy.introduction.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.privacy.introduction.content}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.privacy.dataCollection.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{dictionary.privacy.dataCollection.content}
						</p>
						<ul className="list-disc pl-6 text-muted-foreground">
							{dictionary.privacy.dataCollection.items.map((item: string) => (
								<li key={item} className="mb-2">
									{item}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.privacy.dataUsage.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{dictionary.privacy.dataUsage.content}
						</p>
						<ul className="list-disc pl-6 text-muted-foreground">
							{dictionary.privacy.dataUsage.items.map((item: string) => (
								<li key={item} className="mb-2">
									{item}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.privacy.cookies.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.privacy.cookies.content}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.privacy.rights.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{dictionary.privacy.rights.content}
						</p>
						<ul className="list-disc pl-6 text-muted-foreground">
							{dictionary.privacy.rights.items.map((item: string) => (
								<li key={item} className="mb-2">
									{item}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.privacy.contact.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.privacy.contact.content}
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.privacy.updates.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.privacy.updates.content}
						</p>
					</section>
				</div>
			</main>
			<Footer lang={params.lang} />
		</>
	);
}
