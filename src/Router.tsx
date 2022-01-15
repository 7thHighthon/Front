import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Hero from "./Components/Hero";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Hero} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
