export default function NextButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 border-2 rounded bg-white hover:bg-blue-300"
    >
      Next
    </button>
  );
}
