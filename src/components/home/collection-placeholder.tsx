import type { Product } from "@/domain/product";
import { Reveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/product/product-card";
import { ArrowIcon } from "@/components/ui/icons";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  tone: "sand" | "rose" | "clay";
  reverse?: boolean;
  products: Product[];
};

function SectionLink({ href }: { href: string }) {
  return (
    <a href={href} className="group inline-flex shrink-0 items-center gap-3 text-[10px] font-semibold tracking-widest uppercase">
      Zobraziť všetko
      <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
    </a>
  );
}

function NewArrivals({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-12 lg:items-start">
      <Reveal className="lg:col-span-5" variant="scale">
        <ProductCard product={products[0]} landscape imageSizes="(max-width: 768px) 50vw, 42vw" />
      </Reveal>
      <Reveal className="mt-10 lg:col-span-3 lg:mt-32" delay={80}>
        <ProductCard product={products[1]} />
      </Reveal>
      <Reveal className="lg:col-span-2 lg:mt-10" delay={160}>
        <ProductCard product={products[2]} />
      </Reveal>
      <Reveal className="mt-10 lg:col-span-2 lg:mt-48" delay={240}>
        <ProductCard product={products[3]} />
      </Reveal>
    </div>
  );
}

function Recommended({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-5">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-7 lg:grid-cols-7">
        <Reveal className="lg:col-span-5" variant="scale">
          <ProductCard product={products[0]} imageSizes="(max-width: 768px) 50vw, 42vw" />
        </Reveal>
        <Reveal className="mt-16 lg:col-span-2 lg:mt-40" delay={80}>
          <ProductCard product={products[1]} />
        </Reveal>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-4 lg:col-start-9 lg:content-start">
        <Reveal className="col-span-2 mb-8 sm:max-w-sm lg:mb-16" delay={120}>
          <blockquote className="border-l border-ink/25 pl-6 font-display text-3xl leading-tight italic text-stone-600 lg:text-4xl">
            „Kúsky, ktoré sa dobre nosia a ľahko kombinujú.“
          </blockquote>
        </Reveal>
        <Reveal className="mt-12" delay={180}>
          <ProductCard product={products[2]} />
        </Reveal>
        <Reveal delay={260}>
          <ProductCard product={products[3]} />
        </Reveal>
      </div>
    </div>
  );
}

function SaleEdit({ products }: { products: Product[] }) {
  return (
    <div className="relative grid gap-12 lg:grid-cols-12">
      <Reveal className="hidden lg:col-span-3 lg:flex lg:min-h-[34rem] lg:flex-col lg:justify-between">
        <span className="font-display text-[9rem] leading-[0.7] tracking-[-0.08em] text-[#9e7963]/25 [writing-mode:vertical-rl]">SALE</span>
        <p className="max-w-40 text-[9px] leading-5 tracking-[0.18em] text-stone-500 uppercase">Limitované množstvá<br />Vybrané kúsky</p>
      </Reveal>
      <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-5 lg:col-span-9 lg:grid-cols-9">
        <Reveal className="lg:col-span-4" delay={100} variant="scale">
          <ProductCard product={products[0]} landscape />
        </Reveal>
        <Reveal className="mt-12 lg:col-span-2 lg:mt-28" delay={180}>
          <ProductCard product={products[1]} />
        </Reveal>
        <Reveal className="lg:col-span-3" delay={260}>
          <ProductCard product={products[2]} />
        </Reveal>
        <Reveal className="col-start-2 mt-6 lg:col-span-3 lg:col-start-6 lg:-mt-16" delay={340} variant="scale">
          <ProductCard product={products[3]} landscape />
        </Reveal>
      </div>
    </div>
  );
}

export function CollectionPlaceholder({ eyebrow, title, description, reverse = false, products }: Props) {
  const id = title === "Novinky" ? "novinky" : title === "Sale" ? "sale" : "odporucame";
  const href = title === "Novinky" ? "/novinky" : title === "Sale" ? "/sale" : "/oblecenie";

  return (
    <section id={id} className={`scroll-mt-6 border-t border-line ${title === "Odporúčame" ? "py-24 sm:py-40" : "py-16 sm:py-28"}`}>
      <Reveal className={`mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12 ${reverse ? "lg:text-right" : ""}`}>
        <div className={reverse ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
          <p className="text-[10px] font-semibold tracking-[0.22em] text-stone-500 uppercase">{eyebrow}</p>
          <h2 className={`mt-3 font-display font-medium tracking-[-0.055em] italic ${title === "Sale" ? "text-7xl text-[#9d4738] sm:text-9xl" : "text-5xl sm:text-7xl"}`}>{title}</h2>
        </div>
        <div className={`flex max-w-md flex-col items-start gap-6 lg:items-end ${reverse ? "lg:col-span-4 lg:col-start-3 lg:row-start-1 lg:justify-self-end lg:text-left" : "lg:col-span-4 lg:col-start-9 lg:justify-self-end"}`}>
          <p className="text-sm leading-6 text-stone-500">{description}</p>
          <SectionLink href={href} />
        </div>
      </Reveal>

      {title === "Novinky" && <NewArrivals products={products} />}
      {title === "Odporúčame" && <Recommended products={products} />}
      {title === "Sale" && <SaleEdit products={products} />}
    </section>
  );
}
