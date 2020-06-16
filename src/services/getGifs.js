const api_key = "vhMurxNjlCKesQlp88kAZIczkQZIahdU";

export default function getGifs({ keyword } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=50&offset=0&rating=G&lang=en`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = image.images.downsized_medium;
          return { title, id, url };
        });
        return gifs;
      }
    });
}
