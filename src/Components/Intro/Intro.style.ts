import styled from "styled-components";

export const IntroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 128px 140px;
  box-sizing: border-box;
  position: relative;
`;

export const IntroTitle = styled.h1`
  font-size: 40px;
  color: #227cff;
  font-weight: bold;
  text-align: start;
`;

export const IntroSubTitle = styled.h2`
  font-size: 100px;
  color: black;
  text-align: start;
  line-height: 121px;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const IntroItemWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px;
  box-sizing: border-box;
  padding-top: 0px;
`;

export const IntroFBButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
  outline: none;
  border: 0px;
  border-radius: 100px;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  top: 90px;
  right: 30px;
  padding: 0px;
`;

export const IntroFBButtonImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`;
