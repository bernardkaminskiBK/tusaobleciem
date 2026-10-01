import type { Product } from "@/domain/product";

const images = {
  dress: "/images/products/chocolate-dress.png",
  blazer: "/images/products/blazer-livia.png",
  blouse: "/images/products/blouse-alba.png",
  knitTop: "/images/products/knit-top-nora.png",
  trousers: "/images/products/trousers-chiara.png",
  ankleBoots: "/images/products/ankle-boots-ambra.png",
  pumps: "/images/products/pumps-rosa.png",
  sneakers: "/images/products/sneakers-bianca.png",
  loafers: "/images/products/espresso-loafers.png",
  caramelBag: "/images/products/bag-caramella.png",
  creamBag: "/images/products/cream-bag.png",
  scarf: "/images/products/scarf-terra.png",
  earrings: "/images/products/earrings-goccia.png",
  bracelet: "/images/products/bracelet-linea.png",
  perfumeAmbra: "/images/products/amber-perfume.png",
  perfumeFico: "/images/products/perfume-fico.png",
  perfumeRosa: "/images/products/perfume-rosa.png",
  perfumeLegno: "/images/products/perfume-legno.png",
} as const;

const clothingSizes = [{ name: "Veľkosť", values: ["XS", "S", "M", "L"] }];
const shoeSizes = [{ name: "Veľkosť", values: ["36", "37", "38", "39", "40"] }];

