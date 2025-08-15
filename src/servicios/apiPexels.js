const LLAVE_API = "YDgwODxyCOWa9W8MCygDSaP5I3WCfQd70KAG1osJPKq9iSdlHkAWZvV6";
const FOTOS_POR_PAGINA = 24;

export const obtenerFotosPorCategoria = async (categoria) => {
  try {
    const respuesta = await fetch(
      `https://api.pexels.com/v1/search?query=${categoria}&per_page=${FOTOS_POR_PAGINA}`,
      {
        headers: {
          Authorization: LLAVE_API,
        },
      }
    );
    const datos = await respuesta.json();
    return datos.photos || [];
  } catch (error) {
    console.error("Error al obtener fotos:", error);
    return [];
  }
};

export const buscarFotos = async (termino) => {
  try {
    const respuesta = await fetch(
      `https://api.pexels.com/v1/search?query=${termino}&per_page=${FOTOS_POR_PAGINA}`,
      {
        headers: {
          Authorization: LLAVE_API,
        },
      }
    );
    const datos = await respuesta.json();
    return datos.photos || [];
  } catch (error) {
    console.error("Error al buscar fotos:", error);
    return [];
  }
};
