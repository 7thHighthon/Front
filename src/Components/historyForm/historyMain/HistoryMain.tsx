import React from "react";
import HistoryFormHeader from "../historyHeader/HistoryForm.Header";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import FirstCrown from "../../../asset/Img/1등.svg";
import SecondCrown from "../../../asset/Img/2등.svg";
import ThirdCrown from "../../../asset/Img/3등.svg";
import Worlgye from "../../../asset/Img/월계수.svg";
import NMS from "../../../asset/Img/NMS_Logo.png";
import Yaho from "../../../asset/Img/YAHO.png";
import cl from "../../../asset/Img/cl.png";
import GongGu from "../../../asset/Img/09.png";

const HistoryMain: React.FC = () => {
  const history = useHistory();

  const moveHistotyPost = () => {
    history.push("/historypost");
  };

  const PostList = ["4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const MenuList = PostList.map((menu, index) => {
    return (
      <S.BottomDiv>
        <S.BottomNumber style={{ backgroundImage: `url(${Worlgye})` }}>
          {menu}
        </S.BottomNumber>
        <S.BottomImg src={GongGu} alt="" />
        <S.BottomTextDiv>
          <S.BottomText>project-09</S.BottomText>
        </S.BottomTextDiv>
      </S.BottomDiv>
    );
  });

  return (
    <S.Wrapper>
      <HistoryFormHeader />
      <S.Hr />
      <S.CountForm>
        <S.FirstForm>
          <S.FirstHeader>
            <S.FirstCrown src={FirstCrown} alt="" />
            <S.FirstName onClick={moveHistotyPost}>
              NMS(Notice Management System)
            </S.FirstName>
          </S.FirstHeader>
          <S.FirstMain>
            <S.FirstImg src={NMS} alt="" />
            <S.TextDiv>
              <S.FirstText>
                학생들과 선생님의 보다 더 원활하고 <br /> 효율적인 소통을 위한
                프로젝트
              </S.FirstText>
              <S.FirstText2>
                공지사항이 있을 경우, 이 프로덕트를 통해 외부 대회 또는
                컨퍼런스를 비롯한 공지사항을 전달할 수 있도록 하는 것이 중요
                목표입니다.
              </S.FirstText2>
            </S.TextDiv>
          </S.FirstMain>
        </S.FirstForm>
      </S.CountForm>
      <S.middleRank>
        <S.second>
          <S.middleImg src={SecondCrown} alt="" margin="0 0 48px 0" />
          <S.middleLogo
            src={Yaho}
            alt=""
            width="378px"
            height="258px"
            margin="0 0 34px 0"
          />
          <S.middleText>YAHO</S.middleText>
          <S.middleText2>재미있는 랜덤 채팅 앱</S.middleText2>
        </S.second>
        <S.third>
          <S.middleImg src={ThirdCrown} alt="" margin="0 0 24px 0" />
          <S.middleLogo
            src={cl}
            alt=""
            width="322px"
            height="322"
            margin="0 0 0 0"
          />
          <S.middleText>CL</S.middleText>
          <S.middleText2>다양한 사람들의 커뮤니티</S.middleText2>
        </S.third>
      </S.middleRank>
      <S.BottomRank>{MenuList}</S.BottomRank>
      <S.Div />
    </S.Wrapper>
  );
};

export default HistoryMain;
