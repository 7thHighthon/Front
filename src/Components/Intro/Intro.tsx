import React from "react";
import {
  IntroBox,
  IntroFBButton,
  IntroFBButtonImg,
  IntroItemWrap,
  IntroSubTitle,
  IntroTitle,
} from "./Intro.style";
import * as CONST from "./constant/index";
import IntroItem from "./IntroItem";
import BlackFaceBook from "../../asset/Img/blackfacebook.svg";

const Intro: React.FC = () => {
  return (
    <IntroBox>
      <IntroTitle>INTRODUCTION</IntroTitle>
      <IntroSubTitle>Highthon</IntroSubTitle>
      <IntroItemWrap>
        {CONST.IntroItemList.map((item) => {
          return <IntroItem {...item} />;
        })}
      </IntroItemWrap>
      <IntroFBButton>
        <IntroFBButtonImg src={BlackFaceBook} />
      </IntroFBButton>
    </IntroBox>
  );
};

export default Intro;
