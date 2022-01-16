import React from "react";
import * as S from "./style";
import banner from "../../../asset/Img/09banner.png";
import logo from "../../../asset/Img/09logo.png";

const VoteDetail: React.FC = () => {
  return (
    <S.Wrapper>
      <S.HeadDiv>
        <S.TitleDiv>
          <S.VoteSubTitle>7th Highthon</S.VoteSubTitle>
          <S.VoteTitle>작품명</S.VoteTitle>
        </S.TitleDiv>
        <S.UserDiv></S.UserDiv>
      </S.HeadDiv>
      <S.HR />
      <S.MainDiv>
        <S.MainImg src={banner} alt="" />
        <S.MainText>
          현재 대덕소프트웨어마이스터고에 재학하며 기숙사 생활을 해 필요한
          생필품을 구매하는 경우가 많은데, 이때 최소주문금액을 맞추지 못하거나,
          필요한 물품을 대용량으로 밖에 판매하지 않아 곤란한 경우가 종종 생긴다.
          그래서 이런 문제를 해결하고자 공동구매라는 키워드를 떠올렸다. 그리고
          공동구매뿐만 아니라 기숙사 안에서 필요가 없어진 물건을 기부하는
          시스템이 있으면 유용하게 사용될 것이라는 생각이 들어 공동구매와 기부를
          담은 사이트를 제작하게 되었다.
        </S.MainText>
        <S.MainLogo src={logo} alt="" />
      </S.MainDiv>
    </S.Wrapper>
  );
};

export default VoteDetail;
