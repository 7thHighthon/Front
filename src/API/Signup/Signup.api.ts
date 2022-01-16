import axios from "axios";
import config from "../../Config/config.json";

export const postSignupData = async (data: any) => {
  const url = `${config.SERVER}/user/register`;

  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error: any) {
    return error.response;
  }
};
