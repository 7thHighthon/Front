import { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { postSubmitData } from "../../API/Submit/Submit.api";
import { SubmitData, SubmitStatus } from "../../Store/SubmitAtom";

const useSubmit = () => {
  const [submit, setSubmit] = useRecoilState(SubmitData);
  const [isSubmit, setIsSubmit] = useRecoilState(SubmitStatus);
  const [isLoading, setIsLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const resetSubmitData = useResetRecoilState(SubmitData);

  const onClickSubmit = async () => {
    if (submit.members === "") {
      window.alert("팀 구성원을 적어주세요.");
      return;
    }
    if (submit.teamName === "") {
      window.alert("팀명을 적어주세요.");
      return;
    }
    if (submit.projectName === "") {
      window.alert("프로젝트명을 적어주세요");
      return;
    }
    if (
      submit.ppt === undefined ||
      submit.ppt === null ||
      submit.ppt === "선택된 파일 없음"
    ) {
      window.alert("PPT를 첨부해주세요");
      return;
    }
    if (
      submit.video === undefined ||
      submit.video === null ||
      submit.video === "선택된 파일 없음"
    ) {
      window.alert("시연 영상을 첨부해주세요");
      return;
    }

    setIsShow(true);

    const formData = new FormData();
    formData.append("PPTfile", submit.ppt);
    formData.append("gitHubURL", submit.githubOrganization);
    formData.append("homePageURL", submit.homepageUrl);
    formData.append("submitProjectPerson", submit.members as string);
    formData.append("teamName", submit.teamName);
    formData.append("videoFile", submit.video);
    formData.append("submitProjectName", submit.projectName);

    const res = await postSubmitData(formData);

    const {
      status,
      data: { msg, success },
    } = res;
    if (status === 200) {
      window.alert(msg);
      if (success) {
        setIsSubmit(true);
        setIsLoading(false);
        setIsShow(false);
        return;
      }
      window.location.reload();
    }
    if (status !== 200) {
      setIsShow(false);
      window.alert("제출에 실패했습니다.");
    }
  };

  const clearSubmitData = () => {
    setIsSubmit(false);
    resetSubmitData();
  };

  return { onClickSubmit, clearSubmitData, isLoading, isShow };
};

export default useSubmit;
