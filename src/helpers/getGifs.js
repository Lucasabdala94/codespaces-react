export const getGift = async (categorias)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=10&api_key=F2Pe2JgAyBjt7Dc3Z7ab8L9gATmvcl7g`;
    const resp= await fetch(url)
    const {data}= await resp.json()
    
    const gifs = data.map( img =>{
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    return gifs;
  }
