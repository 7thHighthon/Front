import axios from "axios";
import config from "../../Config/config.json";
import { getToken } from "../../Lib/getToken";

export const postSubmitData = async (data: any) => {
  const url = `${config.SERVER}/submit-project/user/add-submit-project`;
  try {
    const res = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return res;
  } catch (error: any) {
    return error.response;
  }
};
