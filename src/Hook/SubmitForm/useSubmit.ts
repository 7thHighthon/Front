import { useRecoilState } from "recoil";
import { SubmitData, SubmitStatus } from "../../Store/SubmitAtom";

const useSubmit = () => {
  const [submit, setSubmit] = useRecoilState(SubmitData);
  const [isSubmit, setIsSubmit] = useRecoilState(SubmitStatus);

  const onClickSubmit = () => {
    console.log(submit);
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

    setIsSubmit(true);
  };

  return { onClickSubmit };
};

export default useSubmit;
