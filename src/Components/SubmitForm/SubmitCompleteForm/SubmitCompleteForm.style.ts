import styled from "styled-components";

export const SubmitCompleteBox = styled.div`
  width: 100%;
  height: 100%;
  border-left: 12px solid #227cff;
  background-color: #f3f3f3;
  display: flex;
  box-sizing: border-box;
  padding: 36px;
  padding-right: 48px;
`;

export const CompleteTextWrapColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const CompleteTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompleteTextTitle = styled.h1`
  font-size: 24px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const CompleteText = styled.p`
  font-size: 24px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  margin-top: 18px;
`;

export const CompleteButton = styled.button`
  width: 168px;
  height: 60px;
  background-color: #227cff;
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 22px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: auto;
  margin-left: auto;
  font-weight: bold;
  border-radius: 10px;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: #227cff;
  }

  &:hover {
    border: 1px solid #227cff;
    color: #227cff;
    background-color: white;
  }
`;
