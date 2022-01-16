import React, { useState } from "react";
import * as S from "./style";
import redHeart from "../../../asset/Img/redheart.svg";
import whiteHeart from "../../../asset/Img/whiteheart.svg";
import GongGu from "../../../asset/Img/09.png";
import { useHistory } from "react-router-dom";

const VotePost: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const history = useHistory();

  const moveVotePost = () => {
    history.push("/votepost");
  };

  const onClickHeart = () => {
    if (!liked) {
      setLiked(true);
      console.log("like");
    } else {
      setLiked(false);
      console.log("Not like");
    }
  };

  return (
    <S.BottomDiv>
      <S.BottomImg src={GongGu} alt="" onClick={moveVotePost} />
      <S.BottomTextDiv>
        <S.BottomText>project-09</S.BottomText>
        <S.Heart
          src={liked ? redHeart : whiteHeart}
          alt=""
          onClick={onClickHeart}
        />
      </S.BottomTextDiv>
    </S.BottomDiv>
  );
};

export default VotePost;
