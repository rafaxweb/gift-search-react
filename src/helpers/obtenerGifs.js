export const obtenerGifs = async(busqueda) => {

    const apiKey = 'DWggbP9oRsJCrIXlAW0XQaxgupQUqxEw'

    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=10`)

    const {data} = await respuesta.json()

    const gifsObjects = data.map( (searchResult) => {

        // Objeto de imagen
        const objetoImagen = {
            id: searchResult.id,
            title: searchResult.title,
            url: searchResult.images.downsized_medium.url,
        }

        return objetoImagen
    })

    return gifsObjects;
}