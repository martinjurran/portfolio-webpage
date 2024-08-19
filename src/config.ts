export const themes = { light: "emerald", dark: "night" };

export const locales = ["en", "de"] as const;
export type localeKey = (typeof locales)[number];
export const defaultLocale = "en";
