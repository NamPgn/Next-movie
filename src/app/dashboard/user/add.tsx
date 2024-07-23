import React from "react";
import { useForm } from "react-hook-form";
import { resgisterLogin } from "../../../redux/slice/userSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../hook";
import { redirect } from "next/navigation";
import MVInput from "@/app/components/MV/Input";
import { MyButton } from "@/app/components/MV/Button";
const Adduser = () => {
  const { register, handleSubmit, control } = useForm();
  const dispath = useAppDispatch();
  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    dispath(resgisterLogin(formData));
    toast.success(`Thêm user thành công`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    redirect("/dashboard/users");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <MVInput
            name={"username"}
            label={"User name"}
            control={control}
            rules={undefined}
          />
        </div>
        <div className="mb-3">
          <MVInput
            name={"email"}
            label={"Email"}
            control={control}
            rules={undefined}
          />
        </div>
        <div className="mb-3">
          <MVInput
            name={"password"}
            label={"Password"}
            control={control}
            rules={undefined}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            {...register("image")}
            className="form-control"
            required
          />
        </div>
        <MyButton className="btn btn-primary">Submit</MyButton>
      </form>
    </div>
  );
};

export default Adduser;
