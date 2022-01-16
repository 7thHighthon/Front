import { atom } from "recoil";

interface IwaitProjectData {
  gitHubURL: string;
  homePageURL: string;
  submitProjectName: string;
  teamName: string;
  submitProjectPerson: string;
  idx: number;
  ppturl: string;
  videoURL: string;
}

export const WaitProjectData = atom<IwaitProjectData[]>({
  key: "waitProjectData",
  default: [],
});

export const CheckProjectCount = atom<number>({
  key: "CheckProjectCount",
  default: 0,
});

export const CurrentSelectDetailIndex = atom<string>({
  key: "currentSelectDetailIndex",
  default: "",
});

export const AdminDetailData = atom<IwaitProjectData>({
  key: "AdminDetailData",
  default: {
    gitHubURL: "",
    homePageURL: "",
    submitProjectName: "",
    teamName: "",
    submitProjectPerson: "",
    idx: 0,
    ppturl: "",
    videoURL: "",
  },
});
