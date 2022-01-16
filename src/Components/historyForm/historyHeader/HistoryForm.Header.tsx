import React, { useState } from "react";
import * as S from "./style";
import logo from "../../../asset/Img/logo.svg";
import HistoryArrow from "../../../asset/Img/historyarrow.svg";
import HistoryArrow2 from "../../../asset/Img/반대삼각형.svg";

const HistoryFormHeader: React.FC = () => {
  const [Number, setNumber] = useState(5);

  const Field = [
    "주제: 쇼미더코딩",
    "주제: 하이톤 졸업",
    "주제: 월드컵",
    "주제: 아이스",
    "주제: 여행",
    "주제: ???",
  ];

  const Num = ["1st", "2ed", "3th", "4th", "5th", "6th"];

  let TextField = Field[Number];
  let TextNum = Num[Number];

  const ClickUp = () => {
    setNumber(Number + 1);
    console.log(Number);
    if (Number >= 5) {
      alert("아직 없는 기수입니다.");
      setNumber(5);
    }
    if (Number === 6) {
      TextField = Field[5];
      TextNum = Num[5];
    } else if (Number === 5) {
      TextField = Field[4];
      TextNum = Num[4];
    } else if (Number == 4) {
      TextField = Field[3];
      TextNum = Num[3];
    } else if (Number == 3) {
      TextField = Field[2];
      TextNum = Num[2];
    } else if (Number == 2) {
      TextField = Field[1];
      TextNum = Num[1];
    } else {
      TextField = Field[0];
      TextNum = Num[0];
    }
  };

  const ClickDown = () => {
    setNumber(Number - 1);
    console.log(Number);
    if (Number < 1) {
      alert("0 밑으로는 내려 갈 수 없습니다.");
      setNumber(0);
    }
    if (Number == 6) {
      TextField = Field[5];
      TextNum = Num[5];
    } else if (Number == 5) {
      TextField = Field[4];
      TextNum = Num[4];
    } else if (Number == 4) {
      TextField = Field[3];
      TextNum = Num[3];
    } else if (Number == 3) {
      TextField = Field[2];
      TextNum = Num[2];
    } else if (Number == 2) {
      TextField = Field[1];
      TextNum = Num[1];
    } else {
      TextField = Field[0];
      TextNum = Num[0];
    }
  };

  return (
    <S.Wrapper>
      <S.HistoryHeader>
        <S.logoDiv>
          <S.logo src={logo} alt="" />
          <S.logoText>Highthon 2022</S.logoText>
        </S.logoDiv>
        <S.UserNameDiv>
          <S.UserName>추혜연</S.UserName>
          <S.UserName2>님</S.UserName2>
        </S.UserNameDiv>
      </S.HistoryHeader>
      <S.HistoryTitleDiv>
        <S.TitleDiv>
          <S.SubTitle>2017~2022</S.SubTitle>
          <S.Title>History</S.Title>
        </S.TitleDiv>
        <S.smallDiv>
          <S.Filed>{TextField}</S.Filed>
          <S.NumberDiv>
            <S.NumberImg src={HistoryArrow} alt="" onClick={ClickDown} />
            <S.NumberTitle>{TextNum}</S.NumberTitle>
            <S.NumberImg2 src={HistoryArrow2} alt="" onClick={ClickUp} />
          </S.NumberDiv>
        </S.smallDiv>
      </S.HistoryTitleDiv>
    </S.Wrapper>
  );
};

export default HistoryFormHeader;
