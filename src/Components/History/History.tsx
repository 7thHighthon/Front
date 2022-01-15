import React from "react";
import {
  HistoryBox,
  HistoryFBButton,
  HistoryFBButtonImg,
  HistorySubTitle,
  HistoryTitle,
} from "./History.style";

const History: React.FC = () => {
  return (
    <HistoryBox>
      <HistorySubTitle>2016 ~ 2022</HistorySubTitle>
      <HistoryTitle>History</HistoryTitle>
      <HistoryFBButton>
        <HistoryFBButtonImg />
      </HistoryFBButton>
    </HistoryBox>
  );
};

export default History;
