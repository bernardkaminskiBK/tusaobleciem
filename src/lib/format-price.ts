const euroFormatter = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(price: number) {
  return euroFormatter.format(price);
}
