import {
  QuestionBox,
  QuestionFBButton,
  QuestionFBButtonImg,
  QuestionItemWrap,
  QuestionLine,
  QuestionSubTitle,
  QuetionTitle,
} from "./Question.style";
import BlackFaceBook from "../../asset/Img/blackfacebook.svg";
import * as CONST from "./constant/index";
import QuestionDropdown from "./QuestionDropdown";

const Question: React.FC = () => {
  return (
    <QuestionBox>
      <QuestionSubTitle>자주하는 질문</QuestionSubTitle>
      <QuetionTitle>Q&A</QuetionTitle>
      <QuestionLine />
      <QuestionItemWrap>
        {CONST.QuestionList.map((item) => {
          return <QuestionDropdown {...item} />;
        })}
      </QuestionItemWrap>
      <QuestionFBButton>
        <QuestionFBButtonImg src={BlackFaceBook} />
      </QuestionFBButton>
    </QuestionBox>
  );
};
export default Question;
