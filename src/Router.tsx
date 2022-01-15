import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import * as P from "./Page/index";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={P.Main} />
        <Route path="/login" component={P.Login} />
        <Route path="/signup" component={P.SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
