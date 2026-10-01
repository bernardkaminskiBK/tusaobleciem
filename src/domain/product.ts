export const productCategories = ["oblecenie", "topanky", "doplnky", "parfemy"] as const;

export type ProductCategory = (typeof productCategories)[number];
export type StockStatus = "in-stock" | "low-stock" | "out-of-stock";

export type ProductImage = {
  src: string;
  alt: string;
  position?: string;
};

export type ProductVariant = {
  name: string;
  values: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: ProductCategory;
  images: ProductImage[];
  variants: ProductVariant[];
  stockStatus: StockStatus;
  isNew: boolean;
  isFeatured: boolean;
};

export type ProductQuery = {
  category?: ProductCategory;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  limit?: number;
};

export const categoryLabels: Record<ProductCategory, string> = {
  oblecenie: "Oblečenie",
  topanky: "Topánky",
  doplnky: "Doplnky",
  parfemy: "Parfémy",
};
