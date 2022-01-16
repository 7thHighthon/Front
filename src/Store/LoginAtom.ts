import { atom } from "recoil";

interface ILoginData {
  email: string;
  password: string;
}

export const LoginData = atom<ILoginData>({
  key: "LoginData",
  default: {
    email: "",
    password: "",
  },
});

export const LoginStatus = atom<boolean>({
  key: "LoginStatus",
  default: false,
});
