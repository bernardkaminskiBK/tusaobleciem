import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogPage } from "@/components/catalog/catalog-page";
import type { ProductQuery } from "@/domain/product";
import { getProducts } from "@/services/product-service";

const catalogRoutes = {
  oblecenie: { title: "Oblečenie", eyebrow: "Kolekcia", description: "Šaty, saká, blúzky a ďalšie kúsky na každý deň.", query: { category: "oblecenie" } },
  topanky: { title: "Topánky", eyebrow: "Kolekcia", description: "Topánky, ktoré doplnia bežné aj sviatočné outfity.", query: { category: "topanky" } },
  doplnky: { title: "Doplnky", eyebrow: "Kolekcia", description: "Kabelky, šatky a šperky pre jednoduché kombinovanie.", query: { category: "doplnky" } },
  parfemy: { title: "Parfémy", eyebrow: "Kolekcia", description: "Výber vôní na každý deň aj osobitné príležitosti.", query: { category: "parfemy" } },
  novinky: { title: "Novinky", eyebrow: "Práve dorazilo", description: "Najnovšie kúsky z našej aktuálnej kolekcie.", query: { isNew: true } },
  sale: { title: "Sale", eyebrow: "Vybrané kúsky", description: "Produkty za nižšie ceny do vypredania zásob.", query: { isOnSale: true } },
} satisfies Record<string, { title: string; eyebrow: string; description: string; query: ProductQuery }>;

type CatalogSlug = keyof typeof catalogRoutes;

function isCatalogSlug(value: string): value is CatalogSlug {
  return value in catalogRoutes;
}

export function generateStaticParams() {
  return Object.keys(catalogRoutes).map((catalog) => ({ catalog }));
}

export async function generateMetadata({ params }: PageProps<"/[catalog]">): Promise<Metadata> {
  const { catalog } = await params;
  if (!isCatalogSlug(catalog)) return {};
  return { title: `${catalogRoutes[catalog].title} | Tu sa oblečiem` };
}

export default async function CatalogRoute({ params }: PageProps<"/[catalog]">) {
  const { catalog } = await params;
  if (!isCatalogSlug(catalog)) notFound();

  const config = catalogRoutes[catalog];
  const products = await getProducts(config.query);
  return <CatalogPage {...config} products={products} />;
}
