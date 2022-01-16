import styled, { keyframes } from "styled-components";

export const AdminDetailBox = styled.div`
  position: absolute;
  width: 1640px;
  height: 600px;
  border-left: 12px solid #227cff;
  background-color: #f3f3f3;
  display: flex;
  box-sizing: border-box;
  padding: 36px;
  padding-right: 48px;
  padding-top: 60px;
  left: 50%;
  transform: translate(-50%);
  top: 33%;
  column-gap: 133px;
`;

export const AdminDetailWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 133px;
  position: relative;
`;

export const AdminTextWrapColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const AdminTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminTextTitle = styled.h1`
  font-size: 24px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const AdminText = styled.p`
  font-size: 24px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  margin-top: 20px;
  max-width: 370px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 30px;
`;

export const AdminButtonWrap = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: auto;
`;

export const AdminBackButton = styled.button`
  width: 168px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bfbfbf;
  border: 0px;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: auto;
  margin-left: auto;
  border-radius: 10px;
  color: white;
  font-size: 22px;
`;

export const AdminCompleteButton = styled.button`
  width: 168px;
  height: 60px;
  background-color: #227cff;
  border: 0px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: auto;
  margin-left: 12px;
  font-weight: bold;
  border-radius: 10px;
`;

const loaderSpin = keyframes`
     to {
    -webkit-transform: rotate(360deg);
  }
`;

export const AdminDetailLoader = styled.div`
  width: 160px;
  height: 160px;
  border: 10px solid #227cff;
  border-radius: 50%;
  border-top-color: #fff;
  border-radius: 100px;
  margin-left: 10px;
  animation: ${loaderSpin} 1s ease-in-out infinite;
  -webkit-animation: ${loaderSpin} 1s ease-in-out infinite;
  margin: auto;
`;
