import { useState } from "react";

export default function Buscador({ onBuscar }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    onBuscar(terminoBusqueda);
  };

  return (
    <form onSubmit={manejarSubmit} className="mb-6 px-45">
      <div className="flex">
        <input
          type="text"
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
          placeholder="Search..."
          className="flex-grow p-2 border text-xs border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded-r hover:bg-red-600 transition"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
