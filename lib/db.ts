import { drizzle } from "drizzle-orm/d1";
import type { D1Database, R2Bucket } from "@cloudflare/workers-types";
import * as schema from "@/db/schema";

export function getDB(database: D1Database) {
	return drizzle(database, { schema });
}

declare global {
	interface CloudflareEnv {
		DB: D1Database;
		BLOG_IMAGES: R2Bucket;
	}
}
