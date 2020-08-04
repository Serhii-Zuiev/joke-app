import styled from "styled-components";
import { device } from "./globalStyles";

export const StyledAppContainer = styled.div`
  background-color: #eee;

  .appWrapper {
    width: 300px;
    margin: 0 auto;

    @media ${device.tablet} {
      width: 640px;
    }
    @media ${device.laptop} {
      width: 920px;
    }
    @media ${device.laptopL} {
      width: 1300px;
    }
  }
`;

export const StyledHeader = styled.header`

`;

export const StyledAppHeading = styled.h1`
  height: 70px;
  font-size: 26px;
  color: #333;
  margin-bottom: 0;
  padding: 16px 0;
  letter-spacing: 1px;
  text-align: center;
  border-bottom: 2px solid #777;
`;
