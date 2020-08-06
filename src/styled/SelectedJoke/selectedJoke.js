import styled from "styled-components";
import { device } from "../globalStyles";

export const GoBackLinkContainer = styled.div`
  padding-top: 20px;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }

  .goBackLink {
    display: block;
    height: 30px;
  }
`;

export const StyledSelectedJoke = styled.div`
  width: 300px;
  height: calc(100vh - 140px);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  font-weight: 500;
  text-align: center;

  @media ${device.tablet} {
    width: 640px;
  }
  @media ${device.laptop} {
    width: 920px;
  }
  @media ${device.laptopL} {
    width: 1300px;
  }
`;
