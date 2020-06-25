import React from "react";
import { Link } from "@reach/router";
import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <>
      <Helmet>
        <title>404 Error</title>
        <meta name="description" content="Error 404" />
      </Helmet>
      <div className="Error">
        <h2>Opps....</h2>
        <h3>Something Was Wrong, please get back to home</h3>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
