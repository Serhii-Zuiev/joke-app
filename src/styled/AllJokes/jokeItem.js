import styled from "styled-components";

export const StyledCardContainer = styled.div`
  width: 300px;
  min-height: 200px;

  .cardBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
  }

  .JokeCategoryWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .JokeCategory {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  }
`;
