import "server-only";

const dictionaries = {
	en: () => import("./dictionaries/en.json").then((module) => module.default),
	fr: () => import("./dictionaries/fr.json").then((module) => module.default),
} as const;

export const getDictionary = async (locale: keyof typeof dictionaries) => {
	if (locale in dictionaries) {
		return dictionaries[locale]();
	}

	return dictionaries.en();
};
