const api_key = "vhMurxNjlCKesQlp88kAZIczkQZIahdU";


const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id, } = image
      const { mp4 } = images.looping    
      return { title, id, mp4 }
    })
    return gifs
  }
  return []
}

export default  function  getGifs({
  keyword = "morty",
  rating = "g",
  limit = 15,
  page = 0,
  lang = "es"
} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}