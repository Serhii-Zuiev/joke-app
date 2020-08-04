import styled from "styled-components";

export const StyledJokesContainer = styled.section`
  padding-top: 40px;

  .categorySelect {
    height: 34px;
    width: 92px;
    margin-top: 10px;
    text-align: center;
    border: 1px solid #333;
    font-size: 18px;
    color: #333;
    border-radius: 4px;
    padding: 4px;
  }
`;

export const StyledJokesHeading = styled.h2`
  font-size: 20px;
  color: #333;
  padding: 12px 0;
  letter-spacing: 0.3px;
`;

export const StyledForm = styled.form`
  width: 230px;
  margin: 0 auto;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .jokesAmmountInput {
    height: 34px;
    width: 70px;
    text-align: center;
    border: 1px solid #333;
    font-size: 18px;
    color: #333;
    border-radius: 4px;
    padding: 4px;
  }
  .loadMoreBtn {
    height: 34px;
    width: 120px;
    border: 1px solid #333;
    font-size: 18px;
    color: #333;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: tomato;
      border: 1px solid tomato;
    }
  }
`;
