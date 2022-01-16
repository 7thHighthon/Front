import axios from "axios";
import config from "../../Config/config.json";

export const postLoginData = async (data: any) => {
  const url = `${config.SERVER}/user/login`;

  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error: any) {
    return error.response;
  }
};
