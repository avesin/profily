import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export function GooglePlayIframe() {
  return (
    <iframe
      src="https://play.google.com/store/apps/details?id=com.koinworks.app&hl=en"
      width="100%"
      height="600"
      style={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      allowFullScreen
      title="KoinWorks App on Google Play"
    ></iframe>
  );
}

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div>
        {GooglePlayIframe()}
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


