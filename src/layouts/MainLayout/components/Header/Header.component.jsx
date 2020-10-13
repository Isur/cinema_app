import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import "./Header.styles.scss";
import { Badge } from "antd";

const HeaderBar = () => {
  return (
    <div className={"HeaderBar"}>
      <div className={"HeaderBar__basket"}>
        <Badge count={5}>
          <ShoppingOutlined className={"HeaderBar__basket__icon"} />
        </Badge>
        <span className={"HeaderBar__basket__timer"}>13:23</span>
      </div>
    </div>
  );
};

export default HeaderBar;
