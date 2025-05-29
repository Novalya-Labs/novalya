import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "@/lib/services/blog.service";
import { generateSEOMetadata } from "@/lib/utils/seo";
import type { Metadata } from "next";

export async function generateMetadata(props: {
	params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	return generateSEOMetadata(
		{
			title: dictionary.blogs.metatags.title,
			description: dictionary.blogs.metatags.description,
			canonical: `/${lang}/blogs`,
			keywords: [
				"blog",
				dictionary.seo.keywords.digitalTransformation,
				dictionary.seo.keywords.artificialIntelligence,
				"tech",
				"innovation",
			],
		},
		dictionary,
		lang,
	);
}

export default async function BlogsPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await props.params;
	const dictionary = await getDictionary(lang);

	// Get all blogs from database (in production) or use mock data (in development)
	const allBlogs =
		process.env.NODE_ENV === "development"
			? [
					{
						slug: "novalya-agence-transformation-digitale",
						title:
							lang === "fr"
								? "Novalya : Votre Partenaire pour la Transformation Digitale"
								: "Novalya: Your Partner for Digital Transformation",
						excerpt:
							lang === "fr"
								? "Découvrez comment Novalya accompagne les entreprises dans leur transformation digitale avec des solutions sur mesure et innovantes."
								: "Discover how Novalya helps companies in their digital transformation with custom and innovative solutions.",
						featuredImage: "/images/blog/novalya-transformation.jpg",
						author: lang === "fr" ? "Équipe Novalya" : "Novalya Team",
						readingTime: 5,
						publishedAt: new Date("2024-12-15"),
					},
					{
						slug:
							lang === "fr"
								? "pourquoi-choisir-nextjs-2025"
								: "why-choose-nextjs-2025",
						title:
							lang === "fr"
								? "Pourquoi Choisir Next.js en 2025 ?"
								: "Why Choose Next.js in 2025?",
						excerpt:
							lang === "fr"
								? "Next.js révolutionne le développement web moderne. Découvrez pourquoi cette technologie est devenue incontournable."
								: "Next.js is revolutionizing modern web development. Discover why this technology has become essential.",
						featuredImage: "/images/blog/nextjs-2025.jpg",
						author: "Thomas Dubois",
						readingTime: 7,
						publishedAt: new Date("2024-12-10"),
					},
					{
						slug:
							lang === "fr"
								? "ia-transformation-entreprise-2025"
								: "ai-business-transformation-2025",
						title:
							lang === "fr"
								? "L'IA au Service de Votre Entreprise en 2025"
								: "AI at the Service of Your Business in 2025",
						excerpt:
							lang === "fr"
								? "Comment l'intelligence artificielle peut transformer votre business ? Découvrez les solutions concrètes proposées par Novalya."
								: "How can artificial intelligence transform your business? Discover concrete solutions offered by Novalya.",
						featuredImage: "/images/blog/ai-business-2025.jpg",
						author: "Sophie Martin",
						readingTime: 8,
						publishedAt: new Date("2024-12-05"),
					},
				]
			: await getAllBlogs(
					(globalThis as unknown as { cloudflare?: { env?: { DB: unknown } } })
						.cloudflare?.env?.DB as never,
					lang,
					20,
				);

	return (
		<>
			<Header lang={lang} />
			<main className="flex flex-col gap-16 container mx-auto pb-16 pt-32">
				<div className="text-center">
					<h1 className="text-5xl font-bold mb-6">{dictionary.blogs.title}</h1>
					<p className="text-xl text-neutral-400 max-w-3xl mx-auto">
						{lang === "fr"
							? "Découvrez nos derniers articles sur la transformation digitale, les technologies modernes et l'innovation."
							: "Discover our latest articles on digital transformation, modern technologies and innovation."}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{allBlogs.map((blog) => (
						<article
							key={blog.slug}
							className="bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image
									src={blog.featuredImage || "/images/blog/default.jpg"}
									alt={blog.title}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-4 text-sm text-neutral-400 mb-3">
									<span>{blog.author}</span>
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
												)
											: ""}
									</span>
								</div>
								<h2 className="text-xl font-bold mb-3 text-neutral-100 line-clamp-2">
									{blog.title}
								</h2>
								<p className="text-neutral-400 mb-4 line-clamp-3">
									{blog.excerpt}
								</p>
								<Link
									href={`/${lang}/blogs/${blog.slug}`}
									className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
								>
									{dictionary.home?.blogs?.readMore ||
										(lang === "fr" ? "Lire la suite" : "Read more")}
									<svg
										className="w-4 h-4 ml-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</Link>
							</div>
						</article>
					))}
				</div>

				{allBlogs.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">
							{lang === "fr"
								? "Aucun article disponible pour le moment."
								: "No articles available at the moment."}
						</p>
					</div>
				)}
			</main>
			<Footer lang={lang} />
		</>
	);
}
