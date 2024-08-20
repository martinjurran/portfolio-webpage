import { Divider, SectionHeader } from "@/components";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import {
  AboutSkills,
  Awards,
  EducationHistory,
  Hero,
  Projects,
  Socials,
  WorkHistory,
} from "@/components/sections";
import { defaultLocale, localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const navigationRoutes = [
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default async function Home({ params }: { params?: { locale: localeKey } }) {
  const locale = params?.locale || defaultLocale;
  const t = await getTranslator(locale, ["home"]);

  return (
    <>
      <NavBar
        locale={locale}
        routes={navigationRoutes.map((r) => ({ ...r, name: t("navigation")[r.name] }))}
      />
      Blog!!
    </>
  );
}
