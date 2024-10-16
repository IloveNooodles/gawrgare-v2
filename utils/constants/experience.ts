export type Experience = {
  name: string;
  title: string;
  year_start: number;
  year_end: number;
  url: string;
  description: string;
  tag: string[];
}

export const experiences: Experience[] = [
  {
    name: "Matchmade",
    title: "Software Engineer",
    year_start: 2023,
    year_end: 2024,
    tag: ["Go", "Next", "TypeScript", "Redis", "Kubernetes", "Firebase", "GCP", "PostgreSQL", "MongoDB"],
    description: "Led the Email Crawler Project of 7 engineers. Significantly reduced costs by saving $1500 per month by optimzing ci/cd and migrating infrastructure to kubernetes while maintaining optimized docker images. Additionally, contributed to the team's knowledge base and streamlined development processes by creating efficient database migrations and data transformation tools.",
    url: "https://www.matchmade.io"
  },
  {
    name: "Makmur",
    title: "Backend Engineer Intern",
    year_start: 2023,
    year_end: 2023,
    tag: ["TypeScript", "JavaScript", "Express"],
    description: "Integrating QRIS Payment method to increase customer use rate. Refactoring service to TypeScript. Leading successful production database migrations without errors and data loss, resolving a critical stuck payment issue, and reducing AWS RDS costs through caching.",
    url: "https://www.makmur.id/id",
  },
  {
    name: "Garena",
    year_start: 2022,
    title: "Backend Engineer Intern",
    year_end: 2022,
    tag: ["Python", "Django", "Redis", "Celery"],
    description: "Collaborated with a team to create events for Garena games using Django, Redis, and Celery. Worked on high-traffic projects like Call of Duty Mobile (CODM) Mystery Shop and Arena of Valor (AOV) Ecommerce, optimizing database relations, implement workers and caching to handle significant user loads and maximize query per second.",
    url: "https://garena.co.id/"
  },
  {
    name: "Sayurbox",
    title: "Software Development Engineer Intern",
    year_start: 2021,
    year_end: 2022,
    tag: ["TypeScript", "SpringBoot", "Java", "Apollo GraphQL", "React Native"],
    description: "Collaborated with a discovery team to maintain Location and Voucher APIs using Spring Boot and MySQL. Responsible for the Application Revamp 2.0 Project, focusing on Category, Promo, Voucher, Account, Loyalty, and Sayurfluencer in Frontend using React Native, TypeScript, JavaScript, GraphQL Node Js, and CSS. Monitored services for errors using Kubana, Grafana, and Datadog, and deployed the app using Jenkins and Docker.",
    url: "https://www.sayurbox.com/"
  },
]
