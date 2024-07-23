import React, { useContext } from "react";
import { columnsWeeks } from "../../../constant";
import { useForm } from "react-hook-form";
import {
  addWeeks,
  deleteCategoryByWeek,
  removeWeeks,
} from "../../../sevices/week";
import { DeleteOutlined } from "@ant-design/icons";
import { ApiContext } from "../../../context/api";
import { MVError, MVSuccess } from "@/app/components/Message";
import MVConfirm from "@/app/components/MV/Confirm";
import { MyButton } from "@/app/components/MV/Button";
import MVTable from "@/app/components/MV/Table";
import MVLink from "@/app/components/Location/Link";
import MVRow from "@/app/components/MV/Grid";
import MVCol from "@/app/components/MV/Grid/Col";
import MVInput from "@/app/components/MV/Input";
const Weeks = () => {
  const { weeks }:any = useContext(ApiContext) || { };
  const { handleSubmit, control } = useForm();
  const handleDeleteCategoryByWeek = async (weeksId:any, categoryId:any) => {
    const _ = {
      categoryId: categoryId,
    };
    try {
      const response = await deleteCategoryByWeek(weeksId, _);
      if (response.data) {
        MVSuccess("Delete Success");
      }
    } catch (error) {
      MVError("Delete Failure");
    }
  };
  const onAdd = async (data:any) => {
    await addWeeks(data);
  };
  const handledelete = async (id:any) => {
    await removeWeeks(id);
  };
  const expandedRowRender = (record:any) => {
    const columns = [
      { title: "ID", dataIndex: "_id", key: "_id" },
      { title: "Name", dataIndex: "name", key: "name" },
      {
        title: "Action",
        key: "operation",
        render: (text:any, category:any) => (
          <>
            <MVConfirm
              title="Delete the category"
              onConfirm={() =>
                handleDeleteCategoryByWeek(record.key, category._id)
              }
              okText="Yes"
              cancelText="No"
            >
              <MyButton type="text" shape="circle" className="ml-2">
                <DeleteOutlined />
              </MyButton>
            </MVConfirm>
          </>
        ),
      },
    ];

    // Lấy danh sách category theo id của bảng cha
    const dataCategorys =
      weeks.find((week:any) => week._id === record.key)?.category || [];
    return (
      <MVTable
        columns={columns}
        dataSource={dataCategorys}
        pagination={false}
      />
    );
  };
  const data =
    weeks &&
    weeks.map((v:any, i:number) => {
      return {
        key: v._id,
        name: v.name,
        action: (
          <>
            <MVLink to={`/dashboard/week/edit/${v._id}`}>
              <MyButton type="primary">Edit</MyButton>
            </MVLink>
            <MyButton onClick={() => handledelete(v._id)} className="ml-1">
              Delete
            </MyButton>
          </>
        ),
      };
    });
  return (
    <>
      <form onSubmit={handleSubmit(onAdd)}>
        <MVRow gutter={4} align={"middle"} justify={"center"}>
          <MVCol span={22}>
            <MVInput
              name={"name"}
              label={"Theo tuần"}
              control={control}
              rules={undefined}
            />
          </MVCol>
          <MVCol span={2}>
            <MyButton htmlType="submit" className="mt-3" type="primary">
              Thêm
            </MyButton>
          </MVCol>
        </MVRow>
      </form>
      <MVTable
        columns={columnsWeeks}
        dataSource={data}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
      />
    </>
  );
};

export default Weeks;
