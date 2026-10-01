import type { Product } from "@/domain/product";
import { ProductCard } from "@/components/product/product-card";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 lg:grid-cols-4 lg:gap-y-16">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
