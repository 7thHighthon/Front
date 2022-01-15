import styled from "styled-components";

export const SubmitBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: black;
  position: relative;
  padding: 128px 140px;
  box-sizing: border-box;
  flex-direction: column;
`;

export const SubmitTitle = styled.h1`
  font-size: 100px;
  color: white;
  text-align: start;
  font-weight: bold;
`;

export const SubmitSubTitle = styled.h2`
  font-size: 40px;
  color: #227cff;
  font-weight: bold;
  text-align: start;
  margin-bottom: 16px;
`;

export const SubmitItemWrap = styled.div`
  display: flex;
  height: 100%;
  margin-top: 36px;
`;

export const SubmitLeftWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubmitLeftText = styled.p`
  font-size: 36px;
  color: white;
  line-height: 54px;
  margin-top: 160px;
  strong {
    color: #227cff;
  }
`;

export const SubmitLeftButton = styled.button`
  width: 262px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  font-weight: bold;
  border: 0px;
  outline: none;
  cursor: pointer;
  background-color: #227cff;
  margin-top: 60px;
  margin-bottom: auto;
`;

export const SubmitRightWrap = styled.div`
  min-width: 758px;
  height: 100%;
`;

export const SubmitRightImg = styled.img`
  width: 100%;
  margin-top: auto;
`;

export const SubmitFBButton = styled.button`
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

export const SubmitFBButtonImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`;
