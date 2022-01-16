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

export const postAdminDetailData = async (idx: string) => {
  const url = `${config.SERVER}/submit-project/admin/find-all-submit-project/${idx}`;

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

export const postPassAdminDetailData = async (idx: string) => {
  const url = `${config.SERVER}/submit-project/admin/update-project-completed/${idx}`;

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
