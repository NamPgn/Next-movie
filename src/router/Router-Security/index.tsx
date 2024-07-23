"use client"
import { redirect } from "next/navigation";
import { isAuthentication } from "@/utils/auth/getToken";
const PrivateRouter = (props: any) => {
  try {
    const data = isAuthentication();
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
    return redirect('/signin');
  }
};

export default PrivateRouter;
