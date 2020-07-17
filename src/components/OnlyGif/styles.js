import styled from "@emotion/styled";
import { bps } from "../../styles/index";

export const OnlyGifComponent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const GifInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  align-items: center;
  flex-direction: column;
  background-color: var(--brand-color_2);
  border-radius: 20px;
  border: 4px solid var(--theme-body-txt);
  width: 60%;
  -webkit-box-shadow: 0px 0px 61px 45px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 61px 45px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 61px 45px rgba(0, 0, 0, 0.75);

  ${bps.extraSmallMobile} {
    width: 100%;
  }
`;

export const GifTitle = styled.h3`
  background-color: var(--brand-color_5);
  width: 100%;
  padding: 10px 0px;
  margin-bottom: 12%;
`;

export const GifVideo = styled.video`
  width: 50%;
  object-fit: cover;
  -webkit-box-shadow: 0px 0px 61px 45px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 61px 45px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 61px 45px rgba(0, 0, 0, 0.75);
`;

export const GifDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const GifSpan = styled.span`
  padding-top: 5px;
`;

export const GifButtons = styled.div`
  display: flex;
  padding: 10px;
`;
