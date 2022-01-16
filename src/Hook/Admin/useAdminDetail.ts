import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  postAdminDetailData,
  postPassAdminDetailData,
} from "../../API/Admin/Admin.api";
import { AdminDetailData } from "../../Store/AdminAtom";

const useAdminDetail = () => {
  const [detail, setDetail] = useRecoilState(AdminDetailData);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const loadDetail = async (idx: string) => {
    const res = await postAdminDetailData(idx);
    const {
      data: { msg, success, data },
      status,
    } = res;

    if (status === 200 && success) {
      setDetail(data);
      setIsLoading(false);
    }

    if (status !== 200) {
      window.alert(msg);
      history.push("/admin");
      setIsLoading(false);
    }
  };

  const passDetail = async (idx: string) => {
    const res = await postPassAdminDetailData(idx);

    const {
      status,
      data: { msg, success },
    } = res;

    if (status === 200) {
      window.alert(msg);
      if (success) {
        history.push("/admin");
        return;
      }
    }

    if (status !== 200) {
      window.alert(msg);
      window.location.reload();
    }

    console.log(res);
  };

  return { loadDetail, isLoading, passDetail };
};

export default useAdminDetail;
