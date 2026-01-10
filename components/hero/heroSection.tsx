import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-6 sm:px-12 md:pl-28 pt-20 sm:pt-32 md:pt-40 pb-16 sm:pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-8 sm:gap-12 md:gap-16">
        {/* Left: Text-heavy hero */}
        <div className="col-span-12 md:col-span-7 order-2 md:order-1">
          <p className="font-mono text-sm tracking-widest text-emerald-200/80">
            Hi, my name is
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100">
            Gloria Djonret.
          </h1>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100/40">
            I build reliable systems
          </h2>

          <p className="mt-6 sm:mt-8 md:mt-10 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
            I’m a software engineer who builds production-ready applications with strong
            engineering fundamentals, clean architectures, and modern tooling. I enjoy
            taking ideas from prototype to deployment and solving real problems through
            thoughtful software.
          </p>

          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300"
            >
              View my Work
            </a>
          </div>
          
        </div>

        {/* Right: Photo */}
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative h-[360px] w-[280px] sm:h-[420px] sm:w-[320px] md:h-[460px] md:w-[350px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/Photo1.jpg"
              alt="Portrait of Gloria Djonret"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
