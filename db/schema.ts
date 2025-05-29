import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const blogs = sqliteTable("blogs", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	slug: text("slug").notNull().unique(),
	title: text("title").notNull(),
	excerpt: text("excerpt").notNull(),
	content: text("content").notNull(),
	featuredImage: text("featured_image"),
	author: text("author").notNull(),
	publishedAt: integer("published_at", { mode: "timestamp" }),
	createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
		() => new Date(),
	),
	updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdateFn(
		() => new Date(),
	),
	isPublished: integer("is_published", { mode: "boolean" }).default(false),
	lang: text("lang").notNull(),
	tags: text("tags"),
	readingTime: integer("reading_time"),
});

export const blogCategories = sqliteTable("blog_categories", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	lang: text("lang").notNull(),
});

export type Blog = typeof blogs.$inferSelect;
export type InsertBlog = typeof blogs.$inferInsert;
