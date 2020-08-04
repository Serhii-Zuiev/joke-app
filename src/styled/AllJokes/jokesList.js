import styled from "styled-components";
import { device } from "../globalStyles";

export const StyledJokesList = styled.ul`
  padding: 40px 0;

  @media ${device.tablet} {
    width: 640px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media ${device.laptop} {
    width: 920px;
  }
  @media ${device.laptopL} {
    width: 1300px;
  }

  .jokesListItem {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

    @media ${device.tablet} {
      margin-bottom: 40px;
    }
    @media ${device.laptop} {
      margin-bottom: 10px;
    }
    @media ${device.laptopL} {
      margin-bottom: 33px;
    }
  }
`;
