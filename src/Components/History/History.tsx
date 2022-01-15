import React from "react";
import {
  HistoryBox,
  HistoryFBButton,
  HistoryFBButtonImg,
  HistoryLeftButton,
  HistoryLeftText,
  HistoryLeftWrap,
  HistoryRightImg,
  HistoryRightWrap,
  HistorySubTitle,
  HistoryTitle,
} from "./History.style";
import WhiteFaceBook from "../../asset/Img/whitefacebook.svg";
import HistoryMain from "../../asset/Img/HistoryMain.png";
import { openFaceBook } from "../../util/openFaceBook";

const History: React.FC = () => {
  return (
    <HistoryBox>
      <HistoryLeftWrap>
        <HistorySubTitle>2017 ~ 2022</HistorySubTitle>
        <HistoryTitle>History</HistoryTitle>
        <HistoryLeftText>
          하이톤의 역사는 2017년부터 계속되어왔습니다.
          <br />
          현재까지의 여러 프로젝트를 만나보세요.
        </HistoryLeftText>
        <HistoryLeftButton>페이지 이동</HistoryLeftButton>
      </HistoryLeftWrap>
      <HistoryRightWrap>
        <HistoryRightImg src={HistoryMain} />
      </HistoryRightWrap>
      <HistoryFBButton>
        <HistoryFBButtonImg
          src={WhiteFaceBook}
          onClick={() => openFaceBook()}
        />
      </HistoryFBButton>
    </HistoryBox>
  );
};

export default History;
