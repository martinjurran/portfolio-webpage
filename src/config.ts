export const themes = { light: "emerald" };

export const locales = ["en"] as const;
export type localeKey = (typeof locales)[number];
export const defaultLocale = "en";
