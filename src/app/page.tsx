import { CollectionPlaceholder } from "@/components/home/collection-placeholder";
import { Hero } from "@/components/home/hero";
import { PromoBanner } from "@/components/home/promo-banner";
import { Reveal } from "@/components/motion/reveal";
import { getProducts } from "@/services/product-service";

export default async function HomePage() {
  const [newProducts, featuredProducts, saleProducts] = await Promise.all([
    getProducts({ isNew: true, limit: 4 }),
    getProducts({ isFeatured: true, limit: 4 }),
    getProducts({ isOnSale: true, limit: 4 }),
  ]);

  return <main><Hero /><div className="page-shell py-20 sm:py-28">
    <CollectionPlaceholder eyebrow="Práve dorazilo" title="Novinky" description="Pozrite si najnovšie kúsky z aktuálnej kolekcie." tone="sand" products={newProducts} />
    <CollectionPlaceholder eyebrow="Náš výber" title="Odporúčame" description="Modely, ku ktorým sa budete radi vracať." tone="rose" products={featuredProducts} reverse />
    <CollectionPlaceholder eyebrow="Vybrané kúsky" title="Sale" description="Nižšie ceny platia do vypredania zásob." tone="clay" products={saleProducts} />
  </div><Reveal variant="scale"><PromoBanner /></Reveal></main>;
}
