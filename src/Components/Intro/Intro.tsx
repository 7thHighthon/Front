import React from "react";
import {
  IntroBox,
  IntroItemWrap,
  IntroSubTitle,
  IntroTitle,
} from "./Intro.style";
import * as CONST from "./constant/index";
import IntroItem from "./IntroItem";

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
    </IntroBox>
  );
};

export default Intro;
