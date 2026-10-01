import { ProductGrid } from "@/components/catalog/product-grid";
import type { Product } from "@/domain/product";

type CatalogPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  products: Product[];
};

export function CatalogPage({ title, eyebrow, description, products }: CatalogPageProps) {
  return (
    <main className="page-shell pb-24 sm:pb-32">
      <header className="grid gap-8 border-b border-line py-14 sm:py-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-[10px] font-semibold tracking-[0.22em] text-stone-500 uppercase">{eyebrow}</p>
          <h1 className="mt-3 font-display text-6xl leading-none font-medium tracking-[-0.05em] italic sm:text-8xl">{title}</h1>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-md text-sm leading-7 text-stone-500">{description}</p>
          <p className="mt-5 text-[10px] font-semibold tracking-[0.18em] uppercase">{products.length} produktov</p>
        </div>
      </header>
      <div className="pt-12 sm:pt-16"><ProductGrid products={products} /></div>
    </main>
  );
}
