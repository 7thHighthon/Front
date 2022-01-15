import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import useAdminData from "../../Hook/Admin/useAdminData";
import { getDecodePayload } from "../../Lib/getToken";
import { WaitProjectData } from "../../Store/AdminAtom";
import {
  AdminBox,
  AdminFormItemWrap,
  AdminFormLine,
  AdminSubTitle,
  AdminTitle,
} from "./Admin.style";
import AdminForm from "./AdminForm";

const Admin: React.FC = () => {
  const history = useHistory();
  const [projects, setProjects] = useRecoilState(WaitProjectData);

  useEffect(() => {
    const data: any = getDecodePayload();
    const { auth } = data;
    const grade = auth.slice(5, auth.length);
    if (grade !== "ADMIN") {
      window.alert("관리자 외에는 접근 할 수 없습니다.");
      history.push("/");
    }
  }, []);

  const { loadAdminData } = useAdminData();

  useEffect(() => {
    loadAdminData();
  }, []);

  return (
    <AdminBox>
      <AdminSubTitle>7th Highthon</AdminSubTitle>
      <AdminTitle>Check</AdminTitle>
      <AdminFormLine />
      <AdminFormItemWrap>
        {projects.map((item, idx) => {
          return (
            <AdminForm
              projectName={item.submitProjectName}
              members={item.submitProjectPerson}
              teamName={item.teamName}
              key={idx}
            />
          );
        })}
      </AdminFormItemWrap>
    </AdminBox>
  );
};

export default Admin;
