import React from "react";
import Fav from "../Fav/index";
import {
  GifButtons,
  GifComponent,
  GifLink,
  GifTitle,
  GifVideo,
} from "./styles";

function Gif({ title, mp4, id, index }) {
  return (
    <GifComponent index={index}>
      <GifButtons>
        <Fav id={id}></Fav>
      </GifButtons>
      <GifLink to={`/gif/${id}`}>
        <GifTitle data-comp="litem">{title}</GifTitle>
        <GifVideo
          autoPlay
          loop
          muted
          playsInline
          src={mp4}
          loading="lazy"
          type="video/mp4"
        />
      </GifLink>
    </GifComponent>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id == nextProps.id;
});
