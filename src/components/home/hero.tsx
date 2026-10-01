import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="page-shell relative min-h-[42rem] overflow-hidden bg-[#e9e3db] sm:min-h-[48rem] lg:min-h-[45rem]">
      <div className="absolute inset-x-0 top-0 h-px bg-ink/10" />

      {/* Hero content */}
      <div className="relative z-20 flex max-w-2xl flex-col items-start px-7 pt-16 sm:px-14 sm:pt-24 lg:w-[54%] lg:max-w-none lg:px-12 lg:pt-28 xl:px-20">
        <p className="text-[10px] font-semibold tracking-[0.24em] uppercase">
          Nová kolekcia · 2026
        </p>

    <h1 className="mt-5 font-display text-6xl leading-[0.84] font-medium tracking-[-0.055em] sm:text-8xl lg:text-[5.25rem] xl:text-[6.25rem]">
  <span className="block lg:whitespace-nowrap">
    Štýl, ktorý je
  </span>

  <span className="mt-3 ml-[0.45em] block italic">
    celý tvoj.
  </span>
</h1>

        <p className="mt-7 max-w-sm text-sm leading-7 text-stone-600 sm:ml-28 sm:text-base lg:ml-40">
          Kúsky z talianskych kolekcií, ktoré ľahko skombinujete na každý deň.
        </p>
<Link
  href="#novinky"
  className="group mt-8 inline-flex items-center gap-5 text-[11px] font-semibold tracking-[0.17em] uppercase sm:ml-28 lg:ml-40"
>
  <span className="relative pb-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-ink">
    Objaviť kolekciu
  </span>

  <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
</Link>
      </div>

      {/* Editorial artwork */}
      <div className="absolute right-0 bottom-0 h-[48%] w-[78%] overflow-hidden bg-[#c6a995] sm:h-[53%] sm:w-[66%] lg:top-0 lg:h-full lg:w-[46%]">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_0%,rgba(91,57,40,.2)_100%)]" />

        <div className="absolute -right-[16%] -bottom-[20%] aspect-[3/4] w-[82%] -rotate-6 rounded-[50%_50%_8%_8%] bg-[#744b3a]/85 shadow-[-30px_30px_80px_rgba(74,46,32,.25)] transition-transform duration-700 ease-out hover:-translate-x-2 hover:-rotate-3" />

        <div className="absolute top-[7%] left-[5%] aspect-[2/3] w-[43%] rotate-[9deg] rounded-[48%_48%_10%_10%] border border-white/40 bg-[#e6d4c5]/75 shadow-2xl transition-transform duration-700 ease-out hover:translate-x-1 hover:translate-y-1.5" />

        <div className="absolute top-[9%] right-[7%] h-[70%] w-[48%] -rotate-3 overflow-hidden border border-white/45 bg-[#d9c2ae] shadow-[-18px_24px_45px_rgba(74,46,32,.24)] transition-transform duration-700 ease-out hover:rotate-0 hover:scale-[1.015]">
          <Image
            src="/images/hero/editorial-woman-v1.png"
            alt="Modelka v hnedom saku a krémových nohaviciach"
            fill
            priority
            sizes="(max-width: 1024px) 38vw, 23vw"
            className="object-cover object-[center_12%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(155deg,transparent_60%,rgba(68,40,28,.18)_100%)]" />
        </div>

        <div className="absolute right-[6%] bottom-[8%] font-display text-8xl text-white/20 italic sm:text-9xl">
          new
        </div>
      </div>

      {/* Vertical editorial label */}
      <div className="absolute right-[8%] bottom-[42%] z-30 hidden -rotate-90 text-[9px] tracking-[0.23em] text-ink/60 uppercase sm:block lg:right-[43%] lg:bottom-10">
        Výber z Talianska · Bratislava
      </div>

      {/* Edition label */}
      <div className="absolute bottom-5 left-6 z-30 flex items-center gap-3 text-[9px] tracking-[0.2em] text-ink/55 uppercase sm:left-10">
        <span>01</span>
        <span className="h-px w-10 bg-ink/35" />
        <span>Jarný výber</span>
      </div>
    </section>
  );
}
