import { galleryItems } from "../lib/gallery";
import { Card } from "./ui/card";

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id}>
          <Card className="group overflow-hidden p-0">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 transition group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-white/70">{item.style}</p>
              </div>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