export const mockProducts: Product[] = [
  { id: "p01", slug: "satenove-saty-elena", name: "Saténové šaty Elena", description: "Dlhé saténové šaty s jemným riasením v páse.", price: 89, category: "oblecenie", images: [{ src: images.dress, alt: "Hnedé saténové šaty Elena" }], variants: clothingSizes, stockStatus: "in-stock", isNew: true, isFeatured: true },
  { id: "p02", slug: "sako-livia", name: "Sako Livia", description: "Voľnejšie sako z mäkkej zmesi vlny v kakaovom odtieni.", price: 98, category: "oblecenie", images: [{ src: images.blazer, alt: "Kakaové dámske sako Livia", position: "72% center" }], variants: clothingSizes, stockStatus: "low-stock", isNew: true, isFeatured: true },
  { id: "p03", slug: "bluzka-alba", name: "Blúzka Alba", description: "Ľahká krémová blúzka s čistým golierom.", price: 49, category: "oblecenie", images: [{ src: images.blouse, alt: "Krémová blúzka Alba", position: "28% center" }], variants: clothingSizes, stockStatus: "in-stock", isNew: true, isFeatured: false },
  { id: "p04", slug: "upletovy-top-nora", name: "Úpletový top Nora", description: "Jemný priliehavý top na vrstvenie aj samostatné nosenie.", price: 39, salePrice: 29, category: "oblecenie", images: [{ src: images.knitTop, alt: "Krémový úpletový top Nora", position: "65% 85%" }], variants: clothingSizes, stockStatus: "in-stock", isNew: false, isFeatured: false },
  { id: "p05", slug: "nohavice-chiara", name: "Nohavice Chiara", description: "Rovné nohavice s vyšším pásom a mäkkým splývaním.", price: 69, salePrice: 49, category: "oblecenie", images: [{ src: images.trousers, alt: "Hnedé nohavice Chiara", position: "center 75%" }], variants: clothingSizes, stockStatus: "low-stock", isNew: false, isFeatured: true },

  { id: "p06", slug: "clenkove-topanky-ambra", name: "Členkové topánky Ambra", description: "Kožené členkové topánky na stabilnom podpätku.", price: 119, category: "topanky", images: [{ src: images.ankleBoots, alt: "Koňakové členkové topánky Ambra", position: "30% 24%" }], variants: shoeSizes, stockStatus: "in-stock", isNew: true, isFeatured: true },
  { id: "p07", slug: "lodicky-rosa", name: "Lodičky Rosa", description: "Bordové lodičky s otvorenou pätou a úzkou špičkou.", price: 84, salePrice: 62, category: "topanky", images: [{ src: images.pumps, alt: "Bordové lodičky Rosa", position: "78% 55%" }], variants: shoeSizes, stockStatus: "low-stock", isNew: false, isFeatured: true },
  { id: "p08", slug: "tenisky-bianca", name: "Tenisky Bianca", description: "Jednoduché kožené tenisky v teplom krémovom odtieni.", price: 79, category: "topanky", images: [{ src: images.sneakers, alt: "Krémové tenisky Bianca", position: "30% 82%" }], variants: shoeSizes, stockStatus: "in-stock", isNew: true, isFeatured: false },
  { id: "p09", slug: "mokasiny-caffe", name: "Mokasíny Caffè", description: "Klasické kožené mokasíny na nízkom podpätku.", price: 92, category: "topanky", images: [{ src: images.loafers, alt: "Tmavohnedé mokasíny Caffè" }], variants: shoeSizes, stockStatus: "in-stock", isNew: false, isFeatured: true },

  { id: "p10", slug: "kabelka-caramella", name: "Kabelka Caramella", description: "Mäkká kabelka na plece s nastaviteľným popruhom.", price: 74, category: "doplnky", images: [{ src: images.caramelBag, alt: "Karamelová kabelka Caramella", position: "center 35%" }], variants: [], stockStatus: "in-stock", isNew: true, isFeatured: true },
  { id: "p11", slug: "kabelka-perla", name: "Kabelka Perla", description: "Menšia pevná kabelka s hodvábnou šatkou.", price: 68, salePrice: 54, category: "doplnky", images: [{ src: images.creamBag, alt: "Krémová kabelka Perla" }], variants: [], stockStatus: "low-stock", isNew: true, isFeatured: true },
  { id: "p12", slug: "hodvabna-satka-terra", name: "Hodvábna šatka Terra", description: "Jemná štvorcová šatka v krémových a terakotových tónoch.", price: 36, category: "doplnky", images: [{ src: images.scarf, alt: "Krémová hodvábna šatka Terra", position: "20% 75%" }], variants: [], stockStatus: "in-stock", isNew: false, isFeatured: false },
  { id: "p13", slug: "nausnice-goccia", name: "Náušnice Goccia", description: "Malé lesklé náušnice s oblým tvarom.", price: 28, salePrice: 19, category: "doplnky", images: [{ src: images.earrings, alt: "Zlaté náušnice Goccia", position: "82% 76%" }], variants: [], stockStatus: "in-stock", isNew: false, isFeatured: false },
  { id: "p14", slug: "naramok-linea", name: "Náramok Linea", description: "Tenký pevný náramok v zlatom tóne.", price: 32, category: "doplnky", images: [{ src: images.bracelet, alt: "Tenký zlatý náramok Linea", position: "62% 78%" }], variants: [], stockStatus: "in-stock", isNew: true, isFeatured: false },

  { id: "p15", slug: "parfum-ambra-50-ml", name: "Parfum Ambra 50 ml", description: "Hrejivá vôňa s tónmi ambry, vanilky a santalového dreva.", price: 45, category: "parfemy", images: [{ src: images.perfumeAmbra, alt: "Flakón parfumu Ambra" }], variants: [], stockStatus: "in-stock", isNew: true, isFeatured: true },
  { id: "p16", slug: "parfum-fico-50-ml", name: "Parfum Fico 50 ml", description: "Svieža vôňa figových listov, citrusov a bieleho pižma.", price: 45, category: "parfemy", images: [{ src: images.perfumeFico, alt: "Flakón parfumu Fico", position: "62% 32%" }], variants: [], stockStatus: "in-stock", isNew: false, isFeatured: true },
  { id: "p17", slug: "parfum-rosa-50-ml", name: "Parfum Rosa 50 ml", description: "Jemná kvetinová vôňa ruže, kosatca a čistého pižma.", price: 45, salePrice: 35, category: "parfemy", images: [{ src: images.perfumeRosa, alt: "Flakón parfumu Rosa", position: "30% 75%" }], variants: [], stockStatus: "low-stock", isNew: false, isFeatured: false },
  { id: "p18", slug: "parfum-legno-50-ml", name: "Parfum Legno 50 ml", description: "Drevitá unisex vôňa s cédrom, vetiverom a bergamotom.", price: 48, salePrice: 38, category: "parfemy", images: [{ src: images.perfumeLegno, alt: "Flakón parfumu Legno", position: "78% 75%" }], variants: [], stockStatus: "in-stock", isNew: true, isFeatured: false },
];
