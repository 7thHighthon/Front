import Hero from "../Components/Hero";
import History from "../Components/History";
import Intro from "../Components/Intro";
import Question from "../Components/Question";
import Submit from "../Components/Submit";
import Vote from "../Components/Vote";
import Login from "../Components/login/Login";

const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <History />
      <Question />
      <Submit />
      <Vote />
      <Login />
    </>
  );
};

export default MainPage;
