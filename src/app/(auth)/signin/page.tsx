// "use client";
// import React from "react";
// import { message } from "antd";
// import * as yup from "yup";
// import { useAppDispatch } from "@/hook";
// import { redirect } from "next/navigation";
// import { loginForm } from "@/redux/slice/userSlice";
// import { MVError, MVSuccess } from "../components/Message";
// import AuthForm from "../components/Form";

// const array = [
//   {
//     type: "text",
//     field: "username",
//     disable: false,
//   },
//   {
//     type: "password",
//     field: "password",
//     disable: false,
//   },
// ];

// const Signin = () => {
//   const dispatch = useAppDispatch();
//   const schema = yup.object().shape({
//     username: yup.string().required(),
//     password: yup.string().required().min(3, "Password tối thiểu 6 kí tự"),
//   });
//   const onsubmit = async (data: any) => {
//     const responese: any = await dispatch(loginForm(data));
//     if (responese.payload && responese?.payload?.success) {
//       MVSuccess(responese.payload?.message);
//       redirect("/");
//     } else {
//       MVError(responese.payload.message);
//     }
//   };

//   const handleMessage = () => {
//     message.success("Đang cập nhật!");
//   };
//   return (
//     <AuthForm
//       onSubmit={onsubmit}
//       formTitle={"Login"}
//       formHeader={"Welcome Back .!"}
//       formIntro={"Skip the lag ?"}
//       submitButtonText={"Login"}
//       formDescription={"Glad you’re back.!"}
//       checkedAccount={"Don’t have an account ? Signup"}
//       handleMessage={handleMessage}
//       redirect={"/signup"}
//       array={array}
//       schemaPage={schema}
//     />
//   );
// };

// export default Signin;

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
