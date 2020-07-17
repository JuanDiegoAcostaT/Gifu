import React from "react";
import {
  GifButtons,
  OnlyGifComponent,
  GifDetails,
  GifInfo,
  GifSpan,
  GifVideo,
  GifTitle
} from "./styles";
import Fav from "../Fav/index";

export default function OnlyGif({
  title,
  id,
  rating,
  bitly_gif_url,
  import_datetime,
  slug,
  mp4,
}) {
  return (
    <OnlyGifComponent key={id}>
      <GifInfo>
        <GifTitle>{title}</GifTitle>
        <GifVideo
          autoPlay
          loop
          muted
          playsInline
          src={mp4}
          loading="lazy"
          type="video/mp4"
        />
        <GifDetails>
          <GifSpan>{rating}</GifSpan>
          <GifSpan>{id}</GifSpan>
          <GifSpan>{bitly_gif_url}</GifSpan>
          <GifSpan>{import_datetime}</GifSpan>
          <GifSpan>{slug}</GifSpan>
        </GifDetails>
        <GifButtons>
          <Fav id={id}></Fav>
          <button style={{marginLeft: "20px" }} >Compartir</button>
        </GifButtons>
      </GifInfo>
    </OnlyGifComponent>
  );
}
