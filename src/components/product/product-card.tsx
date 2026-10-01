import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/domain/product";
import { categoryLabels } from "@/domain/product";
import { formatPrice } from "@/lib/format-price";
import { HeartIcon } from "@/components/ui/icons";

type ProductCardProps = {
  product: Product;
  className?: string;
  landscape?: boolean;
  imageSizes?: string;
};

export function ProductCard({ product, className = "", landscape = false, imageSizes = "(max-width: 768px) 50vw, 25vw" }: ProductCardProps) {
  const image = product.images[0];
  const isOnSale = product.salePrice !== undefined;

  return (
    <article className={`group min-w-0 ${className}`}>
      <div className={`relative overflow-hidden bg-[#e8dfd4] ${landscape ? "aspect-[5/4]" : "aspect-[3/4]"}`}>
        <Link href={`/produkt/${product.slug}`} aria-label={`Zobraziť produkt ${product.name}`} className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={imageSizes}
            style={{ objectPosition: image.position ?? "center" }}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
          <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/[0.04]" />
        </Link>

        <div className="absolute top-3 left-3 flex gap-1.5">
          {isOnSale && <span className="bg-[#9d4738] px-2.5 py-1 text-[8px] font-semibold tracking-[0.15em] text-white uppercase">Sale</span>}
          {product.isNew && !isOnSale && <span className="bg-paper px-2.5 py-1 text-[8px] font-semibold tracking-[0.15em] uppercase">Novinka</span>}
        </div>

        <button type="button" aria-label={`Pridať ${product.name} medzi obľúbené`} className="absolute top-3 right-3 grid size-9 cursor-pointer place-items-center rounded-full bg-white/85 opacity-100 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <HeartIcon className="size-4" />
        </button>
      </div>

      <Link href={`/produkt/${product.slug}`} className="block pt-4 focus-visible:outline-1 focus-visible:outline-offset-4">
        <p className="mb-1 text-[9px] font-semibold tracking-[0.14em] text-stone-400 uppercase">{categoryLabels[product.category]}</p>
        <h3 className="text-sm font-medium transition-opacity group-hover:opacity-60">{product.name}</h3>
        <p className="mt-1.5 flex gap-2 text-xs text-stone-500">
          {isOnSale && <span className="text-[#9d4738]">{formatPrice(product.salePrice!)}</span>}
          <span className={isOnSale ? "line-through opacity-65" : ""}>{formatPrice(product.price)}</span>
        </p>
      </Link>
    </article>
  );
}
