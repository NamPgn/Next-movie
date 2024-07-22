"use client"
import React, { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { MyContext } from "../context";
import { TableRouterAdminPage } from "../router";
import MVRow from "@/app/components/MV/Grid";
import MVCol from "@/app/components/MV/Grid/Col";
import { MyButton } from "@/app/components/MV/Button";
import AuthHeader from "@/app/components/Teamplates/Header/component/auth";

const { Content, Sider, Header, Footer } = Layout;

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  const items2 = TableRouterAdminPage.map((item, index) => {
    const key = String(index + 1);
    return {
      key: `${key + 1}`,
      icon: item.icon,
      label: item.path ? <Link href={item.path}>{item.name}</Link> : item.name,
      children: item?.children?.map((subItem, j) => {
        const subKey = j + 1;
        return {
          key: `subitem-${key}-${subKey}`,
          icon: subItem.icon,
          label: subItem.path ? <Link href={subItem.path}>{subItem.name}</Link> : subItem.name,
        };
      }),
    };
  });

  const { isLoggedInState }:any = useContext(MyContext) || {};
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="overflow-y-auto"
        style={{ height: "100%", position: "fixed" }}
      >
        <div className="p-4 bg-[#fff]">
          <div className="h-8 w-full bg-[#ddd] rounded"></div>
        </div>
        <Menu
          style={{ height: "100%" }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items2}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            padding: 0,
          }}
        >
          <MVRow align={"middle"} justify={"space-between"}>
            <MVCol>
              <MyButton
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
                children={undefined}
              />
            </MVCol>
            <MVCol>
              <Link href="/">Home Page</Link>
            </MVCol>
            <MVCol
              style={{
                textAlign: "center",
              }}
              span={1}
            >
              <AuthHeader isLoggedInState={isLoggedInState} style={undefined} />
            </MVCol>
          </MVRow>
        </Header>
        <Content
          style={{
            padding: "24px",
            minHeight: "calc(100vh - 64px)",
            overflow: "auto",
          }}
        >
          {children}
        </Content>
        <Footer>© 2023 copyright | nampg</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
