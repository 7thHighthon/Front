import React from "react";
import { useHistory } from "react-router-dom";
import {
  AdminFormBox,
  AdminFormMemberText,
  AdminFormTeamText,
  AdminFormTitle,
} from "./AdminForm.style";

interface IAuthForm {
  projectName: string;
  teamName: string;
  members: string;
  index: number;
}

const AdminForm: React.FC<IAuthForm> = ({
  projectName,
  teamName,
  members,
  index,
}) => {
  const history = useHistory();

  const onClickDetail = () => {
    history.push(`/admin/detail/${index}`);
  };

  return (
    <AdminFormBox onClick={onClickDetail}>
      <AdminFormTitle>{projectName}</AdminFormTitle>
      <AdminFormTeamText>{teamName}</AdminFormTeamText>
      <AdminFormMemberText>{members}</AdminFormMemberText>
    </AdminFormBox>
  );
};

export default AdminForm;
