import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "./Components/Hero";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Hero} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
