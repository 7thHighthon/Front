import { atom } from "recoil";

interface ISubmitData {
  members: string | string[];
  teamName: string;
  projectName: string;
  homepageUrl: string;
  githubOrganization: string;
  ppt: any;
  video: any;
}

export const SubmitStatus = atom<boolean>({
  key: "SubmitStatus",
  default: false,
});

export const SubmitData = atom<ISubmitData>({
  key: "SubmitData",
  default: {
    members: "",
    teamName: "",
    projectName: "",
    homepageUrl: "",
    githubOrganization: "",
    ppt: "선택된 파일 없음",
    video: "선택된 파일 없음",
  },
});
