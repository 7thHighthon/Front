import { useHistory } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { postSignupData } from "../../API/Signup/Signup.api";
import { SignupData } from "../../Store/SignupAtom";

const useSignup = () => {
  const [signupInfo, setSignupInfo] = useRecoilState(SignupData);
  const resetSignupInfo = useResetRecoilState(SignupData);
  const history = useHistory();

  const onClickSignup = async () => {
    if (signupInfo.name === "") {
      window.alert("이름을 적어주세요");
      return;
    }
    if (signupInfo.email === "") {
      window.alert("메일을 적어주세요");
      return;
    }
    if (signupInfo.password === "") {
      window.alert("비밀번호를 적어주세요");
      return;
    }

    const res = await postSignupData(signupInfo);

    const {
      status,
      data: { msg, success },
    } = res;

    if (status === 200) {
      window.alert(msg);
      if (success) {
        history.push("/login");
        resetSignupInfo();
        return;
      }
      window.location.reload();
    }
  };

  return { onClickSignup };
};

export default useSignup;
