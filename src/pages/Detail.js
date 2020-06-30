import React from "react";
import useSingleGif from "../hooks/useSingleGif";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import OnlyGif from "../components/OnlyGif/OnlyGif";
/* import useSeo from '../hooks/useSeo' */
import { redirectTo } from "@reach/router";
import { Helmet } from "react-helmet";

export default function Detail({ id }) {
  const { gif, isLoading, isError } = useSingleGif({ id });
  const title = gif ? gif.title : "";
  const rating = gif ? gif.rating : "";
  const import_datetime = gif ? gif.import_datetime : "";
  const bitly_gif_url = gif ? gif.bitly_gif_url : "";
  const slug = gif ? gif.slug : "";
  const mp4 = gif ? gif.mp4 : "";
  const description = `Detail of ${title}`;

  /*  Dejo de usar el hook useSeo porque paso a usar react-helmet */
 /*  useSeo({description : `Detail of ${title}`}) */

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <LoadingSpinner />
      </>
    );
  if (isError) return redirectTo("/404");
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Helmet>
      <OnlyGif
        title={title}
        id={id}
        rating={rating}
        bitly_gif_url={bitly_gif_url}
        import_datetime={import_datetime}
        slug={slug}
        mp4={mp4}
      />
    </>
  );
}
