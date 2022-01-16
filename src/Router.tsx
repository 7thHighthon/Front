import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import Header from "./Components/header/Header";
import HistoryDetail from "./Components/historyForm/historydetail/HistoryDetail";
import VoteDetail from "./Components/voteForm/votedetail/VoteDetail";
import { getDecodePayload, getToken } from "./Lib/getToken";
import * as P from "./Page/index";
import { LoginStatus } from "./Store/LoginAtom";
import { AdminStatus } from "./Store/UserInfo";

const Router: React.FC = () => {
  const [isLogin, setIsLogin] = useRecoilState(LoginStatus);

  useEffect(() => {
    const Token = getToken();
    setIsLogin(Token ? true : false);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={P.Main} />
        <Route path="/login" component={P.Login} />
        <Route path="/signup" component={P.SignUp} />
        <Route path="/submit" component={P.Submit} />
        <Route
          path={["/admin", "/admin/detail/:detailId"]}
          component={P.Admin}
        />
        <Route path="/history" component={P.History} />
        <Route path="/historypost" component={HistoryDetail} />
        <Route path="/vote" component={P.Vote} />
        <Route path="/votepost" component={VoteDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
