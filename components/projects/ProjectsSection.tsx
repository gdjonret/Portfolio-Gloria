import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-12 py-24">
      <div className="flex items-center gap-4">
        <p className="font-mono text-sm text-emerald-200/80">03.</p>
        <h2 className="text-2xl font-semibold text-slate-100">
          Some Things I’ve Built
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="mt-12 space-y-24">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
