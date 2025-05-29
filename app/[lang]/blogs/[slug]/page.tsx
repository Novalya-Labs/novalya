import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import Image from "next/image";
import { getBlogBySlug } from "@/lib/services/blog.service";
import { notFound } from "next/navigation";

export default async function BlogPage(props: {
	params: Promise<{ lang: Locale; slug: string }>;
}) {
	const { lang, slug } = await props.params;
	const dictionary = await getDictionary(lang);

	// Get blog from database (in production) or use mock data (in development)
	const blog =
		process.env.NODE_ENV === "development"
			? getMockBlog(slug, lang)
			: await getBlogBySlug(
					(globalThis as unknown as { cloudflare?: { env?: { DB: unknown } } })
						.cloudflare?.env?.DB as never,
					slug,
					lang,
				);

	if (!blog) {
		notFound();
	}

	return (
		<>
			<Head>
				<title>{blog.title} | Novalya</title>
				<meta name="description" content={blog.excerpt} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={blog.title} />
				<meta name="twitter:description" content={blog.excerpt} />
				<meta
					name="twitter:image"
					content={blog.featuredImage || "https://novalya.dev/og-image.jpg"}
				/>
				<meta property="og:title" content={blog.title} />
				<meta property="og:description" content={blog.excerpt} />
				<meta
					property="og:image"
					content={blog.featuredImage || "https://novalya.dev/og-image.jpg"}
				/>
			</Head>
			<Header lang={lang} />
			<main className="container mx-auto py-8">
				<article className="max-w-4xl mx-auto">
					{blog.featuredImage && (
						<div className="aspect-video relative overflow-hidden rounded-lg mb-8">
							<Image
								src={blog.featuredImage}
								alt={blog.title}
								fill
								className="object-cover"
								priority
							/>
						</div>
					)}

					<header className="mb-8">
						<h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
							{blog.title}
						</h1>

						<div className="flex items-center gap-6 text-gray-600 mb-6">
							<span className="font-medium">{blog.author}</span>
							<span>•</span>
							<span>
								{blog.readingTime}{" "}
								{lang === "fr" ? "min de lecture" : "min read"}
							</span>
							<span>•</span>
							<span>
								{blog.publishedAt
									? new Date(blog.publishedAt).toLocaleDateString(
											lang === "fr" ? "fr-FR" : "en-US",
											{
												year: "numeric",
												month: "long",
												day: "numeric",
											},
										)
									: ""}
							</span>
						</div>

						<p className="text-xl text-gray-700 leading-relaxed">
							{blog.excerpt}
						</p>
					</header>

					<div className="prose prose-lg max-w-none">
						{/* <div
							dangerouslySetInnerHTML={{
								__html: formatMarkdownToHTML(blog.content),
							}}
						/> */}
					</div>
				</article>
			</main>
			<Footer lang={lang} />
		</>
	);
}

function getMockBlog(slug: string, lang: string) {
	const mockBlogs = {
		"novalya-agence-transformation-digitale": {
			slug: "novalya-agence-transformation-digitale",
			title: "Novalya : Votre Partenaire pour la Transformation Digitale",
			excerpt:
				"Découvrez comment Novalya accompagne les entreprises dans leur transformation digitale avec des solutions sur mesure et innovantes.",
			content: `# Novalya : Votre Partenaire pour la Transformation Digitale

## Une Expertise au Service de Votre Innovation

Chez **Novalya**, nous croyons que chaque entreprise mérite une solution digitale qui lui ressemble. Notre mission ? Transformer vos idées en réalités numériques performantes et durables.

### Notre Approche Unique

Notre équipe d'experts combine **créativité** et **excellence technique** pour livrer des projets qui dépassent vos attentes :

- **Analyse approfondie** de vos besoins métier
- **Conception sur mesure** adaptée à votre secteur
- **Développement agile** avec les dernières technologies
- **Accompagnement continu** post-lancement

### Technologies de Pointe

Nous maîtrisons les technologies les plus avancées :
- **Next.js** et **React** pour des interfaces modernes
- **Node.js** et **Python** pour des backends robustes
- **Cloud Computing** (AWS, Azure, Cloudflare)
- **Intelligence Artificielle** et **Machine Learning**

### Votre Succès, Notre Priorité

Chaque projet est une opportunité de créer quelque chose d'exceptionnel. Faites confiance à Novalya pour propulser votre entreprise vers l'avenir.`,
			featuredImage: "/images/blog/novalya-transformation.jpg",
			author: "Équipe Novalya",
			readingTime: 5,
			publishedAt: new Date("2024-12-15"),
		},
		"novalya-digital-transformation-agency": {
			slug: "novalya-digital-transformation-agency",
			title: "Novalya: Your Partner for Digital Transformation",
			excerpt:
				"Discover how Novalya helps companies in their digital transformation with custom and innovative solutions.",
			content: `# Novalya: Your Partner for Digital Transformation

## Expertise at the Service of Your Innovation

At **Novalya**, we believe every company deserves a digital solution that reflects their identity. Our mission? Transform your ideas into high-performing and sustainable digital realities.

### Our Unique Approach

Our expert team combines **creativity** and **technical excellence** to deliver projects that exceed your expectations:

- **In-depth analysis** of your business needs
- **Custom design** adapted to your industry
- **Agile development** with cutting-edge technologies
- **Continuous support** post-launch

### Cutting-Edge Technologies

We master the most advanced technologies:
- **Next.js** and **React** for modern interfaces
- **Node.js** and **Python** for robust backends
- **Cloud Computing** (AWS, Azure, Cloudflare)
- **Artificial Intelligence** and **Machine Learning**

### Your Success, Our Priority

Every project is an opportunity to create something exceptional. Trust Novalya to propel your business into the future.`,
			featuredImage: "/images/blog/novalya-transformation.jpg",
			author: "Novalya Team",
			readingTime: 5,
			publishedAt: new Date("2024-12-15"),
		},
	};

	return mockBlogs[slug as keyof typeof mockBlogs] || null;
}

function formatMarkdownToHTML(markdown: string): string {
	return markdown
		.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6 mt-8">$1</h1>')
		.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-4 mt-6">$1</h2>')
		.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-3 mt-5">$1</h3>')
		.replace(/^\*\*(.*)\*\*/gim, '<strong class="font-bold">$1</strong>')
		.replace(/^\* (.*$)/gim, '<li class="mb-2">$1</li>')
		.replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
		.replace(/\n\n/g, '</p><p class="mb-4">')
		.replace(/^(?!<[h|l|s])/gm, '<p class="mb-4">')
		.replace(/<\/p><p class="mb-4">(<[h|l])/g, "$1")
		.replace(
			/(<li class="mb-2">.*<\/li>)/g,
			'<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>',
		)
		.replace(/<\/li><li class="mb-2">/g, '</li><li class="mb-2">');
}
