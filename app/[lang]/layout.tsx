import { i18n, type Locale } from "@/i18n-config";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
	subsets: ["latin"],
});

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
	children: React.ReactNode;
	params: Promise<{ lang: Locale }>;
}) {
	const params = await props.params;

	const { children } = props;

	return (
		<html lang={params.lang} className={geist.className}>
			<body className="bg-background text-foreground">{children}</body>
		</html>
	);
}
