"use client";
import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const AdminContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: "#fff",
          borderRadius: 4,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default AdminContent;
