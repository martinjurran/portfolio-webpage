import { ContactBadge } from "@/components";

const links = [
  {
    title: "GitHub",
    icon: "Github" as const,
    url: "https://github.com/umutto",
  },
  {
    title: "LinkedIn",
    icon: "Linkedin" as const,
    url: "https://www.linkedin.com/in/umutto/",
  },
  {
    title: "Medium",
    icon: "Newspaper" as const,
    url: "https://www.linkedin.com/in/umutto/",
  },
  {
    title: "Email",
    icon: "MailOpen" as const,
    url: "mailto:hi@umu.to",
  },
];

export default function Socials() {
  return (
    <div className="flex justify-center gap-4 lg:gap-8 flex-wrap py-2">
      {links.map((link, idx) => (
        <ContactBadge key={idx} {...link} className="flex lg:w-1/4" />
      ))}
    </div>
  );
}
