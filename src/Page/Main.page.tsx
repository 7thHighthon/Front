import Hero from "../Components/Hero";
import History from "../Components/History";
import Intro from "../Components/Intro";
import Question from "../Components/Question";
import Submit from "../Components/Submit";
import Vote from "../Components/Vote";

const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <History />
      <Question />
      <Submit />
      <Vote />
    </>
  );
};

export default MainPage;
