export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-slate-100 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">Projects</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">In progress</h1>
        <p className="mt-3 text-slate-400">
          This space will soon showcase case studies for each build. For now, explore featured work on the
          homepage or dive into the detailed write-up via the “View details” buttons.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-slate-900/30 p-6 text-sm text-slate-300">
        <p>Need something specific?</p>
        <p className="mt-2 text-slate-100">
          Reach out via{" "}
          <a href="mailto:hello@gloriadjonret.com" className="underline-offset-4 hover:underline">
            hello@gloriadjonret.com
          </a>{" "}
          and I’ll send curated work samples.
        </p>
      </section>
    </main>
  );
}
