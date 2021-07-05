export const getGifs = async(category) => { 
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YHyhaeRKkvQw9pcI000HvafvROrr6NeN`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(imagen => {
        return {
            id: imagen.id,
            title: imagen.title,
            url: imagen.images?.downsized_medium.url
        }
    })
    
    return gifs;

}