import { useRecoilState } from "recoil";
import { postAdminData } from "../../API/Admin/Admin.api";
import { CheckProjectCount, WaitProjectData } from "../../Store/AdminAtom";

const useAdminData = () => {
  const [projects, setProjects] = useRecoilState(WaitProjectData);
  const [count, setCount] = useRecoilState(CheckProjectCount);

  const loadAdminData = async () => {
    const res = await postAdminData();
    const {
      status,
      data: {
        msg,
        success,
        data: { FindByUserSubmitProjectResDto, SubmitCount },
      },
    } = res;

    if (status === 200) {
      if (success) {
        setProjects(FindByUserSubmitProjectResDto);
        setCount(SubmitCount);
      }
    }
    if (status !== 200) {
      window.alert(msg);
    }
  };

  return { loadAdminData };
};

export default useAdminData;
