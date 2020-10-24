import React from "react";
import "./RegisterForm.styles.scss";
import { Button, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../store/User/User.actions";

const RegisterForm = ({ onFormChange }) => {
  const dispatch = useDispatch();
  return (
    <Form
      name="Register"
      className="RegisterForm"
      onFinish={(values) =>
        dispatch(
          registerUser(
            values.firstName,
            values.lastName,
            values.userName,
            values.password
          )
        )
      }
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input className={"RegisterForm__Input"} placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input className={"RegisterForm__Input"} placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        name="userName"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input className={"RegisterForm__Input"} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          className={"RegisterForm__Input"}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className={"RegisterForm__Button"}
        >
          Register
        </Button>
        <Typography.Link
          className={"RegisterForm__Link"}
          onClick={() => onFormChange("login")}
        >
          back to login
        </Typography.Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
