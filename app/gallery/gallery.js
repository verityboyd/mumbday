"use client";
import { useState } from "react";
import pictures from "../data/pictures.json";
import Picture from "../components/picture";

export default function Gallery() {
  const [selected, setSelected] = useState();

  return (
    <section>
      <h1 className="p-5 text-4xl flex justify-center">
        Mum&apos;s Birthday Gallery
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {pictures.map((pic) => (
          <Picture key={pic.id} {...pic} />
        ))}
      </div>
    </section>
  );
}
