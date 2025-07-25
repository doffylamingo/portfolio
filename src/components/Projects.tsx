import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "NewJeans",
    subtitle: "Website to showcase the KPOP group NewJeans.",
    technologies: ["Typescript", "Next.js", "TailwindCSS", "Prisma"],
    github: "https://github.com/doffylamingo/newjeans",
    link: "https://newjeans-njz.vercel.app/",
  },
  {
    title: "Who's That Pokémon",
    subtitle:
      "Pokémon guessing game recreating the classic TV show experience with scoring and streak tracking.",
    technologies: [
      "Typescript",
      "React.js",
      "TailwindCSS",
      "PokéAPI Integration",
    ],
    github: "https://github.com/doffylamingo/whos-that-pokemon",
    link: "https://whos-that-pokemon-eta.vercel.app/",
  },
  {
    title: "Snippt",
    subtitle: "TikTok-style Spotify Music Discovery Web App.",
    technologies: [
      "Typescript",
      "React.js",
      "TailwindCSS",
      "Hono.js",
      "Prisma",
      "Spotify API",
      "OAuth Authentication",
      "Tanstack Query",
    ],
    github: "https://github.com/doffylamingo/snippt",
  },
  {
    title: "PlaceYeji",
    subtitle:
      "Placeholder image API service with face-aware cropping and filter options.",
    technologies: ["Typescript", "Hono.js", "Vercel", "REST API"],
    github: "https://github.com/doffylamingo/placeyeji",
    link: "https://placeyeji.vercel.app/",
  },
  {
    title: "JJK",
    subtitle:
      "Jujutsu Kaisen-themed website featuring custom animations and smooth user interactions.",
    technologies: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    github: "https://github.com/doffylamingo/jjk",
    link: "https://doffylamingo.github.io/jjk/",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="mb-6 font-semibold text-xl sm:mb-8 sm:text-2xl">
        Projects
      </h2>

      <div className="space-y-8 sm:space-y-10">
        {projects.map((project, index) => (
          <ProjectItem
            // biome-ignore lint/suspicious/noArrayIndexKey: Using index as key for simplicity
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            technologies={project.technologies.join(", ")}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
