import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu sa oblečiem | Móda pre každý deň",
  description: "Dámska móda, topánky, doplnky a parfémy vybrané pre váš šatník.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="sk"><body className="flex min-h-dvh flex-col antialiased"><Header /><div className="flex-1">{children}</div><Footer /><ScrollToTop /></body></html>;
}
