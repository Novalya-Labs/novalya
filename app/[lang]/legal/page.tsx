import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import Header from "../components/header";
import Footer from "../components/footer";

export default async function LegalPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const params = await props.params;
	const dictionary = await getDictionary(params.lang);

	return (
		<>
			<Header lang={params.lang} />
			<main className="min-h-screen bg-background py-16">
				<div className="container mx-auto py-16">
					<div className="max-w-4xl mx-auto">
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
					</div>
				</div>
			</main>
			<Footer lang={params.lang} />
		</>
	);
}
