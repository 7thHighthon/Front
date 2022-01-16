import jwtDecode from "jwt-decode";

export const getToken = () => {
  const token = localStorage.getItem("access-token");
  return token;
};

export const getDecodePayload = () => {
  const decode = jwtDecode(getToken() as string);
  return decode;
};
