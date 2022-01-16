import React, { useEffect, useState } from "react";
import * as S from "./index";
import { useHistory } from "react-router-dom";
import logo from "../../asset/Img/logo.svg";
import { useRecoilState } from "recoil";
import { LoginStatus } from "../../Store/LoginAtom";
import { AdminStatus, UserNameInfo } from "../../Store/UserInfo";
import { getDecodePayload, getToken } from "../../Lib/getToken";

const Header: React.FC = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useRecoilState(LoginStatus);
  const [userName, setUserName] = useRecoilState(UserNameInfo);
  const [fold, setFold] = useState(true);
  const [isAdmin, setIsAdmin] = useRecoilState(AdminStatus);

  const LoginHistoty = () => {
    history.push("/login");
  };

  const MainHistory = () => {
    history.push("/");
  };

  useEffect(() => {
    if (getToken()) {
      const data: any = getDecodePayload();
      const { auth } = data;
      const grade = auth.slice(5, auth.length);
      if (grade === "ADMIN") {
        setIsAdmin(true);
        return;
      }
    }
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("access-token");
    window.location.reload();
    setIsLogin(false);
    setUserName("");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleDiv>
          <S.Logoimg onClick={MainHistory} src={logo} alt="" />
          <S.Title onClick={MainHistory}>Highthon 2022</S.Title>
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
          {isLogin ? (
            <S.MenuUserItem margin="0 60px 0 0" onClick={() => setFold(!fold)}>
              <strong>{userName}</strong>님
              {!fold && (
                <>
                  <S.MenuDropdownItemBox>
                    <S.MenuDropdownItem onClick={onClickLogout}>
                      로그아웃
                    </S.MenuDropdownItem>
                    {isAdmin && (
                      <S.MenuDropdownItem
                        onClick={() => history.push("/admin")}
                      >
                        제출확인
                      </S.MenuDropdownItem>
                    )}
                  </S.MenuDropdownItemBox>
                </>
              )}
            </S.MenuUserItem>
          ) : (
            <S.MenuItem
              onClick={LoginHistoty}
              width="52px"
              margin="0 148px 0 0"
            >
              Login
            </S.MenuItem>
          )}
        </S.MenuDiv>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
