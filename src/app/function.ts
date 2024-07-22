import { isCategorysSlice } from "@/interfaces/category";
import { isProductSlice } from "@/interfaces/product";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RedirectType } from "next/navigation";
import { UnknownAction, Dispatch } from "redux";
import { logout } from "../redux/slice/userSlice";

export const filterCate = (states: any, id: any) => {
  const data = states ? states.find((item: any) => item._id == id) : "";
  return data;
};

export const urlSwr = process.env.NEXT_PUBLIC_API_BASE_URL;

export const handleLogout = (
  dispatch: ThunkDispatch<
    {
      product: isProductSlice;
      user: any;
      category: isCategorysSlice;
      trailer: { value: never[]; trailerValues: never[] };
      comment: { value: never[] };
      cart: { value: never[]; isLoading: boolean; code: null };
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>,
  redirect: {
    (url: string, type?: RedirectType): never;
    (url: string, type?: RedirectType): never;
    (arg0: string): void;
  }
) => {
  dispatch(logout());
  redirect("/");
};
