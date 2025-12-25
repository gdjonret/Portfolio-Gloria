"use client";
import { useMemo, useState } from "react";
import { experience } from "@/app/data/experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  const items = useMemo(() => experience, []);
  const [activeId, setActiveId] = useState(items[0]?.id);

  const active = items.find((e) => e.id === activeId) ?? items[0];

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24 md:py-35 sm:px-10 lg:px-12"
    >
      {/* Title row */}
      {/* <div className="flex items-center gap-4 sm:gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-teal-300">
          My Work Experiences
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-teal-300/40 via-white/15 to-transparent" />
      </div> */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold text-slate-100">
          My experiences
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

        {/* LEFT: Tabs */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          {/* Mobile: Horizontal scrollable tabs */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-3 min-w-max">
              {items.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={[
                      "flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 touch-manipulation whitespace-nowrap",
                      isActive
                        ? "bg-teal-300/20 text-teal-300 border-2 border-teal-300/40"
                        : "bg-white/5 text-slate-400 border-2 border-white/10 hover:border-white/20 active:bg-white/10",
                    ].join(" ")}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.companyShort ?? item.company}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop: Vertical tabs */}
          <div className="hidden md:block relative pl-6">
            {/* vertical rail */}
            <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-0.5 rounded-full bg-gradient-to-b from-teal-300/30 via-white/15 to-transparent" />

            <div className="flex flex-col space-y-1">
              {items.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={[
                      "group relative flex items-center justify-between gap-3 rounded-r-2xl py-3 sm:py-4 pl-5 sm:pl-6 pr-3 sm:pr-4 text-left text-sm font-medium tracking-wide transition-all duration-200 touch-manipulation",
                      isActive
                        ? "text-teal-300 bg-white/5"
                        : "text-slate-300 hover:text-slate-100 hover:bg-white/5 active:bg-white/10",
                    ].join(" ")}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {/* active indicator */}
                    {isActive && (
                      <span className="absolute -left-1 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-teal-300" />
                    )}

                    <span className="truncate">
                      {item.companyShort ?? item.company}
                    </span>

                    {/* tiny external link icon */}

                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Active Details */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          {active ? <ExperienceItem active={active} /> : null}
        </div>
      </div>
    </section>
  );
}
