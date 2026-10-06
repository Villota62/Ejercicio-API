export const solicitar = async (url, id) => {
    // Si la URL ya tiene '?', concatena directamente el id. Si no, agrega '/'.
    let urlFinal = url.includes('?') ? `${url}${id}` : `${url}/${id}`;
    
    console.log(urlFinal);

    let respuesta = await fetch(urlFinal);
    let data = await respuesta.json();
    return data;
}