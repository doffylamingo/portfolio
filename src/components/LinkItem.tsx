import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LinkItemProps {
  name: string;
  href: string;
}

export default function LinkItem({ name, href }: LinkItemProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      className="group flex items-center gap-1.5 text-neutral-600 transition-all hover:scale-103 hover:text-[#0a0a0a] hover:underline hover:underline-offset-4 dark:text-neutral-400 dark:hover:text-white"
    >
      {name}
      <ArrowUpRight className="group-hover:-translate-y-0.5 h-4 w-4 transition-all group-hover:translate-x-0.5 " />
    </Link>
  );
}
