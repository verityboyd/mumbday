import Image from "next/image";
export default function Modal({ pictures, index, next }) {
  const { src, caption } = pictures[index];
  return (
    <section className="fixed inset-0 bg-blue-100/80 flex items-center justify-center z-50">
      <Image src={src} />
    </section>
  );
}
