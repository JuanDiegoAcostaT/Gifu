
const api_key = "vhMurxNjlCKesQlp88kAZIczkQZIahdU";

const fromApiResponseToGifs = apiResponse => {
  const {data} = apiResponse
  const {images, title, id, rating, bitly_gif_url,import_datetime, slug } = data
  const { mp4 } = images.looping
  return { title, id, mp4, rating, bitly_gif_url,import_datetime, slug }        
}


export default function getSingleGif ({ id }) {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

