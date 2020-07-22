const ENDPOINT = "http://localhost:4000";

export default function getFavs({ jwt }) {

  const requestOptions = {
    method: "GET",
    headers: {
        "Authorization" : jwt,
      "Content-Type": "application/json",
    } 
  }

  return (
    fetch(`${ENDPOINT}/favs`, requestOptions )
      .then((res) => {
        if (!res.ok) throw new Error("Response is not Ok");
        return res.json();
      })
      .then((res) => {
        const { favs } = res;
        return favs;
      })

    )
}
