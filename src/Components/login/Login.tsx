import React from "react";
import * as S from "./style";
import LoginImg from "../../asset/Img/loginpage.svg";

const Login: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Login>
        <S.InputDiv>
          <S.Title>7th Highthon</S.Title>
          <S.Field>Login</S.Field>
          <S.TextInput
            type="text"
            placeholder="이메일을 입력해주세요"
            margin="0 0 24px 140px"
          />
          <S.TextInput
            type="text"
            placeholder="비밀번호를 입력해주세요"
            margin="0 0 100px 140px"
          />
        </S.InputDiv>
        <S.Submit type="submit" value="로그인" />
        <S.SignUpDiv>
          <S.SignUpText>계정이 없으신가요? </S.SignUpText>
          <S.SignUpLink>회원가입 하기</S.SignUpLink>
        </S.SignUpDiv>
        <S.introTextDiv>
          <S.introTitle>Highthon</S.introTitle>
          <S.introTextBold>개발자 · 디자이너</S.introTextBold>
          <S.introTextReg>를 꿈꾸는</S.introTextReg>
          <S.introTextBold>고등학생</S.introTextBold>
          <S.introTextReg>을 위한</S.introTextReg>
          <S.introTextBold>해커톤</S.introTextBold>
        </S.introTextDiv>
      </S.Login>
      <S.imgDiv>
        <S.LoginImg src={LoginImg} alt="" />
      </S.imgDiv>
    </S.Wrapper>
  );
};

export default Login;
