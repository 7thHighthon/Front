import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import * as P from "./Page/index";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={P.Main} />
        <Route path="/login" component={P.Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
