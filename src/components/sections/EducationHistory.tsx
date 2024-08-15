import { Timeline } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const timelineEvents = [
  {
    name: "Fernuniversität in Hagen",
    location: "Remote",
    image: "/images/wevnal.webp",
    events: [
      {
        title: "Senior Specialist",
        dateFrom: new Date("2024-05-01"),
        dateTo: "present" as const,
        description: "Wevnal senior specialist work description",
      },
    ],
  },
  {
    name: "Akademie für berufliche Bildung",
    location: "Dresden, Germany",
    events: [
      {
        title: "Software Developer",
        dateFrom: new Date("2007-01-01"),
        dateTo: new Date("2010-01-01"),
        description: "Freelance work description",
      },
    ],
  },
];

export default async function WorkHistory({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "work"]);

  return (
    <div className="mx-1">
      <Timeline
        locale={locale}
        timeline={timelineEvents.map((c) => ({
          ...c,
          name: t(c.name),
          events: c.events.map((e) => ({
            ...e,
            title: t(e.title),
            description: t(e.description),
          })),
        }))}
      />
    </div>
  );
}
