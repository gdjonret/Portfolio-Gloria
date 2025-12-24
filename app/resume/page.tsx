import Link from "next/link";

const RESUME_FILE_PATH = "/docs/Gloria_Djonret_Resume.pdf";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-slate-100 space-y-10">
      <header className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-200/80">
          Resume
        </p>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Gloria Djonret</h1>
          <p className="max-w-3xl text-base md:text-lg text-slate-300 leading-relaxed">
            Full-stack software engineer focused on reliable systems, modern product experiences,
            and pragmatic delivery. Open the PDF or download it directly below.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-200/80">
          <Link href="mailto:hello@gloriadjonret.com" className="underline-offset-4 hover:underline">
            hello@gloriadjonret.com
          </Link>
          <span aria-hidden="true">•</span>
          <Link
            href="https://github.com/gdjonret"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            github.com/gdjonret
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={RESUME_FILE_PATH}
            target="_blank"
            className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/5"
          >
            Open Resume
          </Link>
          <Link
            href={RESUME_FILE_PATH}
            download
            className="rounded-md border border-emerald-400/40 px-5 py-3 text-sm font-medium text-emerald-200 transition hover:border-emerald-300 hover:text-white"
          >
            Download PDF
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 md:p-6">
        <object
          data={RESUME_FILE_PATH}
          type="application/pdf"
          className="h-[70vh] w-full rounded-lg border border-white/5"
        >
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              Unable to display the PDF inline. You can still open it in a new tab or
              <Link
                href={RESUME_FILE_PATH}
                download
                className="ml-1 underline-offset-4 hover:underline text-emerald-200"
              >
                download it here
              </Link>
              .
            </p>
          </div>
        </object>
      </section>
    </main>
  );
}
