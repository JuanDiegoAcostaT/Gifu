const ENDPOINT = "http://localhost:4000";

export default function login({ username, password }) {

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }

  return (
    fetch( `${ENDPOINT}/login`, requestOptions )
      .then((res) => {
        if (!res.ok) throw new Error("Response is not Ok");
        return res.json();
      })
      .then((res) => {
        const { jwt } = res;
        return jwt;
      })

    )
}
