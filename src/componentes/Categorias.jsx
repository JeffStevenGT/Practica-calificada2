export default function Categorias({ categorias, activa, onChange }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6 justify-center px-45">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => onChange(categoria)}
          className={`px-2 rounded-sm capitalize cursor-pointer bg-[#041d33] hover:bg-[#08375f] text-white transition`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
