export default function Categorias({ categorias, activa, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => onChange(categoria)}
          className={`px-4 py-2 rounded-full capitalize ${
            activa === categoria
              ? "bg-red-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
          } transition`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
