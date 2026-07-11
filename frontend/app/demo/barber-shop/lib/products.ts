export type ProductIconId =
  | "beard-oil"
  | "purifying-shampoo"
  | "styling-wax"
  | "artisan-soap";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  tag?: string;
  iconId: ProductIconId;
};

export const products: Product[] = [
  {
    id: "beard-oil",
    name: "Aceite & Acondicionador de Barba",
    subtitle: "Jabones y aceites artesanales · Fórmula nutritiva",
    price: 34,
    iconId: "beard-oil",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: "purifying-shampoo",
    name: "Champú Purificante Luxury",
    subtitle: "Hair care de alta gama · Cuero cabelludo equilibrado",
    price: 28,
    iconId: "purifying-shampoo",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80&auto=format&fit=crop",
    tag: "Nuevo",
  },
  {
    id: "styling-wax",
    name: "Cera & Pomada de Styling",
    subtitle: "Acabado mate o satinado · Fijación exclusiva",
    price: 26,
    iconId: "styling-wax",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "artisan-soap",
    name: "Jabón Artesanal Grooming",
    subtitle: "Limpieza profunda · Ingredientes naturales",
    price: 18,
    iconId: "artisan-soap",
    image:
      "https://images.unsplash.com/photo-1608245443805-7b0d0b8a3b1e?w=600&q=80&auto=format&fit=crop",
  },
];

export function formatPrice(eur: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eur);
}
