import {
  QuestionBox,
  QuestionFBButton,
  QuestionFBButtonImg,
  QuestionSubTitle,
  QuetionTitle,
} from "./Question.style";
import BlackFaceBook from "../../asset/Img/blackfacebook.svg";

const Question: React.FC = () => {
  return (
    <QuestionBox>
      <QuestionSubTitle>자주하는 질문</QuestionSubTitle>
      <QuetionTitle>Q&A</QuetionTitle>
      <QuestionFBButton>
        <QuestionFBButtonImg src={BlackFaceBook} />
      </QuestionFBButton>
    </QuestionBox>
  );
};
export default Question;
