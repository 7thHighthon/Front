import { atom } from "recoil";

export const UserNameInfo = atom<string>({
  key: "UserNameInfo",
  default: "",
});

export const AdminStatus = atom<boolean>({
  key: "AdminStatus",
  default: false,
});
