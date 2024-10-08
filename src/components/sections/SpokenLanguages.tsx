import { twMerge } from "tailwind-merge";
import { LanguageDial } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const languages = [
  {
    value: 100,
    text: "German",
    className: "text-secondary",
  },
  {
    value: 90,
    text: "English",
    className: "text-secondary/90",
  },
];

export default async function Languages({
  locale,
  className,
}: {
  locale: localeKey;
  className?: string;
}) {
  const t = await getTranslator(locale, ["home", "languages"]);

  return (
    <div className={twMerge("grid grid-cols-3 justify-center gap-1 py-2", className)}>
      {languages.map((lang, idx) => (
        <LanguageDial key={idx} {...lang} text={t(lang.text)} />
      ))}
    </div>
  );
}
