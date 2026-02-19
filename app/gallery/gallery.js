"use client";
import { useState } from "react";
import pictures from "../data/pictures.json";
import GalleryItem from "../components/GalleryItem";

export default function Gallery() {
  const [selected, setSelected] = useState();

  return (
    <section>
      <h1 className="p-5 font-bold text-4xl flex justify-center">
        Mum&apos;s Birthday Gallery
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {pictures.map((pic) => (
          <GalleryItem key={pic.id} {...pic} />
        ))}
      </div>
    </section>
  );
}
