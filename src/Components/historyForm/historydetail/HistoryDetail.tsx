import React from "react";
import * as S from "./style";
import logo from "../../../asset/Img/logo.svg";
import First from "../../../asset/Img/1등.svg";
import NMS from "../../../asset/Img/NMS_Logo.png";

const HistoryDetail: React.FC = () => {
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
          <S.Title>NMS</S.Title>
        </S.TitleDiv>
        <S.smallDiv>
          <S.NumberTitle>6th</S.NumberTitle>
          <S.NumberImg src={First} alt="" />
        </S.smallDiv>
      </S.HistoryTitleDiv>
      <S.Hr />
      <S.Form>
        <S.TextDiv>
          <S.MainImg src={NMS} alt="" />
          <S.MainTextDiv>
            <S.Text1>Notice Management System</S.Text1>
            <S.Text2>
              학생들과 선생님의 보다 더 원활하고
              <br /> 효율적인 소통을 위한 프로젝트
            </S.Text2>
          </S.MainTextDiv>
        </S.TextDiv>
        <S.TextDiv2>
          <S.Text3>
            공지사항이 있을 경우, 이 프로덕트를 통해 외부 대회 또는 컨퍼런스를
            비롯한 <br />
            공지사항을 전달할 수 있도록 하는 것이 중요 목표입니다.
            <br /> 후에는 특정 그룹에 속한 학생들에게 공지사항 알림을 발송하는
            기능을, 그 다음으로는 학생과 선생님의 실시간
            <br /> 면담 기능 등을 추가해 선생님과 학생 간의 의사소통 제약을 줄일
            예정입니다.
          </S.Text3>
        </S.TextDiv2>
      </S.Form>
    </S.Wrapper>
  );
};

export default HistoryDetail;
