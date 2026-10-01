import Link from "next/link";
import { BagIcon, HeartIcon, SearchIcon } from "@/components/ui/icons";

const navigation = [
  { label: "Novinky", href: "/novinky" },
  { label: "Oblečenie", href: "/oblecenie" },
  { label: "Topánky", href: "/topanky" },
  { label: "Doplnky", href: "/doplnky" },
  { label: "Parfémy", href: "/parfemy" },
  { label: "Sale", href: "/sale" },
] as const;
const actions = [{ label: "Vyhľadávanie", icon: SearchIcon }, { label: "Obľúbené", icon: HeartIcon }, { label: "Nákupný košík", icon: BagIcon }] as const;

export function Header() {
  return <header className="bg-paper">
    <p className="bg-ink px-4 py-2 text-center text-[10px] font-semibold tracking-[0.18em] text-white uppercase sm:text-xs">Doprava zdarma pri nákupe nad 100 €</p>
    <div className="page-shell grid min-h-20 grid-cols-[1fr_auto_1fr] items-center border-b border-line sm:min-h-24">
      <span className="text-[10px] tracking-[0.16em] text-stone-500 uppercase max-lg:hidden">Bratislava · Slovensko</span>
      <Link href="/" className="group col-start-2 text-center" aria-label="Tu sa oblečiem, domov"><span className="block font-display text-[1.7rem] leading-none font-semibold tracking-[-0.03em] transition-[letter-spacing] duration-300 group-hover:tracking-[-0.015em] sm:text-4xl">Tu sa oblečiem</span><span className="mt-1 block text-[8px] tracking-[0.34em] uppercase sm:text-[9px]">Vybrané s citom</span></Link>
      <div className="col-start-3 flex items-center justify-end gap-1 sm:gap-3">{actions.map(({ label, icon: Icon }, index) => <button key={label} type="button" aria-label={label} className={`relative grid size-10 cursor-pointer place-items-center before:absolute before:inset-1 before:scale-75 before:rounded-full before:bg-stone-200 before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-100 ${index === 1 ? "max-[380px]:hidden" : ""}`}><Icon className="relative size-5 transition-transform duration-200 hover:scale-95" />{index === 2 && <span className="absolute top-1.5 right-0.5 grid size-4 place-items-center rounded-full bg-ink text-[8px] text-white">0</span>}</button>)}</div>
    </div>
    <nav className="border-b border-line" aria-label="Hlavná navigácia"><div className="page-shell flex items-center gap-7 overflow-x-auto py-4 [scrollbar-width:none] sm:justify-center sm:gap-10 [&::-webkit-scrollbar]:hidden">{navigation.map(({ label, href }) => <Link key={label} href={href} className={`relative shrink-0 py-1 text-[11px] font-semibold tracking-[0.15em] uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${label === "Sale" ? "text-[#9d4738]" : ""}`}>{label}</Link>)}</div></nav>
  </header>;
}
