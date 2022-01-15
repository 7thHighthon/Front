import styled from "styled-components";

export const VoteBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 128px 140px;
  box-sizing: border-box;
  position: relative;
`;

export const VoteTitle = styled.h1`
  text-align: start;
  font-size: 100px;
  color: black;
  font-weight: bold;
`;

export const VoteSubTitle = styled.h2`
  text-align: start;
  font-size: 40px;
  color: #227cff;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const VoteItemWrap = styled.div`
  display: flex;
  height: 100%;
  margin-top: 36px;
`;

export const VoteLeftWrap = styled.div`
  min-width: 822px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const VoteLeftImg = styled.img`
  width: 100%;
  object-fit: scale-down;
  margin-top: auto;
`;

export const VoteRightWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 137px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const VoteRightText = styled.p`
  font-size: 36px;
  color: black;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 54px;
  strong {
    color: #227cff;
  }
`;

export const VoteRightButton = styled.button`
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
    border: 3px solid #227cff;
    background-color: white;
    color: #227cff;
  }
`;

export const VoteFBButton = styled.button`
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

export const VoteFBButtonImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`;
