import { IntroFBButton, IntroFBButtonImg } from "../Intro.style";
import {
  IntroItemBox,
  IntroItemDesc,
  IntroItemImg,
  IntroItemImgWrap,
  IntroItemTitle,
} from "./IntroItem.style";

interface IIntroItemProps {
  img: string;
  title: string;
  desc: string;
}

const IntroItem: React.FC<IIntroItemProps> = ({ img, title, desc }) => {
  return (
    <IntroItemBox>
      <IntroItemImgWrap>
        <IntroItemImg src={img} />
      </IntroItemImgWrap>
      <IntroItemTitle>{title}</IntroItemTitle>
      <IntroItemDesc>{desc}</IntroItemDesc>
      <IntroFBButton>
        <IntroFBButtonImg />
      </IntroFBButton>
    </IntroItemBox>
  );
};

export default IntroItem;
