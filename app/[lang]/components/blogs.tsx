import Image from "next/image";
import { articles } from "../lib/articles";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function Blogs({ lang }: { lang: Locale }) {
	const dictionary = await getDictionary(lang);

	return (
		<section className="flex flex-col gap-4 px-4 py-14">
			<h2>{dictionary.home.blogs.title}</h2>
			{articles.map((article) => (
				<article key={article.title} className="flex flex-col gap-4">
					<h3 className="text-2xl font-bold">{article.title}</h3>
					<p className="text-gray-600">{article.description}</p>
					<Image
						src={article.image}
						alt={article.title}
						width={150}
						height={150}
					/>
				</article>
			))}
		</section>
	);
}
