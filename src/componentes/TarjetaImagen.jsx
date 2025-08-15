export default function TarjetaImagen({ foto }) {
  return (
    <div className="bg-white overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={foto.src.medium}
        alt={foto.alt}
        className="w-full h-36 object-cover"
      />
    </div>
  );
}
