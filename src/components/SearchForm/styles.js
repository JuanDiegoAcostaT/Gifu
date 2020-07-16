import styled from "@emotion/styled";
import { bps } from "../../styles/index";

export const Search = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: var(--theme-body-bg);
  margin: 20px 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  ${bps.smallMobiles} {
    padding: 10px;
  }
`;

export const SearchButton = styled.button`
  background: var(--brand-color_3);
  border: 0;
  color: #fff;
  font-size: 16px;
  width: 36%;
  height: 29px;
  cursor: pointer;
`;

export const SearchSelect = styled.select`
  background: var(--brand-color_2);
  border: 0;
  color: #fff;
  font-size: 16px;
  width: 25%;
  margin-left: 3px;
  height: 28px;

  ${bps.smallMobiles} {
    margin-left: 0px;
  }
`;

export const SearchInput = styled.input`
  width: 75%;
  height: 20px;
  font-size: 16px;
  border: none;
  padding: 4px 16px;
`;
