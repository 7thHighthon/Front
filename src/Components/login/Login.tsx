import React from "react";
import * as S from "./style";
import LoginImg from "../../asset/Img/loginpage.svg";
import WhiteFaceBook from "../../asset/Img/whitefacebook.svg";

const Login: React.FC = () => {
  return (
    <>
      <S.Wrapper>
        <S.Div>
          <S.FaceBookDiv>
            <S.FaceBookImg src={WhiteFaceBook} />
          </S.FaceBookDiv>
          <S.LoginSubTitle>7th Highthon</S.LoginSubTitle>
          <S.LoginTitle>Login</S.LoginTitle>
          <S.TextSubmit
            type="text"
            placeholder="이메일을 입력해주세요"
            margin="0 0 24px 0"
          />
          <S.TextSubmit
            type="text"
            placeholder="비밀번호를 입력해주세요"
            margin=" 0 0 80px 0"
          />
          <S.Submit type="submit" value="로그인" />
          <S.TextDiv>
            <S.SignUpText1>계정이 없으신가요?</S.SignUpText1>
            <S.SignUpText>
              <strong>회원가입 하기</strong>
            </S.SignUpText>
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
          <S.LoginImg src={LoginImg} alt="" />
        </S.ImgDiv>
      </S.Wrapper>
    </>
  );
};

export default Login;
