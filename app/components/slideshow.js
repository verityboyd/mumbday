import Picture from "./picture";
import NextButton from "./nextButton";

export default function Slideshow({ picture, onNext }) {
  const { src, alt, caption } = picture; //destructuring
  return (
    <div className="pt-10 flex flex-col items-center">
      <Picture src={src} alt={alt} />
      <p className="text-xl m-5">{caption}</p>
      <NextButton onClick={onNext} />
    </div>
  );
}
