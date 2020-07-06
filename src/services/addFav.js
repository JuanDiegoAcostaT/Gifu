const ENDPOINT = "http://localhost:3000";

export default function addFav({ id, jwt }) {

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jwt}),
  }

  return (
    fetch( `${ENDPOINT}/favs/${id}`, requestOptions )
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
