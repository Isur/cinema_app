import React from "react";
import "./MainLayout.styles.scss";
import { Layout } from "antd";
import SiderMenu from "./components/SiderMenu/SiderMenu.component";
import Logo from "./components/Logo/Logo.component";
import HeaderBar from "./components/Header/Header.component";

const { Sider, Header, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className={"MainLayout"}>
      <Sider className={"MainLayout__sider"}>
        <Logo />
        <SiderMenu />
      </Sider>
      <Layout>
        <Header className={"MainLayout__header"}>
          <HeaderBar />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
