import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
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
import AdminDetail from "./AdminDetail";
import AdminForm from "./AdminForm";

const Admin: React.FC = () => {
  const history = useHistory();
  const [projects, setProjects] = useRecoilState(WaitProjectData);

  const detailMatch = useRouteMatch<{ detailId: string }>(
    "/admin/detail/:detailId"
  );

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
      {detailMatch === null ? (
        <AdminFormItemWrap>
          {projects.map((item, idx) => {
            return (
              <AdminForm
                projectName={item.submitProjectName}
                members={item.submitProjectPerson}
                teamName={item.teamName}
                index={item.idx}
                key={idx}
              />
            );
          })}
        </AdminFormItemWrap>
      ) : (
        <AdminDetail idx={detailMatch.params.detailId} />
      )}
    </AdminBox>
  );
};

export default Admin;
