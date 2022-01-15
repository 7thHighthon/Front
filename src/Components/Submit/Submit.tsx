import {
  SubmitBox,
  SubmitFBButton,
  SubmitFBButtonImg,
  SubmitItemWrap,
  SubmitLeftButton,
  SubmitLeftText,
  SubmitLeftWrap,
  SubmitRightImg,
  SubmitRightWrap,
  SubmitSubTitle,
  SubmitTitle,
} from "./Submit.style";
import SubmitMain from "../../asset/Img/SubmitMain.svg";
import WhiteFaceBook from "../../asset/Img/whitefacebook.svg";
import { openFaceBook } from "../../util/openFaceBook";
import { Link } from "react-router-dom";

const Submit: React.FC = () => {
  return (
    <SubmitBox>
      <SubmitSubTitle>7th Highthon</SubmitSubTitle>
      <SubmitTitle>Submit</SubmitTitle>
      <SubmitItemWrap>
        <SubmitLeftWrap>
          <SubmitLeftText>
            완성된 프로젝트, 발표 자료를 제출해주세요!
          </SubmitLeftText>
          <SubmitLeftButton>
            <Link to="/submit">제출하러가기</Link>
          </SubmitLeftButton>
        </SubmitLeftWrap>
        <SubmitRightWrap>
          <SubmitRightImg src={SubmitMain} />
        </SubmitRightWrap>
      </SubmitItemWrap>
      <SubmitFBButton>
        <SubmitFBButtonImg src={WhiteFaceBook} onClick={() => openFaceBook()} />
      </SubmitFBButton>
    </SubmitBox>
  );
};

export default Submit;
