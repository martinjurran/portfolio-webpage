import { twMerge } from "tailwind-merge";
import { SkillBadge } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const skills = [
  {
    title: "Python",
    icon: "Code" as const,
  },
  {
    title: "SQL",
    icon: "Database" as const,
  },
  {
    title: "Javascript",
    icon: "Code" as const,
  },
  {
    title: "Typescript",
    icon: "Code" as const,
  },
  {
    title: "Node.js",
    icon: "Server" as const,
  },
  {
    title: "Vue.js",
    icon: "AppWindow" as const,
  },
  {
    title: "Machine Learning",
    icon: "BrainCircuit" as const,
  },
  {
    title: "Data Visualization",
    icon: "AreaChart" as const,
  },
  {
    title: "Git",
    icon: "GitBranchPlus" as const,
  },
];

export default async function SkillBadges({
  locale,
  className,
}: {
  locale: localeKey;
  className?: string;
}) {
  const t = await getTranslator(locale, ["home", "skills"]);

  return (
    <div className={twMerge("flex justify-center gap-1 flex-wrap py-2", className)}>
      {skills.map((skill, idx) => (
        <SkillBadge key={idx} title={t(skill.title)} icon={skill.icon} />
      ))}
    </div>
  );
}
