import React from "react";
import {
  HistoryBox,
  HistoryFBButton,
  HistoryFBButtonImg,
  HistorySubTitle,
  HistoryTitle,
} from "./History.style";
import WhiteFaceBook from "../../asset/Img/whitefacebook.svg";

const History: React.FC = () => {
  return (
    <HistoryBox>
      <HistorySubTitle>2016 ~ 2022</HistorySubTitle>
      <HistoryTitle>History</HistoryTitle>
      <HistoryFBButton>
        <HistoryFBButtonImg src={WhiteFaceBook} />
      </HistoryFBButton>
    </HistoryBox>
  );
};

export default History;
