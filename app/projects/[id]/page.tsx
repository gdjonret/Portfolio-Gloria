import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-slate-100 space-y-10">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
        >
          <span aria-hidden="true">←</span>
          <span>Back to projects</span>
        </Link>
        {project.subtitle && (
          <p className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80 md:block">
            {project.subtitle}
          </p>
        )}
      </div>

      <header className="space-y-3">
        <div className="space-y-1">
          {project.subtitle && (
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-emerald-200/80 md:hidden">
              {project.subtitle}
            </p>
          )}
          <h1 className="text-3xl font-semibold text-white">{project.title}</h1>
        </div>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </header>

      <section>
        <div className="relative w-full h-48 md:h-72">
          <Image
            src="/images/projects/Chart.png"
            alt={project.title}
            fill
            className="object-contain object-top rounded-2xl"
            priority
          />
        </div>
      </section>

      <section className="-mt-4 md:-mt-6 space-y-12 text-sm leading-relaxed text-slate-300">
        <div>
          <h3 className="text-base font-semibold text-slate-100">What It Does</h3>
          <ul className="mt-3 space-y-1">
            <li>• Public guest website for searching availability and creating reservations.</li>
            <li>• Admin portal for reception and operations teams.</li>
            <li>• Manages arrivals, in-house stays, departures, and forward bookings.</li>
            <li>• Single backend securely serving multiple clients.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-100">System Design</h3>
          <p className="mt-3">
            Single Spring Boot backend exposes <code className="text-emerald-300/80">/api/public/**</code> for guest bookings and
            <code className="text-emerald-300/80">/api/admin/**</code> for secured admin operations. Requests pass through controllers →
            services → domain logic → persistence.
          </p>
          <ul className="mt-3 space-y-1">
            <li>• JWT + role-based access (Admin / Receptionist).</li>
            <li>• Stateless services designed for horizontal scaling.</li>
            <li>
              • Admin portal calls use JWT while the public site hits <code className="text-emerald-300/80">/api/public/bookings</code>; services
              coordinate Postgres, cache, and notifications.
            </li>
          </ul>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-slate-100">Booking Flow</h3>
            <ol className="mt-3 space-y-1 list-decimal list-inside">
              <li>Validate stay dates against availability.</li>
              <li>Generate booking reference + pricing summary.</li>
              <li>Persist booking in PostgreSQL (transactional).</li>
              <li>Emit <span className="font-mono text-emerald-300/80">BOOKING_CREATED</span> event.</li>
              <li>Notify staff/guest via email or SMS.</li>
              <li>Return structured response to client.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-100">Domain Decisions</h3>
            <ul className="mt-3 space-y-1">
              <li>• LocalDate for stays to avoid timezone or DST bugs.</li>
              <li>• Explicit booking lifecycle states.</li>
              <li>• Database constraints + indices to guard correctness and performance.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-slate-100">Performance & Reliability</h3>
            <ul className="mt-3 space-y-1">
              <li>• Operational views optimized for Arrivals / In-House / Departures.</li>
              <li>• Cache-ready architecture (Caffeine/Redis) for hot lookups.</li>
              <li>• Flyway migrations for safe schema evolution.</li>
              <li>• Strong transactional boundaries on booking creation.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-100">Security</h3>
            <ul className="mt-3 space-y-1">
              <li>• JWT authentication on admin endpoints.</li>
              <li>• Role-based authorization separating Admin vs Reception.</li>
              <li>• Public endpoints isolated from admin APIs.</li>
              <li>• Validation enforced at API and domain layers.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur">
        <h2 className="text-lg font-semibold text-slate-100 mb-6">
          Tech Stack
        </h2>
        
        {project.techStack ? (
          <div className="grid gap-8 md:grid-cols-3">
            {project.techStack.backend && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400/90">
                  Backend
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.techStack.backend.map((tech) => (
                    <li key={tech} className="flex items-start gap-2">
                      <span className="text-emerald-400/60 mt-1">▸</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.techStack.frontend && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400/90">
                  Frontend
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.techStack.frontend.map((tech) => (
                    <li key={tech} className="flex items-start gap-2">
                      <span className="text-emerald-400/60 mt-1">▸</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.techStack.architecture && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400/90">
                  Architecture
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.techStack.architecture.map((tech) => (
                    <li key={tech} className="flex items-start gap-2">
                      <span className="text-emerald-400/60 mt-1">▸</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <ul className="flex flex-wrap gap-2 text-sm text-slate-200">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 bg-slate-800/50"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
