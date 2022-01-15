import {
  QuestionBox,
  QuestionFBButton,
  QuestionFBButtonImg,
  QuestionSubTitle,
  QuetionTitle,
} from "./Question.style";

const Question: React.FC = () => {
  return (
    <QuestionBox>
      <QuestionSubTitle>자주하는 질문</QuestionSubTitle>
      <QuetionTitle>Q&A</QuetionTitle>
      <QuestionFBButton>
        <QuestionFBButtonImg />
      </QuestionFBButton>
    </QuestionBox>
  );
};
export default Question;
