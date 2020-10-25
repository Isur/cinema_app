import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AccountPage.styles.scss";
import { Button, Divider, Form, Input, Select } from "antd";
import { updateUser } from "../../store/Users/Users.actions";
import { useDispatch, useSelector } from "react-redux";

const AccountPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState);

  const [machineInfo, setMachineInfo] = useState(null);

  const fetchMachineInfo = async () => {
    const { data } = await axios.request({
      url: "/App",
      method: "GET",
    });

    setMachineInfo(data);
  };

  useEffect(() => {
    fetchMachineInfo();
  }, []);

  return (
    <div className={"AccountPage"}>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Profile</h2>
      </div>
      <Divider />
      <Form
        name={"new-employee"}
        layout={"vertical"}
        initialValues={{ ...user, password: null, role: null }}
        onFinish={(val) => {
          dispatch(
            updateUser(
              user.id,
              val.firstName,
              val.lastName,
              val.userName,
              val.password,
              val.role
            )
          );
        }}
      >
        <Form.Item
          name={"firstName"}
          label={"First Name"}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"lastName"}
          label={"Last Name"}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"userName"}
          label={"Username"}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={"password"} label={"Password"}>
          <Input type={"password"} />
        </Form.Item>
        <Button block htmlType={"submit"}>
          SAVE
        </Button>
      </Form>
      <Divider />
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Machine Data (DEV ONLY)</h2>
      </div>
      <div>
        {machineInfo &&
          machineInfo.split("\n").map((item, idx) => {
            return (
              <span key={idx}>
                {item}
                <br />
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default AccountPage;
