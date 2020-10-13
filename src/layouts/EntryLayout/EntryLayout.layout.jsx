import React from "react";
import "./EntryLayout.styles.scss";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const EntryLayout = ({ children }) => {
  return (
    <Layout className={"EntryLayout"}>
      <Content className={"EntryLayout__content"}>{children}</Content>
      <Footer className={"EntryLayout__footer"}></Footer>
    </Layout>
  );
};

export default EntryLayout;
