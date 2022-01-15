import styled, { css } from "styled-components";

export const QuetionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const QuestionDropdownBox = styled.div<{ fold: boolean }>`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.fold
      ? css`
          margin-bottom: 36px;
        `
      : css`
          margin-bottom: 0px;
        `}
`;

export const QuestionDropdownArrow = styled.img<{ fold: boolean }>`
  margin-left: auto;
  width: 24px;
  transform: rotate(${(props) => (props.fold ? "0" : "180")}deg);
  transition: 0.5s;
`;

export const QuestionNumber = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #227cff;
  line-height: 50px;
`;

export const QuestionText = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-left: 12px;
`;

export const AnswerBox = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  position: relative;
  z-index: 1;
  padding: 0px 97px;
  box-sizing: border-box;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const AnswerText = styled.p`
  font-size: 36px;
  line-height: 40px;
  color: black;
  font-weight: bold;
`;
