import { atom } from "recoil";

interface ISignupData {
  name: string;
  email: string;
  password: string;
}

export const SignupData = atom<ISignupData>({
  key: "SignupData",
  default: {
    name: "",
    email: "",
    password: "",
  },
});
