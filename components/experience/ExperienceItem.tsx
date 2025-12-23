import type { Experience } from "@/app/types/experience";

type Props = {
  active: Experience;
};

export default function ExperienceItem({ active }: Props) {
  const content = (
    <>
      {/* Title line */}
      <h3 className="text-xl sm:text-2xl font-normal text-white leading-tight">
        {active.role}{" "}
        <span className="text-teal-300">
          @{" "}
          {active.link ? (
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-teal-200 transition-colors duration-200"
            >
              {active.company}
            </a>
          ) : (
            active.company
          )}
        </span>
      </h3>

      {/* Sub line */}
      <p className="mt-1 text-xs sm:text-sm text-slate-400">
        {active.location ? `${active.location} | ` : ""}
        {active.period}
      </p>

      {/* Bullets */}
      <ul className="mt-6 sm:mt-8 md:mt-10 space-y-5 sm:space-y-6 md:space-y-7 text-slate-300">
        {active.highlights.map((point, idx) => (
          <li key={idx} className="flex items-start gap-4 group">
            <span className="mt-1 text-teal-300 text-base sm:text-lg leading-none group-hover:text-teal-200 transition-colors duration-200">
              ▸
            </span>

            <p className="leading-relaxed text-sm sm:text-[15px] group-hover:text-slate-200 transition-colors duration-200">
              {point}
            </p>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      {active.tech && active.tech.length > 0 && (
        <div className="mt-6 md:mt-8 sm:md:mt-10 md:md:mt-12 flex flex-wrap gap-2">
          {active.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-teal-300/20 bg-teal-300/5 px-4 py-1.5 text-xs font-medium text-teal-200 hover:bg-teal-300/10 hover:border-teal-300/40 transition-all duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="animate-in fade-in duration-500">
      {/* Mobile: Card wrapper */}
      <div className="md:hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-lg">
        {content}
      </div>

      {/* Desktop: No wrapper */}
      <div className="hidden md:block">
        {content}
      </div>
    </div>
  );
}
