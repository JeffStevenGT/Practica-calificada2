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
          className="flex-grow p-2 border text-xs border-gray-300 rounded-l focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#041d33] text-white p-2 rounded-r hover:bg-[#08375f] transition cursor-pointer"
        >
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
}
