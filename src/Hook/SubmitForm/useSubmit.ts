import { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { postSubmitData } from "../../API/Submit/Submit.api";
import { SubmitData, SubmitStatus } from "../../Store/SubmitAtom";

const useSubmit = () => {
  const [submit, setSubmit] = useRecoilState(SubmitData);
  const [isSubmit, setIsSubmit] = useRecoilState(SubmitStatus);

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

    const formData = new FormData();
    formData.append("PPTfile", submit.ppt);
    formData.append("gitHubURL", submit.githubOrganization);
    formData.append("homePageURL", submit.homepageUrl);
    formData.append("submitProjectPerson", submit.members as string);
    formData.append("teamName", submit.teamName);
    formData.append("videoFile", submit.video);

    const res = await postSubmitData(formData);
    console.log(res);

    const {
      status,
      data: { msg, success },
    } = res;
    if (status === 200) {
      window.alert(msg);
      if (success) {
        setIsSubmit(true);
        return;
      }
      window.location.reload();
    }
  };

  return { onClickSubmit };
};

export default useSubmit;
