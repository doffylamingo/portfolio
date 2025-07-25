import LinkItem from "./LinkItem";

interface ProjectItemProps {
  title: string;
  subtitle: string;
  technologies: string;
  github: string;
  link?: string;
}

export default function ProjectItem({
  title,
  subtitle,
  technologies,
  github,
  link,
}: ProjectItemProps) {
  return (
    <div>
      <div className="space-y-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
          <div className="flex gap-3">
            <LinkItem
              name="GitHub"
              href={github}
            />
            {link && (
              <LinkItem
                name="Live Preview"
                href={link}
              />
            )}
          </div>
        </div>
        <p className="text-neutral-600 text-sm sm:text-base dark:text-neutral-300">
          {subtitle}
        </p>
        <p className="font-medium text-neutral-600 text-xs sm:text-sm dark:text-neutral-400">
          {technologies}
        </p>
      </div>
    </div>
  );
}
