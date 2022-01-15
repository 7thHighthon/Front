import IntroItem1 from "../../../asset/Img/IntroItem1.svg";
import IntroItem2 from "../../../asset/Img/IntroItem2.svg";
import IntroItem3 from "../../../asset/Img/IntroItem3.svg";

interface IIntroItemList {
  img: string;
  title: string;
  desc: string;
}

export const IntroItemList: IIntroItemList[] = [
  {
    img: IntroItem1,
    title: "하이톤이란?",
    desc: "하이톤은 학생들끼리 운영 및 기획하고 참가해서 서로에 대해 알아가며 모든 참가자들이 즐길 수 있는 해커톤 행사입니다.",
  },
  {
    img: IntroItem2,
    title: "일정",
    desc: "12월 20일부터 12월 31일까지 신청을 받으며, 1월 15일 13:00부터 1월 16일 13:00까지 진행되는 무박 2일 해커톤 입니다.",
  },
  {
    img: IntroItem3,
    title: "모집인원",
    desc: "개발자 60명 + 디자이너 20명으로 4인 1팀(개발자 3, 디자이너 1), 총 20팀으로 구성되어 있습니다.",
  },
];
