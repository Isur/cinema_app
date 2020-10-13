import React from "react";
import "./SiderMenu.styles.scss";
import {
  SettingFilled,
  VideoCameraFilled,
  IdcardFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const SiderMenu = () => {
  const dispatch = useDispatch();

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
        Repertuar
      </Menu.Item>
      <Menu.Item
        className={"SiderMenu__item"}
        icon={<IdcardFilled />}
        key="tickets"
      >
        Moje bilety
      </Menu.Item>
      <Menu.Item
        className={"SiderMenu__item"}
        icon={<SettingFilled />}
        key={"account"}
      >
        Profil
      </Menu.Item>
    </Menu>
  );
};

export default SiderMenu;
