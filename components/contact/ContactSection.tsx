export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-12 py-32 text-center"
    >
      <p className="mb-4 text-sm tracking-widest text-emerald-300/80">
        Get in Touch
      </p>

      <h2 className="text-4xl font-semibold text-slate-100 md:text-5xl">
        Let’s Work Together
      </h2>

      <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
        I’m currently open to new opportunities, particularly impactful and
        challenging projects. Feel free to reach out with questions,
        collaborations, or just to connect — I’m always happy to chat.
      </p>

      <div className="mt-12">
        <a
          href="mailto:djonretglo@gmail.com"
          className="inline-block rounded-md border border-emerald-300/40 px-8 py-4 text-sm font-medium text-emerald-300 hover:bg-emerald-300/10 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
