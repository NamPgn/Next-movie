import { isAuthentication } from "../utils/auth/getToken";
import intances from "./instances";
const Auth = isAuthentication();
export const deleteTypeByProducts = async (id: any, body: { typeId: any; }) => {
  return intances.post(`/type/${id}/${Auth.user._id}`, body, {
    headers: {
      Authorization: `Bearer ${Auth.token}`,
    },
  });
};

export const pushCateTotype = async (id: any, body: { categoryId: any; }) =>
  await intances.post(`/push/type/category/${id}/${Auth.user._id}`, body, {
    headers: {
      Authorization: `Bearer ${Auth.token}`,
    },
  });

export const addBigCategory = async (data: any) => {
  return await intances.post(`/type/${Auth.user._id}`, data, {
    headers: {
      Authorization: `Bearer ${Auth.token}`,
    },
  });
};

export const delBigCategory = async (id: any) => {
  return await intances.delete(`/type/${id}/${Auth.user._id}`, {
    headers: {
      Authorization: `Bearer ${Auth.token}`,
    },
  });
};
