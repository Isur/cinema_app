import React, { useEffect, useState } from "react";
import { Button, Form, DatePicker, Modal, Select, Input, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../../../store/Users/Users.actions";

const ROLES = {
  0: "Admin",
  1: "Employee",
  2: "User",
};

const NewEmployeeModal = ({ visible, onClose, employee }) => {
  const dispatch = useDispatch();
  const [edited, setEdited] = useState(null);
  const [loading, setLoading] = useState(false);

  const users = useSelector((state) => state.usersState.users);

  useEffect(() => {
    if (employee) {
      setLoading(true);
      setEdited(users.find((u) => u.id === employee));
    }
  }, [employee]);

  useEffect(() => {
    if (edited) {
      setLoading(false);
    }
  }, [edited]);

  return (
    <Modal
      visible={visible}
      onCancel={() => {
        setEdited(null);
        onClose();
      }}
      footer={null}
      title={edited ? <h2>Edit Employee</h2> : <h2>New Employee</h2>}
    >
      {loading ? (
        <Spin />
      ) : (
        <Form
          name={"new-employee"}
          layout={"vertical"}
          initialValues={
            edited && { ...edited, password: "", role: ROLES[edited.role] }
          }
          onFinish={(val) => {
            if (edited) {
              dispatch(
                updateUser(
                  edited.id,
                  val.firstName,
                  val.lastName,
                  val.userName,
                  val.password,
                  val.role
                )
              );
              setEdited(null);
            } else {
              dispatch(
                addUser(
                  val.firstName,
                  val.lastName,
                  val.userName,
                  val.password,
                  val.role
                )
              );
            }
            onClose();
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
          <Form.Item
            name={"password"}
            label={"Password"}
            rules={[edited ? {} : { required: true }]}
          >
            <Input type={"password"} />
          </Form.Item>
          <Form.Item name={"role"} label={"Role"} rules={[{ required: true }]}>
            <Select>
              <Select.Option value={"User"}>User</Select.Option>
              <Select.Option value={"Worker"}>Employee</Select.Option>
              <Select.Option value={"Admin"}>Admin</Select.Option>
            </Select>
          </Form.Item>
          <Button block htmlType={"submit"}>
            SAVE
          </Button>
        </Form>
      )}
    </Modal>
  );
};

export default NewEmployeeModal;
