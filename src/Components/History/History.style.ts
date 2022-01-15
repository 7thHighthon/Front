import styled from "styled-components";

export const HistoryBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: black;
  position: relative;
  padding: 128px 140px;
  padding-bottom: 0px;
  box-sizing: border-box;
`;

export const HistoryLeftWrap = styled.div`
  min-width: 638px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 128px;
  box-sizing: border-box;
`;

export const HistoryLeftText = styled.p`
  font-size: 32px;
  color: white;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 132px;
`;

export const HistoryLeftButton = styled.button`
  width: 262px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  border: 0px;
  outline: none;
  cursor: pointer;
  background-color: #227cff;
  margin-top: 60px;
  &:hover {
    background-color: white;
    color: #227cff;
  }
`;

export const HistoryRightWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HistoryRightImg = styled.img`
  width: 802px;
  object-fit: scale-down;
  margin-left: auto;
  margin-top: auto;
  cursor: pointer;
`;

export const HistoryTitle = styled.h1`
  font-size: 100px;
  text-align: start;
  color: white;
  font-weight: bold;
`;

export const HistorySubTitle = styled.h2`
  font-size: 40px;
  text-align: start;
  color: #227cff;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const HistoryFBButton = styled.button`
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
  background: none;
`;

export const HistoryFBButtonImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`;
