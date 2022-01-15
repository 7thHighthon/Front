import React from "react";
import * as S from "./index";
import { useHistory } from "react-router-dom";
import logo from "../../asset/Img/logo.svg";

const Header: React.FC = () => {
  const history = useHistory();

  const LoginHistoty = () => {
    history.push("/login");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleDiv>
          <S.Logoimg src={logo} alt="" />
          <S.Title>Highthon 2022</S.Title>
        </S.TitleDiv>
        <S.MenuDiv>
          <S.MenuItem width="88px" margin="0 60px 0 0">
            Highthon
          </S.MenuItem>
          <S.MenuItem width="62px" margin="0 60px 0 0">
            History
          </S.MenuItem>
          <S.MenuItem width="48px" margin="0 60px 0 0">
            Q&A
          </S.MenuItem>
          <S.MenuItem width="46px" margin="0 60px 0 0">
            Vote
          </S.MenuItem>
          <S.MenuItem width="66px" margin="0 60px 0 0">
            Submit
          </S.MenuItem>
          <S.MenuItem onClick={LoginHistoty} width="52px" margin="0 148px 0 0">
            Login
          </S.MenuItem>
        </S.MenuDiv>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
