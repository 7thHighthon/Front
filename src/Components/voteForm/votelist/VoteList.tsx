import React from "react";
import * as S from "./style";
import VotePost from "./VotePost";

const VoteList: React.FC = () => {
  const PostList = ["4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const MenuList = PostList.map((menu, index) => {
    return <VotePost />;
  });

  return (
    <S.Wrapper>
      <S.HeadDiv>
        <S.TitleDiv>
          <S.VoteSubTitle>7th Highthon</S.VoteSubTitle>
          <S.VoteTitle>Vote</S.VoteTitle>
        </S.TitleDiv>
        <S.UserDiv>
          <S.userstar>*</S.userstar>
          <S.user>1인 1표 제한</S.user>
        </S.UserDiv>
      </S.HeadDiv>
      <S.HR />
      <S.PostList>{MenuList}</S.PostList>
    </S.Wrapper>
  );
};

export default VoteList;
