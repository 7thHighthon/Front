import styled from "styled-components";

export const IntroItemBox = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  margin: 0px 110px;

  &:first-child {
    margin: 0px;
    margin-left: auto;
  }
  &:last-child {
    margin: 0px;
    margin-right: auto;
  }
`;

export const IntroItemImgWrap = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const IntroItemImg = styled.img`
  width: 200px;
  margin: 0px auto;
  object-fit: scale-down;
`;

export const IntroItemTitle = styled.h1`
  font-size: 28px;
  margin-top: 40px;
  margin-bottom: 16px;
  color: black;
  text-align: center;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
`;

export const IntroItemDesc = styled.p`
  font-size: 24px;
  color: black;
  word-break: keep-all;
  text-align: center;
  font-weight: midium;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 30px;
`;
