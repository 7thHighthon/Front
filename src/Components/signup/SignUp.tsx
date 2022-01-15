import React from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";
import WhiteFaceBook from "../../asset/Img/whitefacebook.svg";
import SignUpImg from "../../asset/Img/signuppage.png";
import { openFaceBook } from "../../util/openFaceBook";

const SignUp: React.FC = () => {
  const history = useHistory();

  const LoginHistoty = () => {
    history.push("/login");
  };

  return (
    <S.Wrapper>
      <S.Div>
        <S.FaceBookDiv>
          <S.FaceBookImg
            src={WhiteFaceBook}
            alt=""
            onClick={() => openFaceBook()}
          />
        </S.FaceBookDiv>
        <S.SignUpSubTitle>7th Highthon</S.SignUpSubTitle>
        <S.SignUpTitle>Sign Up</S.SignUpTitle>
        <S.TextSubmit
          type="text"
          placeholder="이름을 입력해주세요"
          margin="0 0 24px 0"
        />
        <S.TextSubmit
          type="text"
          placeholder="이메일을 입력해주세요"
          margin="0 0 24px 0"
        />
        <S.TextSubmit
          type="text"
          placeholder="비밀번호를 입력해주세요"
          margin="0 0 55px 0"
        />
        <S.Submit type="submit" value="회원가입" />
        <S.TextDiv>
          <S.SignUpText1>이미 계정이 있으신가요?</S.SignUpText1>
          <S.SignUpText onClick={LoginHistoty}>로그인 하기</S.SignUpText>
        </S.TextDiv>
        <S.HighthonDiv>
          <S.HighthonText>Highthon</S.HighthonText>
          <S.Highthon>
            <strong>개발자 · 디자이너</strong>를 꿈꾸는{" "}
            <strong>고등학생</strong>을 위한 <strong>해커톤</strong>
          </S.Highthon>
        </S.HighthonDiv>
      </S.Div>
      <S.ImgDiv>
        <S.LoginImg src={SignUpImg} alt="" />
      </S.ImgDiv>
    </S.Wrapper>
  );
};

export default SignUp;
