"use client";
import Picture from "./components/picture";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();

  function goToSlides() {
    router.push("/slideshow");
  }
  return (
    <main className="bg-gradient-to-t from-blue-200 to-sky-50 flex flex-col gap-2 items-center py-2">
      <Confetti />
      <h1 className="text-3xl font-extrabold text-blue-800 m-2">
        Happy birthday, Mum!
      </h1>
      <Picture src="/baby.jpeg" alt="Mum holding a photo of her as a baby" />
      <h2 className="text-xl font-medium text-sky-700">63 glorious years</h2>
      <button
        onClick={goToSlides}
        className="border-b-sky-500 rounded m-2 px-2 py-1 text-xl font-semibold text-blue-900 bg-sky-100 hover:bg-sky-500"
      >
        Click me!
      </button>
    </main>
  );
}
