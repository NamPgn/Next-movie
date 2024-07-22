"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { MyButton } from "../../../../components/MV/Button";
import MVInput from "../../../../components/MV/Input";
import { MVError } from "../../../../components/Message";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/hook";
import { editUser, getUser_id } from "@/redux/slice/userSlice";
const ImageStyledEditAuth = styled.img`
  width: 200px;
  height: 200px;
  objectfit: cover;
`;
const EditUser = ({ params }: any) => {
  const { handleSubmit, reset, control } = useForm();
  const [user, setUser]: any = useState({});
  const dispath = useAppDispatch();
  const { id } = params;
  useEffect(() => {
    (async () => {
      const { payload } = await dispath(getUser_id(id));
      setUser(payload);
      reset(payload);
    })();
  }, []);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    const respone = await dispath(editUser(data));
    // navigate("/admin/users");
    if (respone.payload.success) {
      toast.success(
        `Sửa ${formData.append("username", data.username)} thành công`,
        {
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      MVError("Lỗi!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MVInput
          name={"username"}
          label={"User name"}
          control={control}
          rules={undefined}
        />
        <MVInput
          name={"role"}
          label={"Role"}
          control={control}
          rules={undefined}
        />
        {/* <Space wrap>
          <Select
            defaultValue="user"
            style={{ width: 120 }}
            className='mb-3'
            onChange={handleChange}
            options={[
              { value: 0, label: 'User', },
              { value: 1, label: 'Admin' }
            ]}
          />
        </Space> */}
        <div className="w-2/12">
          <ImageStyledEditAuth
            src={user ? user.image : ""}
            className="img-radius rounded"
            alt="User-Profile-Image"
          />
        </div>
        <MyButton htmlType="submit" className="btn btn-primary mt-2">
          Submit
        </MyButton>
      </form>
    </div>
  );
};

export default EditUser;
