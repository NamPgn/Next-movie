import intances from "./instances";
import { Icategory } from "../interfaces/category";
import { isAuthentication } from "@/utils/auth/getToken";
declare var Promise: any;
const dataToken = isAuthentication();
export const getAllcategory = async (page: number): Promise<Icategory[]> => {
  return await intances.get(`/categorys?page=${page}`);
};

export const getCategory = async (id: string): Promise<Icategory> => {
  return await intances.get(`/category/${id}`);
};

export const addCate = async (data: any): Promise<Icategory> => {
  return await intances.post(`/category/${dataToken.user._id}`, data, {
    headers: {
      Authorization: `Bearer ${dataToken.token}`,
    },
  });
};

export const deleteCate = async (id: any): Promise<Icategory> => {
  return await intances.delete(`/category/${id}/${dataToken.user._id}`, {
    headers: {
      Authorization: `Bearer ${dataToken.token}`,
    },
  });
};

export const updateCate = async (data: any): Promise<Icategory> => {
  return await intances.post(
    `/category/${data.get("_id")}/${dataToken.user._id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${dataToken.token}`,
      },
    }
  );
};

export const getCategoryProduct = async () => {
  return await intances.get("/category/products");
};

export const getAllCategoryNotReq = async (id: string) => {
  return await intances.get("/category/getAllCategoryNotRequest/" + id);
};

export const searCategory = async (data: any) => {
  return await intances.get(`/categorys/search?value=${data}`);
};

export const ratingCategory = async (categoryId: string, data: any) => {
  return await intances.post("/rating/" + categoryId, data);
};

export const ratingProduct = async (categoryId: any, data: any) => {
  return await intances.post(`/rating/${categoryId}`, data);
};

export const changeLatest = async (data: any) => {
  return await intances.post(`/category/changeLatest`, data);
};