import {
  HeroBox,
  HeroImg,
  HeroSubTitle,
  HeroTextWrap,
  HeroTitle,
} from "./Hero.style";
import MainBanner from "../../asset/Img/MainBanner.png";
import Intro from "../Intro";
import History from "../History";
import Question from "../Question";

const Hero: React.FC = () => {
  return (
    <>
      <HeroBox>
        <HeroImg src={MainBanner} />
        <HeroTextWrap>
          <HeroTitle>7th Highthon</HeroTitle>
          <HeroSubTitle>FLY High! 청소년을 위한 해커톤</HeroSubTitle>
        </HeroTextWrap>
      </HeroBox>
      <Intro />
      <History />
      <Question />
    </>
  );
};

export default Hero;
