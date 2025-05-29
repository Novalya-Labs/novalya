import { eq, desc, and } from "drizzle-orm";
import type { D1Database } from "@cloudflare/workers-types";
import { getDB } from "@/lib/db";
import { blogs } from "@/db/schema";
import type { Blog } from "@/db/schema";

export async function getBlogBySlug(
	database: D1Database,
	slug: string,
	lang: string,
): Promise<Blog | null> {
	const db = getDB(database);
	const result = await db
		.select()
		.from(blogs)
		.where(
			and(
				eq(blogs.slug, slug),
				eq(blogs.lang, lang),
				eq(blogs.isPublished, true),
			),
		)
		.limit(1);

	return result[0] || null;
}

export async function getAllBlogs(
	database: D1Database,
	lang: string,
	limit = 10,
): Promise<Blog[]> {
	const db = getDB(database);
	return await db
		.select()
		.from(blogs)
		.where(and(eq(blogs.lang, lang), eq(blogs.isPublished, true)))
		.orderBy(desc(blogs.publishedAt))
		.limit(limit);
}

export async function getFeaturedBlogs(
	database: D1Database,
	lang: string,
	limit = 3,
): Promise<Blog[]> {
	const db = getDB(database);
	return await db
		.select()
		.from(blogs)
		.where(and(eq(blogs.lang, lang), eq(blogs.isPublished, true)))
		.orderBy(desc(blogs.publishedAt))
		.limit(limit);
}

export async function getBlogsByTag(
	database: D1Database,
	lang: string,
	tag: string,
): Promise<Blog[]> {
	const db = getDB(database);
	return await db
		.select()
		.from(blogs)
		.where(and(eq(blogs.lang, lang), eq(blogs.isPublished, true)))
		.orderBy(desc(blogs.publishedAt));
}
