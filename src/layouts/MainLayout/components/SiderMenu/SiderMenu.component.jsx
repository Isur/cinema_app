import React from "react";
import "./SiderMenu.styles.scss";
import {
  SettingFilled,
  VideoCameraFilled,
  IdcardFilled,
  PlaySquareOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";

const SiderMenu = () => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.userState.role);

  return (
    <Menu
      className={"SiderMenu"}
      onClick={({ key }) => dispatch(push(`/${key}`))}
      defaultSelectedKeys={["movies"]}
      mode="inline"
    >
      <Menu.Item
        className={"SiderMenu__item"}
        icon={<VideoCameraFilled />}
        key="movies"
      >
        Repertoire
      </Menu.Item>
      {(role === "Admin" || role === "Employee") && (
        <Menu.Item
          className={"SiderMenu__item"}
          icon={<PlaySquareOutlined />}
          key="halls"
        >
          Halls
        </Menu.Item>
      )}
      {role === "Admin" && (
        <Menu.Item
          className={"SiderMenu__item"}
          icon={<IdcardFilled />}
          key="employees"
        >
          Employees
        </Menu.Item>
      )}
      <Menu.Item
        className={"SiderMenu__item"}
        icon={<SettingFilled />}
        key={"account"}
      >
        Profile
      </Menu.Item>
    </Menu>
  );
};

export default SiderMenu;
