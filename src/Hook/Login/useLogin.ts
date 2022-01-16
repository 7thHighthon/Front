import { useHistory } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { postLoginData } from "../../API/Login/Login.api";
import { LoginData, LoginStatus } from "../../Store/LoginAtom";
import { UserNameInfo } from "../../Store/UserInfo";

const useLogin = () => {
  const [loginData, setLoginData] = useRecoilState(LoginData);
  const [isLogin, setIsLogin] = useRecoilState(LoginStatus);
  const [userName, setUserName] = useRecoilState(UserNameInfo);
  const resetLoginData = useResetRecoilState(LoginData);
  const history = useHistory();

  const onClickLogin = async () => {
    if (loginData.email === "") {
      window.alert("이메일을 적어주세요");
      return;
    }
    if (loginData.password === "") {
      window.alert("비밀번호를 적어주세요.");
      return;
    }

    const res = await postLoginData(loginData);
    const {
      status,
      data: {
        msg,
        success,
        data: { accessToken, name },
      },
    } = res;

    if (status === 200) {
      window.alert(msg);
      if (success) {
        localStorage.setItem("access-token", accessToken);
        setUserName(name);
        setIsLogin(true);
        history.push("/");
        resetLoginData();
        return;
      }
      window.location.reload();
    }
  };

  return { onClickLogin };
};

export default useLogin;
