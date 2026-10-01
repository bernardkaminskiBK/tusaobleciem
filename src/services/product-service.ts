import { mockProducts } from "@/data/products";
import type { Product, ProductQuery } from "@/domain/product";

export async function getProducts(query: ProductQuery = {}): Promise<Product[]> {
  let products = [...mockProducts];

  if (query.category) products = products.filter((product) => product.category === query.category);
  if (query.isNew !== undefined) products = products.filter((product) => product.isNew === query.isNew);
  if (query.isFeatured !== undefined) products = products.filter((product) => product.isFeatured === query.isFeatured);
  if (query.isOnSale !== undefined) products = products.filter((product) => (product.salePrice !== undefined) === query.isOnSale);

  return query.limit ? products.slice(0, query.limit) : products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return mockProducts.find((product) => product.slug === slug);
}
