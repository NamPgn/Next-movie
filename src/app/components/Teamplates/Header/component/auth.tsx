// import React from "react";
// import MVAvatar from "../../../MV/Avatar";
// import {
//   LikeOutlined,
//   LogoutOutlined,
//   SmileOutlined,
//   UserOutlined,
//   UsergroupAddOutlined,
// } from "@ant-design/icons";
// import { Popover, ConfigProvider } from "antd";
// import MVTitle from "../../../MV/Title";
// import MVLink from "../../../Location/Link";
// import MVRow from "../../../MV/Grid";
// import MVCol from "../../../MV/Grid/Col";
// import MVText from "../../../MV/Text";
// import { redirect } from "next/navigation";
// import { isAuthentication } from "@/utils/auth/getToken";
// import { handleLogout } from "@/app/function";
// const AuthHeader = ({ isLoggedInState, style }:any) => {
//   const auths = isAuthentication();
//   const handleCheckCart = () => {
//     if (!auths) {
//     } else {
//       redirect("/cart/user");
//     }
//   };
//   return (
//     <React.Fragment>
//       {auths ? (
//         <ConfigProvider
//           theme={{
//             token: {
//               colorBgBase: "#323232",
//               colorTextBase: "#fff",
//             },
//           }}
//         >
//           <Popover
//             content={
//               <>
//                 <MVLink to={"/profile"}>
//                   <MVRow
//                     style={{ lineHeight: "0" }}
//                     align={"middle"}
//                     gutter={12}
//                   >
//                     <MVCol>
//                       <UsergroupAddOutlined />
//                     </MVCol>
//                     <MVCol>
//                       <MVText level={6} className="auth">
//                         Your profile
//                       </MVText>
//                     </MVCol>
//                   </MVRow>
//                 </MVLink>
//                 <MVRow
//                   style={{ lineHeight: "0" }}
//                   align={"middle"}
//                   gutter={[12, 12]}
//                 >
//                   <MVCol>
//                     <LikeOutlined />
//                   </MVCol>
//                   <MVCol>
//                     <MVText
//                       style={{
//                         cursor: "pointer",
//                       }}
//                       onClick={handleCheckCart}
//                       className="auth"
//                     >
//                       Saved
//                     </MVText>
//                   </MVCol>
//                 </MVRow>
//                 {auths.user && auths?.user?.role >= 1 && (
//                   <MVLink to={"/dashboard"}>
//                     <MVRow
//                       style={{ lineHeight: "0" }}
//                       align={"middle"}
//                       gutter={[12, 12]}
//                     >
//                       <MVCol>
//                         <UserOutlined />
//                       </MVCol>
//                       <MVCol>
//                         <MVText className="auth">Admin</MVText>
//                       </MVCol>
//                     </MVRow>
//                   </MVLink>
//                 )}
//                 <MVRow
//                   style={{ lineHeight: "0" }}
//                   align={"middle"}
//                   gutter={[12, 12]}
//                 >
//                   <MVCol>
//                     <LogoutOutlined />
//                   </MVCol>
//                   <MVCol>
//                     <MVText
//                       style={{
//                         cursor: "pointer",
//                       }}
//                       // onClick={() => handleLogout(dispatch, redirect)}
//                     >
//                       Logout
//                     </MVText>
//                   </MVCol>
//                 </MVRow>
//               </>
//             }
//             title={
//               <MVTitle
//                 style={{
//                   textTransform: "uppercase",
//                 }}
//                 type={"secondary"}
//                 level={5}
//               >
//                 {auths?.user?.username}
//               </MVTitle>
//             }
//             placement="bottomLeft"
//             trigger="click"
//           >
//             <MVAvatar
//               className="text-center"
//               title={auths?.user?.name}
//               src={auths.user && auths?.user?.image}
//               size={"sm"}
//             />
//           </Popover>
//         </ConfigProvider>
//       ) : (
//         <ConfigProvider
//           theme={{
//             token: {
//               colorBgBase: "#323232",
//               colorTextBase: "#fff",
//             },
//           }}
//         >
//           <Popover
//             content={
//               <MVLink to={"/signin"}>
//                 <MVRow align={"middle"} gutter={[12, 12]}>
//                   <MVCol>
//                     <SmileOutlined />
//                   </MVCol>
//                   <MVCol>
//                     <MVText level={6} className="auth">
//                       Signin
//                     </MVText>
//                   </MVCol>
//                 </MVRow>
//               </MVLink>
//             }
//             title={
//               <MVTitle
//                 style={{
//                   textTransform: "uppercase",
//                 }}
//                 type={"secondary"}
//                 level={5}
//               >
//                 {"Hi"}
//               </MVTitle>
//             }
//             placement="bottomLeft"
//             trigger="click"
//           >
//             <MVAvatar
//               title={auths?.user?.name}
//               src={undefined}
//               style={style}
//               size={40}
//               icon={<UserOutlined />}
//             />
//           </Popover>
//         </ConfigProvider>
//       )}
//     </React.Fragment>
//   );
// };

// export default AuthHeader;
