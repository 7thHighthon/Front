import { atom } from "recoil";

interface IwaitProjectData {
  gitHubURL: string;
  homePageURL: string;
  submitProjectName: string;
  teamName: string;
  submitProjectPerson: string;
  index: number;
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
