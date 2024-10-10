export type Route = {
  to: string;
  name: string;
}

export const routes: Route[] = [
  {
    to: "#about",
    name: "about",
  },
  {
    to: "#experiences",
    name: "experiences"
  },
  {
    to: "#projects",
    name: "projects"
  },
  {
    to: "#awards",
    name: "awards"
  },
]
