import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  GiftTwoTone,
  BankTwoTone,
  CameraTwoTone,
  IdcardTwoTone,
  PhoneTwoTone,
  WalletTwoTone
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <IdcardTwoTone /> Registro
        </Menu.Item>
        <Menu.Item key="2">
          <WalletTwoTone />
          CheckOut
        </Menu.Item>
        <Menu.Item key="3">
          <PhoneTwoTone /> Contactenos
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            <SubMenu key="sub1" icon={<BankTwoTone />} title="Lugares">
              <Menu.Item key="1">Windham Herradura</Menu.Item>
              <Menu.Item key="2">Occidental Papagayo</Menu.Item>
              <Menu.Item key="3">Swiss Travel</Menu.Item>
              <Menu.Item key="4">Sheraton Escazu</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<CameraTwoTone />} title="Memorias">
              <Menu.Item key="5">Gabriel Anta</Menu.Item>
              <Menu.Item key="6">Douglas Cedeño</Menu.Item>
              <Menu.Item key="7">Raw Shoots</Menu.Item>
              <Menu.Item key="8">Geoff Photography</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<GiftTwoTone />} title="Decoraciones">
              <Menu.Item key="9">Floisteía Costa Rica</Menu.Item>
              <Menu.Item key="10">Flores Gala</Menu.Item>
              <Menu.Item key="11">Juno Flowers</Menu.Item>
              <Menu.Item key="12">Nandallo</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Created by Felipe-Maykol-Eduardo & Fernando ©2021{" "}
    </Footer>
  </Layout>,
  document.getElementById("container")
);
