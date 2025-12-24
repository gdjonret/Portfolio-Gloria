import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/types/project";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

function HotelNarrative() {
  return (
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
  );
}

function AdminNarrative() {
  const roles = [
    {
      label: "Guest (Public)",
      points: [
        "Create reservations",
        "View booking status via reference",
        "Access public endpoints only",
      ],
    },
    {
      label: "Receptionist (Authenticated)",
      points: [
        "View arrivals, in-house stays, and departures",
        "Perform check-in and check-out operations",
        "Update booking statuses",
      ],
    },
    {
      label: "Admin (Authenticated)",
      points: [
        "Full access to bookings and reports",
        "Manage rooms, rates, and availability",
        "Manage users and roles",
      ],
    },
  ];

  return (
    <section className="-mt-4 md:-mt-6 space-y-10 text-sm leading-relaxed text-slate-300">
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-slate-100">User Roles (RBAC)</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.label} className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
                {role.label}
              </p>
              <ul className="space-y-1 text-slate-200">
                {role.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-100">System Design</h3>
          <ul className="space-y-1">
            <li>• Single Spring Boot backend serving public + admin clients.</li>
            <li>• Layered architecture (Controllers → Services → Domain → Persistence).</li>
            <li>• Domain-driven modeling for booking lifecycle and states.</li>
            <li>• Flyway migrations keep schema versioned.</li>
            <li>• Cache-ready design (Caffeine / Redis).</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-100">Security & Access Control</h3>
          <ul className="space-y-1">
            <li>• JWT-secured admin APIs (<code className="text-emerald-300/80">/api/admin/**</code>).</li>
            <li>• Public booking APIs isolated (<code className="text-emerald-300/80">/api/public/**</code>).</li>
            <li>• Role permissions enforced in controllers and services.</li>
            <li>• Stateless backend design for horizontal scalability.</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

function GenericNarrative({ project }: { project: Project }) {
  return (
    <section className="-mt-4 md:-mt-6 space-y-8 text-sm leading-relaxed text-slate-300">
      <div>
        <h3 className="text-base font-semibold text-slate-100">Overview</h3>
        <p className="mt-3">{project.description}</p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-slate-100">Highlights</h3>
        <ul className="mt-3 flex flex-wrap gap-3 text-[13px] uppercase tracking-[0.2em] text-emerald-200/80">
          {project.tech.map((tech) => (
            <li key={tech} className="rounded-full border border-white/10 px-4 py-1 text-slate-100">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const isHotelReservation = project?.id === "hotel-reservation-platform";
  const isAdminPlatform = project?.id === "admin-platform";

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
        <Image
          src={isAdminPlatform ? "/images/projects/Admin.png" : "/images/projects/Chart.png"}
          alt={project.title}
          width={1600}
          height={900}
          className="w-full rounded-2xl object-cover object-center"
          priority
        />
      </section>

      {isHotelReservation ? (
        <HotelNarrative />
      ) : isAdminPlatform ? (
        <AdminNarrative />
      ) : (
        <GenericNarrative project={project} />
      )}

    </main>
  );
}
