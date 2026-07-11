import { ikaroImages } from "./images";

export type GalleryItem = {
  id: string;
  title: string;
  style: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "espacio-estaciones",
    title: "Estaciones de trabajo",
    style: "Espacio Ikaro",
    image: ikaroImages.espacio1,
  },
  {
    id: "espacio-salon",
    title: "Salón principal",
    style: "Espacio Ikaro",
    image: ikaroImages.espacio2,
  },
  {
    id: "fade-1",
    title: "Fade texturizado",
    style: "Estilismo",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "classic-1",
    title: "Clásico con raya",
    style: "Estilismo",
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
];
