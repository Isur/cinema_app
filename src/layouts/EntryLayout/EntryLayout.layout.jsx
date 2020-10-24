import React from "react";
import "./EntryLayout.styles.scss";
import { Layout } from "antd";

const { Content } = Layout;

const EntryLayout = ({ children }) => {
  return (
    <Layout className={"EntryLayout"}>
      <Content className={"EntryLayout__content"}>{children}</Content>
    </Layout>
  );
};

export default EntryLayout;
