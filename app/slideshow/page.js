"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Slideshow from "../components/slideshow";
import pictures from "../data/pictures.json";

export default function Page() {
  const [currentPic, setCurrentPic] = useState(0);
  const router = useRouter();

  function next() {
    if (currentPic === pictures.length - 1) {
      router.push("/gallery");
      return;
    } else {
      setCurrentPic(currentPic + 1);
    }
  }
  return (
    <main className="flex flex-col items-center bg-blue-100 min-h-screen">
      <div>
        <Slideshow picture={pictures[currentPic]} onNext={next} />
      </div>
    </main>
  );
}
