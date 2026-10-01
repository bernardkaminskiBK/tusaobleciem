import Link from "next/link";
const links = [
  { label: "Oblečenie", href: "/oblecenie" },
  { label: "Doplnky", href: "/doplnky" },
  { label: "Parfémy", href: "/parfemy" },
  { label: "Novinky", href: "/novinky" },
  { label: "Kontakt", href: "#" },
];

export function Footer() {
  return <footer className="bg-[#1d1c1a] text-stone-200"><div className="page-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:py-20">
    <div><Link href="/" className="font-display text-4xl text-white">Tu sa oblečiem</Link><p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">Dámska móda a doplnky, ktoré pre vás vyberáme v malých kolekciách.</p></div>
    <div><h2 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">Nakupovať</h2><ul className="mt-5 space-y-3 text-sm text-stone-400">{links.map(({ label, href }) => <li key={label}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}</ul></div>
    <div><h2 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">Sme tu pre vás</h2><address className="mt-5 space-y-3 text-sm leading-6 text-stone-400 not-italic"><p>Laurinská 208/4<br />811 01 Bratislava</p><p>+421 904 925 333<br />shoptusaobleciem@gmail.com</p></address></div>
  </div><div className="border-t border-white/10"><div className="page-shell flex flex-col gap-3 py-5 text-[10px] tracking-wider text-stone-500 uppercase sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Tu sa oblečiem</p><p>Obchodné podmienky · Ochrana súkromia</p></div></div></footer>;
}
