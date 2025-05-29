import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { getFeaturedBlogs } from "@/lib/services/blog.service";

interface MockBlog {
	slug: string;
	title: string;
	excerpt: string;
	featuredImage: string | null;
	author: string;
	readingTime: number | null;
	publishedAt: Date | null;
}

export default async function Blogs({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	// Get database from Cloudflare environment (this will be available in production)
	const featuredBlogs =
		process.env.NODE_ENV === "development"
			? [] // For now, return empty array in development
			: await getFeaturedBlogs(
					(globalThis as unknown as { cloudflare?: { env?: { DB: unknown } } })
						.cloudflare?.env?.DB as never,
					lang,
					3,
				);

	// Mock data for development
	const mockBlogs: MockBlog[] = [
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
	];

	const blogsToDisplay = featuredBlogs.length > 0 ? featuredBlogs : mockBlogs;

	return (
		<section className="flex flex-col gap-8 py-14 container mx-auto px-4 md:px-0">
			<div className="text-center">
				<h2 className="text-4xl font-bold mb-6">
					{dictionary.home.blogs.title}
				</h2>
				<p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-8">
					{dictionary.home.blogs.description}
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{blogsToDisplay.map((blog: MockBlog) => (
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
							</div>
							<h3 className="text-xl font-bold mb-3 text-neutral-100 line-clamp-2">
								{blog.title}
							</h3>
							<p className="text-neutral-400 mb-4 line-clamp-3">
								{blog.excerpt}
							</p>
							<Link
								href={`/${lang}/blogs/${blog.slug}`}
								className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
							>
								{dictionary.home.blogs.readMore}
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

			<div className="text-center mt-8">
				<Link
					href={`/${lang}/blogs`}
					className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-700 text-white px-6 py-3 rounded-md font-bold hover:from-purple-600 hover:to-cyan-800 transition-colors duration-300"
				>
					{dictionary.home.blogs.viewAll}
				</Link>
			</div>
		</section>
	);
}
