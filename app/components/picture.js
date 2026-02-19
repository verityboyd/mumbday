import Image from "next/image";

export default function Picture({ src, alt }) {
  return (
    <div className="w-full flex justify-center">
      <img
        src={src}
        alt={alt}
        className="object-contain max-h-[80vh] max-w-full border rounded border-blue-100"
      />
    </div>
  );
}
