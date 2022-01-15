import { useRecoilState } from "recoil";
import usePPT from "../../Hook/SubmitForm/usePPT";
import useSubmit from "../../Hook/SubmitForm/useSubmit";
import useVideo from "../../Hook/SubmitForm/useVideo";
import { SubmitData, SubmitStatus } from "../../Store/SubmitAtom";
import SubmitCompleteForm from "./SubmitCompleteForm";
import {
  InputBox,
  InputFileInputLable,
  InputFileInputLableText,
  InputFileInputLableWrap,
  InputTextInput,
  InputTitle,
  InputWrap,
  InputWrapRow,
  SubmitFormBox,
  SubmitFormGuideText,
  SubmitFormGuideTextWrap,
  SubmitFormLine,
  SubmitFormSaveButton,
  SubmitFormSubmitButton,
  SubmitFormSubTitle,
  SubmitFormTitle,
  SubmitFormTitleWrap,
  SubmitLoader,
} from "./SubmitForm.style";

const SubmitForm: React.FC = () => {
  const [submit, setSubmit] = useRecoilState(SubmitData);
  const [isSubmit, setIsSubmit] = useRecoilState(SubmitStatus);

  const { onChangeSelectFileName } = usePPT();
  const { onChangeSelectVideoName } = useVideo();
  const { onClickSubmit, isLoading, isShow } = useSubmit();

  return (
    <SubmitFormBox>
      <SubmitFormSubTitle>7th Highthon</SubmitFormSubTitle>
      <SubmitFormTitleWrap>
        <SubmitFormTitle>Submit</SubmitFormTitle>
        <SubmitFormGuideTextWrap>
          <SubmitFormGuideText>
            {isSubmit ? (
              <strong>제출이 완료되었습니다.</strong>
            ) : (
              <>
                <strong>*</strong>은 필수항목 입니다.
              </>
            )}
          </SubmitFormGuideText>
          {isLoading && <>{isShow && <SubmitLoader />}</>}
        </SubmitFormGuideTextWrap>
      </SubmitFormTitleWrap>
      <SubmitFormLine />
      {isSubmit ? (
        <SubmitCompleteForm />
      ) : (
        <InputBox>
          <InputWrapRow>
            <InputWrap>
              <InputTitle>
                팀 구성원<strong>*</strong>
              </InputTitle>
              <InputTextInput
                placeholder="팀원의 이름을 입력해주세요"
                name="members"
                value={submit.members}
                onChange={(e) =>
                  setSubmit((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </InputWrap>
            <InputWrap>
              <InputTitle>
                팀명<strong>*</strong>
              </InputTitle>
              <InputTextInput
                placeholder="팀명을 입력해주세요"
                name="teamName"
                value={submit.teamName}
                onChange={(e) =>
                  setSubmit((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </InputWrap>
          </InputWrapRow>
          <InputWrapRow>
            <InputWrap>
              <InputTitle>
                프로젝트명<strong>*</strong>
              </InputTitle>
              <InputTextInput
                placeholder="프로젝트 명을 입력해주세요"
                value={submit.projectName}
                name="projectName"
                onChange={(e) =>
                  setSubmit((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </InputWrap>
            <InputWrap>
              <InputTitle>홈페이지 URL</InputTitle>
              <InputTextInput
                placeholder="홈페이지 URL을 입력해주세요"
                name="homepageUrl"
                value={submit.homepageUrl}
                onChange={(e) =>
                  setSubmit((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </InputWrap>
          </InputWrapRow>
          <InputWrapRow>
            <InputWrap>
              <InputTitle>Github organization</InputTitle>
              <InputTextInput
                placeholder="organization link를 입력해주세요"
                name="githubOrganization"
                value={submit.githubOrganization}
                onChange={(e) =>
                  setSubmit((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </InputWrap>
            <InputWrap>
              <InputTitle>
                PPT<strong>*</strong>
              </InputTitle>
              <input
                type="file"
                id="ppt"
                accept=".pptx"
                onChange={(e) => onChangeSelectFileName(e)}
              />
              <InputFileInputLableWrap>
                <InputFileInputLable htmlFor="ppt">
                  파일선택
                </InputFileInputLable>
                <InputFileInputLableText>
                  {submit.ppt === "선택된 파일 없음"
                    ? submit.ppt
                    : submit.ppt.name}
                </InputFileInputLableText>
              </InputFileInputLableWrap>
            </InputWrap>
          </InputWrapRow>
          <InputWrapRow>
            <InputWrap>
              <InputTitle>
                시연 영상<strong>*</strong>
              </InputTitle>
              <input
                type="file"
                id="video"
                accept="video/*, audio/*"
                onChange={(e) => onChangeSelectVideoName(e)}
              />
              <InputFileInputLableWrap>
                <InputFileInputLable htmlFor="video">
                  파일선택
                </InputFileInputLable>
                <InputFileInputLableText>
                  {submit.video === "선택된 파일 없음"
                    ? submit.video
                    : submit.video.name}
                </InputFileInputLableText>
              </InputFileInputLableWrap>
            </InputWrap>
            <SubmitFormSaveButton>임시저장</SubmitFormSaveButton>
            <SubmitFormSubmitButton onClick={onClickSubmit}>
              제출
            </SubmitFormSubmitButton>
          </InputWrapRow>
        </InputBox>
      )}
    </SubmitFormBox>
  );
};

export default SubmitForm;
