import { Timeline } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const timelineEvents = [
  {
    name: "Linde Engineering",
    location: "Dresden, Germany",
    image: "/images/linde.jfif",
    events: [
      {
        title: "Full Stack Engineer",
        dateFrom: new Date("2020-01-01"),
        dateTo: new Date("2024-04-30"),
        description: "Dunksoft full stack work description",
      },
      {
        title: "Data Scientist",
        dateFrom: new Date("2019-06-01"),
        dateTo: new Date("2020-01-01"),
        description: "Dunksoft data science work description",
      },
    ],
  },
  {
    name: "Alaymont",
    location: "Bray, Ireland",
    image: "/images/alaymont.webp",
    events: [
      {
        title: "Software Engineering Intern",
        dateFrom: new Date("2018-05-01"),
        dateTo: new Date("2018-06-01"),
        description: "Alaymont intern description",
      },
    ],
  },
  {
    name: "Linde Engineering",
    location: "Dresden, Germany",
    image: "/images/linde.jfif",
    events: [
      {
        title: "Apprentice System Integration",
        dateFrom: new Date("2016-08-01"),
        dateTo: new Date("2019-06-01"),
        description: "Apprentice work description",
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
