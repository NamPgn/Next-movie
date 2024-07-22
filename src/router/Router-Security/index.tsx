import React from "react";
import { redirect } from "next/navigation";
import { isAuthentication } from "@/utils/auth/getToken";
import MVLink from "@/app/components/Location/Link";
const PrivateRouter = (props: any) => {
  const data = isAuthentication();
  try {
    if (data) {
      if (data.user.role == 0) {
        return redirect("/");
      } else {
        return props.children;
      }
    } else {
      return redirect("/");
    }
  } catch (error) {
    return (
      <div className="text-light container text-center">
        <MVLink to={"/signin"}>Đăng nhập</MVLink>
      </div>
    );
  }
};

export default PrivateRouter;
