import Hero from "../Components/Hero";
import History from "../Components/History";
import Intro from "../Components/Intro";
import Question from "../Components/Question";
import Vote from "../Components/Vote";
import Login from "../Components/login/Login";

const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <History />
      <Question />
      <Vote />
      <Login />
    </>
  );
};

export default MainPage;
