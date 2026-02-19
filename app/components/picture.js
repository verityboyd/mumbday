import Image from "next/image";

export default function Picture({ src, alt }) {
  return (
    <div className="w-full flex justify-center">
      <img
        src={src}
        alt={alt}
        className="object-contain max-h-[70vh] max-w-full rounded-lg"
      />
    </div>
  );
}
