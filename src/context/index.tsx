"use client";
import React, { createContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { getUser_id } from "../redux/slice/userSlice";
import { isAuthentication } from "@/utils/auth/getToken";
const Auth: any = isAuthentication();

export const MyContext = createContext(null);
export const MyContextProvider = (props: any) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedInState = useAppSelector((state) => state.user.isLogin);
  const [reset, setReset] = useState(false);
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  useEffect(() => {
    if (Auth) {
      dispatch(getUser_id(Auth.user._id));
    }
  }, [isLoggedInState, dispatch, reset]);
  const value = {
    Auth: Auth ? Auth : "",
    user,
    isLoggedIn,
    isLoggedInState,
    setReset,
    handleClick,
    state,
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
