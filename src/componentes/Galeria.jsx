import TarjetaImagen from "./TarjetaImagen";

export default function Galeria({ fotos, cargando }) {
  if (cargando) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 h-40 animate-pulse rounded"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {fotos.map((foto) => (
        <TarjetaImagen key={foto.id} foto={foto} />
      ))}
    </div>
  );
}
