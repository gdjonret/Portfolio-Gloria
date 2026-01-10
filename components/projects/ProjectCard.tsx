import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/app/types/project";

type Props = {
  project: Project;
  reverse?: boolean;
};

export default function ProjectCard({ project, reverse = false }: Props) {
  const forceOppositeDescriptionAlign = [
    "hotel-reservation-platform",
    "braids-booking-platform",
    "infrastructure-platform",
  ].includes(project.id);

  return (
    <article className="relative grid grid-cols-12 items-center">
      {/* IMAGE (always row 1 on desktop) */}
      <div
        className={[
          "relative col-span-12 md:col-span-7 md:row-start-1",
          reverse ? "md:col-start-6" : "md:col-start-1",
        ].join(" ")}
      >
        <div className="relative h-[260px] md:h-[380px] overflow-hidden rounded-xl border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority={false}
          />

          {/* dark overlay like the reference */}
          <div className="absolute inset-0 bg-slate-900/35" />
        </div>
      </div>

      {/* TEXT (force same row, overlap image) */}
      <div
        className={[
          "relative z-10 col-span-12 md:col-span-6 md:row-start-1",
          reverse
            ? "md:col-start-1 md:pr-12 md:text-left"
            : "md:col-start-7 md:pl-12 md:text-right",
          // pull the text block slightly over the image
          reverse ? "md:-mr-16" : "md:-ml-16",
        ].join(" ")}
      >
        {project.subtitle && (
          <p className="font-mono text-xs tracking-widest text-emerald-200/80">
            {project.subtitle}
          </p>
        )}

        <h3 className="mt-2 text-3xl font-semibold text-slate-100">
          {project.title}
        </h3>

        {/* Floating description box (this is the key visual) */}
        <div
          className={[
            "mt-5 rounded-lg border border-white/10 bg-slate-900/70 p-5 shadow-xl backdrop-blur",
            forceOppositeDescriptionAlign
              ? reverse
                ? "text-right"
                : "text-left"
              : "",
          ].join(" ")}
        >
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Tech row */}
        <ul
          className={[
            "mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 font-mono",
            reverse ? "md:justify-start" : "md:justify-end",
          ].join(" ")}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Links */}
        <div
          className={[
            "mt-5 flex flex-wrap items-center gap-4",
            reverse ? "md:justify-start" : "md:justify-end",
          ].join(" ")}
        >
          {project.showDetailsButton && (
            <Link
              href={`/projects/${project.id}`}
              className="rounded-md border border-white/40 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white hover:bg-white/10 hover:text-white"
            >
              View details
            </Link>
          )}

          {project.showTemplateButton && project.templateUrl && (
            <a
              href={project.templateUrl}
              className="rounded-md border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-100"
            >
              View Template
            </a>
          )}

          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" aria-hidden="true" />
              </a>
            )}
            {project.external &&
              (project.external.startsWith("/") ? (
                <Link
                  href={project.external}
                  className="text-slate-300 hover:text-white transition"
                  aria-label="Live"
                >
                  <FiExternalLink className="text-xl" aria-hidden="true" />
                </Link>
              ) : (
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition"
                  aria-label="Live"
                >
                  <FiExternalLink className="text-xl" aria-hidden="true" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
