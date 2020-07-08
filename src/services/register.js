const ENDPOINT = "http://localhost:3000";

export default function register({ username, password }) {

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }

  return (
    fetch( `${ENDPOINT}/register`, requestOptions )
      .then((res) => {
        if (!res.ok) throw new Error("Response is not Ok");
        return true
      })

    )
}
