/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from "react";
import { Helmet } from "react-helmet";
import { css, jsx } from "@emotion/core";
import Button from "../../components/Button/index";

const gifsErrors = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I",
];

export default function Error() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };

  const pageErrorStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const text404 = css`
    font-size: "50px";
    margin: "10px";
  `;

  const image = css({
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  return (
    <>
      <Helmet>
        <title>404 Error</title>
        <meta name="description" content="Error 404" />
      </Helmet>
      <div css={pageErrorStyles}>
        <h1 css={text404}>404</h1>
        <span style={{ margin: "10px" }}>
          Something went wrong, please go back to Home.
        </span>
        <img css={image} src={randomImage()} alt="alt-page-404" />
        <Button href="/">Go Back Home</Button>
      </div>
    </>
  );
}
