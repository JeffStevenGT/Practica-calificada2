import { useState, useEffect } from "react";
import Buscador from "./componentes/Buscador";
import Categorias from "./componentes/Categorias";
import Galeria from "./componentes/Galeria";
import { obtenerFotosPorCategoria, buscarFotos } from "./servicios/apiPexels";
import GitHub from "./componentes/GitHub";
import logo from "./assets/snapshot.png";

function App() {
  const [fotos, setFotos] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState("montañas");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [cargando, setCargando] = useState(false);
  const [titulo, setTitulo] = useState("Imágenes de montañas");

  const categorias = ["montañas", "playas", "aves", "comida"];

  useEffect(() => {
    const cargarFotosIniciales = async () => {
      setCargando(true);
      const fotosIniciales = await obtenerFotosPorCategoria(categoriaActual);
      setFotos(fotosIniciales);
      setTitulo(`Imágenes de ${categoriaActual}`);
      setCargando(false);
    };
    cargarFotosIniciales();
  }, [categoriaActual]);

  const manejarBusqueda = async (termino) => {
    if (!termino) return;
    setTerminoBusqueda(termino);
    setCargando(true);
    const resultados = await buscarFotos(termino);
    setFotos(resultados);
    setTitulo(`Resultados para "${termino}"`);
    setCargando(false);
  };

  const manejarCambioCategoria = (categoria) => {
    setCategoriaActual(categoria);
    setTerminoBusqueda("");
  };

  return (
    <>
      <GitHub />
      <div className="min-h-screen w-screen bg-gray-50 pt-20 flex flex-col items-center relative">
        <img src={logo} alt="logo" className="w-60 mb-10" />
        <main className=" px-64 flex flex-col justify-center">
          <Buscador onBuscar={manejarBusqueda} />
          <Categorias
            categorias={categorias}
            activa={categoriaActual}
            onChange={manejarCambioCategoria}
          />

          <h2 className="text-2xl font-semibold my-4 ">
            {terminoBusqueda
              ? `Resultados para "${terminoBusqueda}"`
              : `Imágenes de ${categoriaActual}`}
          </h2>

          <Galeria fotos={fotos} cargando={cargando} />
        </main>
      </div>
    </>
  );
}

export default App;
