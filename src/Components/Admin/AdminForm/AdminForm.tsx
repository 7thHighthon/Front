import React from "react";
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
}

const AdminForm: React.FC<IAuthForm> = ({ projectName, teamName, members }) => {
  return (
    <AdminFormBox>
      <AdminFormTitle>{projectName}</AdminFormTitle>
      <AdminFormTeamText>{teamName}</AdminFormTeamText>
      <AdminFormMemberText>{members}</AdminFormMemberText>
    </AdminFormBox>
  );
};

export default AdminForm;
