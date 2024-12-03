import React from "react";
import { Layout } from "antd";
import AdminFooter from "@/components/layout/admin.footer";
import AdminSlider from "@/components/layout/admin.slider";
import AdminHeader from "@/components/layout/admin.header";
import AdminContent from "@/components/layout/admin.content";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout hasSider>
      <AdminSlider />
      <Layout style={{ marginInlineStart: 200 }}>
        <AdminHeader />
        <AdminContent>{children}</AdminContent>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
