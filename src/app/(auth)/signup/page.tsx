// 'use client';
// import React from "react";
// import { message } from "antd";
// import * as yup from "yup";
// import { useAppDispatch } from "@/hook";
// import { redirect } from "next/navigation";
// import { resgisterLogin } from "@/redux/slice/userSlice";
// import { MVError, MVSuccess } from "../components/Message";
// import AuthForm from "../components/Form";
// const array = [
//   {
//     type: "text",
//     field: "username",
//     disable: false,
//   },
//   {
//     type: "email",
//     field: "email",
//     disable: false,
//   },
//   {
//     type: "password",
//     field: "password",
//     disable: false,
//   },
//   {
//     type: "password",
//     field: "repassword",
//     disable: false,
//   },
// ];
// const Signup = () => {
//   const dispatch = useAppDispatch();
//   const schema = yup.object().shape({
//     username: yup.string().required(),
//     password: yup.string().required().min(3, "Password tối thiểu 6 kí tự"),
//     email: yup.string().required().email(),
//     repassword: yup
//       .string()
//       .required()
//       .oneOf([yup.ref("password")], "Passwords must match"),
//   });
//   const onsubmit = async (data: any) => {
//     try {
//       const response = await dispatch(resgisterLogin(data));
//       if (response?.payload?.success) {
//         MVSuccess(response.payload.message);
//         redirect("/signin");
//       } else {
//         MVError(response?.payload?.message || "Đăng nhập không thành công");
//       }
//     } catch (error) {
//       MVError("Đăng nhập không thành công");
//     }
//   };
//   const handleMessage = () => {
//     message.success("Đang cập nhật!");
//   };
//   return (
//     <AuthForm
//       onSubmit={onsubmit}
//       formTitle={"Signup"}
//       formDescription={"Just some details to get you in.!"}
//       submitButtonText={"Signup"}
//       formIntro={"Skip the lag ?"}
//       formHeader={"Roll the Carpet.!"}
//       checkedAccount={"Already Registered? Login"}
//       handleMessage={handleMessage}
//       redirect={"/signin"}
//       array={array}
//       schemaPage={schema}
//     />
//   );
// };

// export default Signup;

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
