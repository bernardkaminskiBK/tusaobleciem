import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ui/icons";
import { categoryLabels } from "@/domain/product";
import { formatPrice } from "@/lib/format-price";
import { getProductBySlug, getProducts } from "@/services/product-service";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/produkt/[slug]">): Promise<Metadata> {
  const product = await getProductBySlug((await params).slug);
  return product ? { title: `${product.name} | Tu sa oblečiem` } : {};
}

export default async function ProductPreviewPage({ params }: PageProps<"/produkt/[slug]">) {
  const product = await getProductBySlug((await params).slug);
  if (!product) notFound();

  const image = product.images[0];
  return (
    <main className="page-shell py-12 sm:py-20">
      <Link href={`/${product.category}`} className="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.16em] uppercase">
        <ArrowIcon className="size-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
        Späť na {categoryLabels[product.category].toLocaleLowerCase("sk")}
      </Link>
      <div className="mt-10 grid gap-10 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#e8dfd4]">
          <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectPosition: image.position ?? "center" }} className="object-cover" />
        </div>
        <div className="flex flex-col justify-center lg:max-w-md">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-stone-500 uppercase">{categoryLabels[product.category]}</p>
          <h1 className="mt-4 font-display text-5xl leading-none font-medium tracking-[-0.04em] sm:text-7xl">{product.name}</h1>
          <div className="mt-6 flex gap-3 text-sm">
            {product.salePrice !== undefined && <span className="text-[#9d4738]">{formatPrice(product.salePrice)}</span>}
            <span className={product.salePrice !== undefined ? "text-stone-400 line-through" : ""}>{formatPrice(product.price)}</span>
          </div>
          <p className="mt-8 text-sm leading-7 text-stone-600">{product.description}</p>
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase">Detail produktu pripravujeme</p>
            <p className="mt-2 text-sm leading-6 text-stone-500">Veľkosti, dostupnosť a nákup pridáme v ďalšom kroku.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
