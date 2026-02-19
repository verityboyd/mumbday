export default function GalleryItem({ src, alt }) {
  return (
    <div className="w-100 h-100 overflow-hidden rounded-lg">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
