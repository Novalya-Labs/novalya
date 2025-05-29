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
			title: dictionary.legal.title,
			description: dictionary.legal.publisher.content,
			canonical: `/${lang}/legal`,
			keywords: [
				dictionary.seo.keywords.legalNotice,
				dictionary.seo.keywords.termsOfService,
				dictionary.seo.keywords.intellectualProperty,
				dictionary.seo.keywords.liability,
			],
		},
		dictionary,
		lang,
	);
}

export default async function LegalPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const params = await props.params;
	const dictionary = await getDictionary(params.lang);

	return (
		<>
			<Header lang={params.lang} />
			<main className="min-h-screen pb-12 pt-32 md:container md:mx-auto px-4 md:px-0">
				<h1 className="text-4xl font-bold text-center mb-8">
					{dictionary.legal.title}
				</h1>

				<div className="prose prose-lg max-w-none">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.legal.publisher.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.legal.publisher.content}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.legal.hosting.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.legal.hosting.content}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.legal.intellectualProperty.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.legal.intellectualProperty.content}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.legal.responsibility.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.legal.responsibility.content}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.legal.applicableLaw.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.legal.applicableLaw.content}
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							{dictionary.legal.contact.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{dictionary.legal.contact.content}
						</p>
					</section>
				</div>
			</main>
			<Footer lang={params.lang} />
		</>
	);
}
