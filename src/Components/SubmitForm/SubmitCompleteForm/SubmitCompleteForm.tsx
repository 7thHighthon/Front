import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SubmitData } from "../../../Store/SubmitAtom";
import {
  CompleteButton,
  CompleteText,
  CompleteTextTitle,
  CompleteTextWrap,
  CompleteTextWrapColumn,
  SubmitCompleteBox,
} from "./SubmitCompleteForm.style";

const SubmitCompleteForm: React.FC = () => {
  const [submit, setSubmit] = useRecoilState(SubmitData);

  return (
    <SubmitCompleteBox>
      <CompleteTextWrapColumn>
        <CompleteTextWrap>
          <CompleteTextTitle>팀 구성원</CompleteTextTitle>
          <CompleteText>{submit.members}</CompleteText>
        </CompleteTextWrap>
        <CompleteTextWrap>
          <CompleteTextTitle>프로젝트명</CompleteTextTitle>
          <CompleteText>{submit.projectName}</CompleteText>
        </CompleteTextWrap>
        <CompleteTextWrap>
          <CompleteTextTitle>Github organization</CompleteTextTitle>
          <CompleteText>
            {submit.githubOrganization === ""
              ? "정보 없음"
              : submit.githubOrganization}
          </CompleteText>
        </CompleteTextWrap>
        <CompleteTextWrap>
          <CompleteTextTitle>시연 영상</CompleteTextTitle>
          <CompleteText>{submit.video?.name}</CompleteText>
        </CompleteTextWrap>
      </CompleteTextWrapColumn>

      <CompleteTextWrapColumn>
        <CompleteTextWrap>
          <CompleteTextTitle>팀명</CompleteTextTitle>
          <CompleteText>{submit.teamName}</CompleteText>
        </CompleteTextWrap>
        <CompleteTextWrap>
          <CompleteTextTitle>홈페이지 URL</CompleteTextTitle>
          <CompleteText>
            {submit.homepageUrl === "" ? "정보 없음" : submit.homepageUrl}
          </CompleteText>
        </CompleteTextWrap>
        <CompleteTextWrap>
          <CompleteTextTitle>PPT</CompleteTextTitle>
          <CompleteText>{submit.ppt?.name}</CompleteText>
        </CompleteTextWrap>
      </CompleteTextWrapColumn>
      <CompleteButton>
        <Link to="/">확인</Link>
      </CompleteButton>
    </SubmitCompleteBox>
  );
};

export default SubmitCompleteForm;
