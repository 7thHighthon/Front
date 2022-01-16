import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import HistoryDetail from "./Components/historyForm/historydetail/HistoryDetail";
import VoteDetail from "./Components/voteForm/votedetail/VoteDetail";
import * as P from "./Page/index";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={P.Main} />
        <Route path="/login" component={P.Login} />
        <Route path="/signup" component={P.SignUp} />
        <Route path="/submit" component={P.Submit} />
        <Route path="/history" component={P.History} />
        <Route path="/historypost" component={HistoryDetail} />
        <Route path="/vote" component={P.Vote} />
        <Route path="/votepost" component={VoteDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
