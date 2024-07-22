"use client"

import React, { memo, useState } from "react";
import { Input } from "antd";
import { MyButton } from "../../MV/Button";
import { PushpinOutlined } from "@ant-design/icons";
import { MVError, MVSuccess } from "../../Message";
import { useAppDispatch } from "@/hook";
import { isAuthentication } from "@/utils/auth/getToken";
import { addCommentSlice } from "@/redux/slice/comment/thunk/comment";
const { TextArea } = Input;
const ComentProductsLayout = memo(({ params }: any) => {
  const rows: any = "3";
  const dispatch = useAppDispatch();
  const { id } = params;
  const Auth = isAuthentication();
  const [s, setS] = useState({
    commentContent: "",
    user: Auth ? Auth.user._id : "",
    product: id,
  });
  const handleAddComment = async () => {
    if (Auth) {
      const res = await dispatch(addCommentSlice(s));
      if (res.payload) {
        MVSuccess("Add Comment Success");
      }
    } else {
      MVError("You are not logged in!");
    }
  };
  const onchange = (e: any) => {
    setS({ ...s, commentContent: e.target.value });
  };
  return (
    <>
      <TextArea
        placeholder={Auth ? "Viết bình luận của bạn" : "Đăng nhập để bình luận"}
        onChange={onchange}
        rows={rows}
      />
      <MyButton
        style={{
          marginTop: "10px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
        icon={<PushpinOutlined />}
        type="primary"
        onClick={() => handleAddComment()}
      >
        Pushlist comment
      </MyButton>
    </>
  );
});

export default ComentProductsLayout;
