import React from "react";
import "./LoginForm.styles.scss";
import { Button, Form, Input, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginUser } from "../../../../store/User/User.actions";
import { useDispatch } from "react-redux";

const LoginForm = ({ onFormChange }) => {
  const dispatch = useDispatch();
  return (
    <Form
      name="login"
      className="LoginForm"
      onFinish={(values) =>
        dispatch(loginUser(values.username, values.password))
      }
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          className={"LoginForm__Input"}
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          className={"LoginForm__Input"}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className={"LoginForm__Button"}
        >
          Log in
        </Button>
        <Typography.Link
          className={"LoginForm__Link"}
          onClick={() => onFormChange("register")}
        >
          register now!
        </Typography.Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
