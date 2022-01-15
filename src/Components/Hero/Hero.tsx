import {
  HeroBox,
  HeroDownArrow,
  HeroFBButton,
  HeroFBButtonImg,
  HeroImg,
  HeroSubTitle,
  HeroTextWrap,
  HeroTitle,
} from "./Hero.style";
import MainBanner from "../../asset/Img/MainBanner.png";
import WhiteFaceBook from "../../asset/Img/whitefacebook.svg";
import HeroArrow from "../../asset/Img/mainarrow.svg";

const Hero: React.FC = () => {
  return (
    <HeroBox>
      <HeroImg src={MainBanner} />
      <HeroTextWrap>
        <HeroTitle>7th Highthon</HeroTitle>
        <HeroSubTitle>FLY High! 청소년을 위한 해커톤</HeroSubTitle>
      </HeroTextWrap>
      <HeroDownArrow src={HeroArrow} />
      <HeroFBButton>
        <HeroFBButtonImg src={WhiteFaceBook} />
      </HeroFBButton>
    </HeroBox>
  );
};

export default Hero;
