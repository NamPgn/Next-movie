import intances from "./instances";
import { Icommented } from "../interfaces/comment";
import { isAuthentication } from "@/auth/getToken";
declare var Promise: any;
const dataToken = isAuthentication();
export const getAllComment = async (): Promise<Icommented[]> => {
  return await intances.get("/comments");
};

export const addComment = async (id: any, data: any): Promise<Icommented> => {
  return await intances.post(`/comment/${id}/${dataToken.user._id}`, data, {
    headers: {
      Authorization: `Bearer ${dataToken.token}`,
    },
  });
};

export const deleteComent = async (data: any): Promise<Icommented> => {
  return await intances.post(`/comment/${dataToken.user._id}`, data, {
    headers: {
      Authorization: `Bearer ${dataToken.token}`,
    },
  });
};
