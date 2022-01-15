import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Hero from "./Components/Hero";
import Login from "./Components/login/Login";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Hero} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
