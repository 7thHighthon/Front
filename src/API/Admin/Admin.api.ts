import axios from "axios";
import config from "../../Config/config.json";
import { getToken } from "../../Lib/getToken";

export const postAdminData = async () => {
  const url = `${config.SERVER}/submit-project/admin/find-all-submit-project`;
  try {
    const res = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return res;
  } catch (error: any) {
    return error.response;
  }
};
