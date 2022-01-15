import styled from "styled-components";

export const HistoryBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: black;
  position: relative;
  padding: 128px 140px;
  box-sizing: border-box;
  flex-direction: column;
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
