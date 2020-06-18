const api_key = "vhMurxNjlCKesQlp88kAZIczkQZIahdU";

const apiResponse = (responses) => {
  const {data = [] } = responses
  return data
}


export default function getTrending() {
  const API_URL = `https://api.giphy.com/v1/trending/searches?api_key=${api_key}`


  return fetch(API_URL)
    .then((res) => res.json())
    .then(apiResponse);
}
