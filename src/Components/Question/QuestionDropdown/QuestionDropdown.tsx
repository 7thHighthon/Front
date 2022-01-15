import { useState } from "react";
import {
  AnswerBox,
  AnswerText,
  QuestionDropdownArrow,
  QuestionDropdownBox,
  QuestionNumber,
  QuestionText,
  QuetionWrapper,
} from "./QuestionDropdown.style";
import QuestionArrow from "../../../asset/Img/QuestionArrow.svg";

interface IQuestionDropdown {
  number: string;
  question: string;
  answer: string;
}

const QuestionDropdown: React.FC<IQuestionDropdown> = ({
  number,
  question,
  answer,
}) => {
  const [fold, setFold] = useState(true);

  return (
    <QuetionWrapper>
      <QuestionDropdownBox fold={fold} onClick={() => setFold(!fold)}>
        <QuestionNumber>{number}.</QuestionNumber>
        <QuestionText>{question}</QuestionText>
        <QuestionDropdownArrow fold={fold} src={QuestionArrow} />
      </QuestionDropdownBox>
      {!fold && (
        <AnswerBox>
          <AnswerText>{answer}</AnswerText>
        </AnswerBox>
      )}
    </QuetionWrapper>
  );
};

export default QuestionDropdown;
