import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-lg font-semibold text-gray-800">{project.title}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
