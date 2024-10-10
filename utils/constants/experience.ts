export type Experience = {
  name: string;
  year_start: number;
  year_end: number;
  url: string;
  description: string;
  tag: string[];
}

export const experiences: Experience[] = [
  {
    name: "Sayurbox",
    year_start: 2021,
    year_end: 2022,
    tag: ["A", "B", "C"],
    description: "",
    url: "https://www.sayurbox.com/"
  },
  {
    name: "Matchmade",
    year_start: 2023,
    year_end: 2024,
    tag: ["A", "B", "C"],
    description: "Working stuf blala",
    url: "https://www.matchmade.io"
  },
  {
    name: "Garena",
    year_start: 2022,
    year_end: 2022,
    tag: ["A", "B", "C"],
    description: "",
    url: "https://garena.co.id/"
  },
  {
    name: "Makmur",
    year_start: 2023,
    year_end: 2023,
    tag: ["A", "B", "C"],
    description: "",
    url: "https://www.makmur.id/id",
  }
]
