import { Person, ProfilePage, WithContext } from "schema-dts";

export const jsonLdProfilePage: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Martin Jurran",
  image: "https://umu.to/images/icon2.png",
  mainEntity: {
    "@id": "#main-author",
    "@type": "Person",
    name: "UMartin Jurran",
    familyName: "Karakulak",
    givenName: "Umut",
    nationality: "Turkish",
    image: "https://umu.to/images/umut.webp",
    jobTitle: "Senior Specialist",
    worksFor: "株式会社wevnal",
    workLocation: "Tokyo, Japan",
    url: "https://umu.to",
    email: "hi@umu.to",
    knowsLanguage: ["Turkish", "English", "Japanese"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hi@umu.to",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/umutto/",
      "https://github.com/umutto",
      "https://stackoverflow.com/users/826970/umutto",
    ],
    description:
      "Someone who is passionate about experimenting with innovative, state of the art technologies. Currently working as a full-stack developer with a touch of machine learning for good measure.",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Yeditepe University",
      },
    ],
    award: [
      "Tokyo Public Transportation Open Data Challenge INIAD special innovation award",
      "Microsoft Imagine Cup 2009 World Finalist",
    ],
  },
};

export const jsonLdPerson: WithContext<Person> = {
  "@id": "#main-author",
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Martin Jurran",
  familyName: "Jurran",
  givenName: "Martin",
  nationality: "German",
  image: "https://umu.to/images/umut.webp",
  jobTitle: "Senior Specialist",
  worksFor: "株式会社wevnal",
  workLocation: "Tokyo, Japan",
  url: "https://umu.to",
  email: "hi@umu.to",
  knowsLanguage: ["German", "English", "Japanese"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hi@umu.to",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/umutto/",
    "https://github.com/umutto",
    "https://stackoverflow.com/users/826970/umutto",
  ],
  description:
    "Someone who is passionate about experimenting with innovative, state of the art technologies. Currently working as a full-stack developer with a touch of machine learning for good measure.",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Yeditepe University",
    },
  ],
  award: [
    "Tokyo Public Transportation Open Data Challenge INIAD special innovation award",
    "Microsoft Imagine Cup 2009 World Finalist",
  ],
};
