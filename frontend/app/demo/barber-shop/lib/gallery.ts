export type GalleryItem = {
  id: string;
  title: string;
  style: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "fade-1",
    title: "Fade texturizado",
    style: "Corte",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "classic-1",
    title: "Clásico con raya",
    style: "Corte",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "beard-1",
    title: "Barba esculpida",
    style: "Barba",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "shave-1",
    title: "Afeitado ritual",
    style: "Ritual",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "interior-1",
    title: "Sillón de cuero",
    style: "Espacio",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "tools-1",
    title: "Herramientas de precisión",
    style: "Detalle",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80&auto=format&fit=crop",
  },
];
