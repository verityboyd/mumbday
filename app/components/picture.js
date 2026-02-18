import Image from "next/image";

export default function Picture({ src, alt, caption }) {
  return (
    <section>
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="border-2 border-b-blue-100"
      />
      <p>{caption}</p>
    </section>
  );
}
