export default function Home() {
  const pillars = [
    {
      title: "New Chinese Style",
      detail:
        "A contemporary language that reinterprets Chinese cultural codes through modern tailoring, material contrast, and restrained silhouettes.",
    },
    {
      title: "Designer Incubation",
      detail:
        "Dong Liang champions independent labels and gives emerging designers commercial visibility without flattening their identity.",
    },
    {
      title: "Cultural Retail",
      detail:
        "Retail is treated as editorial space: part showroom, part narrative platform for Chinese creative voices.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f0e8] text-[#1f1812]">
      <div
        className="pointer-events-none absolute -top-32 left-[-120px] h-[460px] w-[460px] rounded-full bg-[#cfb08a]/35 blur-3xl"
        style={{ animation: "driftA 11s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[-120px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#7f1d1d]/22 blur-3xl"
        style={{ animation: "driftB 13s ease-in-out infinite 0.8s" }}
      />
      <div className="pointer-events-none absolute top-0 right-[14%] h-full w-px bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent" />
      <div className="pointer-events-none absolute top-[22%] left-0 h-px w-full bg-gradient-to-r from-transparent via-[#7f1d1d]/28 to-transparent" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10 lg:py-14">
        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7c6047]">
              Beijing / Shanghai · Designer Boutique
            </p>
            <h1 className="font-['Times_New_Roman',serif] text-[3rem] leading-[0.95] sm:text-[4.2rem] lg:text-[5.4rem]">
              DONG LIANG
              <span className="mt-2 block text-[0.42em] tracking-[0.22em] text-[#7f1d1d]">
                NEW CHINESE STYLE
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#3f3126] sm:text-lg">
              Dong Liang is often cited as a key force in modern Chinese
              designer retail. Its curation aligns closely with{" "}
              <span className="font-semibold">new Chinese style (新中式)</span>:
              a fashion attitude that fuses cultural memory with contemporary,
              globally literate design.
            </p>
          </div>

          <div className="rounded-3xl border border-[#7f1d1d]/30 bg-[#2b1a12] p-6 text-[#f5e7d9] sm:p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-[#dfc4a6]">
              Style Note
            </p>
            <p className="mt-4 font-['Times_New_Roman',serif] text-2xl leading-snug sm:text-3xl">
              Not costume. Not nostalgia. New Chinese style is design-forward
              cultural translation.
            </p>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-[#af8e71]/45 bg-[#fffaf4]/92 p-5 shadow-[0_8px_26px_-18px_rgba(62,31,10,0.55)]"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-[#7f1d1d]">
                {pillar.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4f3d2e]">
                {pillar.detail}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-[#7f1d1d]/28 bg-[#fffaf4]/95 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#89684e]">
              Aesthetic Markers of 新中式
            </p>
            <ul className="mt-4 space-y-3 text-[#3f3024]">
              <li className="rounded-xl bg-[#f2e4d4] px-4 py-3">
                Clean modern silhouettes with subtle references to traditional
                forms.
              </li>
              <li className="rounded-xl bg-[#f2e4d4] px-4 py-3">
                Natural textures, artisanal craft cues, and modern styling
                precision.
              </li>
              <li className="rounded-xl bg-[#f2e4d4] px-4 py-3">
                A color story balancing ink neutrals, tea browns, and lacquer
                red accents.
              </li>
            </ul>
          </article>

          <aside className="rounded-3xl border border-[#af8e71]/45 bg-[#fffaf4]/95 p-6 sm:p-7">
            <h2 className="font-['Times_New_Roman',serif] text-3xl leading-tight text-[#2d2015]">
              Source Links
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4d3a2d]">
              Profiles and reporting that informed this page:
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                className="rounded-lg border border-[#af8e71]/55 px-3 py-2 transition hover:bg-[#f1dfcc]"
                href="https://www.businessoffashion.com/articles/retail/6-global-gamechangers-revolutionising-multi-brand-retail/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Business of Fashion: Dong Liang and retail impact
              </a>
              <a
                className="rounded-lg border border-[#af8e71]/55 px-3 py-2 transition hover:bg-[#f1dfcc]"
                href="https://english.shanghai.gov.cn/en-FirstStores/20241024/54129fd59249474fb143f6eb07cec2da.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shanghai Gov: Dong Liang flagship update
              </a>
              <a
                className="rounded-lg border border-[#af8e71]/55 px-3 py-2 transition hover:bg-[#f1dfcc]"
                href="https://www.tatlerasia.com/people/liu-xinxia-tasha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tatler Asia: Tasha Liu profile
              </a>
            </div>
          </aside>
        </section>

        <footer className="border-t border-[#a78466]/40 pt-5">
          <p className="text-sm tracking-[0.08em] text-[#654d3a]">
            Editorial landing concept inspired by contemporary Chinese fashion
            culture and the evolving language of 新中式.
          </p>
        </footer>
      </main>

      <style>{`
        @keyframes driftA {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) translateX(12px) scale(1.05) rotate(5deg);
          }
        }

        @keyframes driftB {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(20px) translateX(-12px) scale(1.08) rotate(-4deg);
          }
        }
      `}</style>
    </div>
  );
}
