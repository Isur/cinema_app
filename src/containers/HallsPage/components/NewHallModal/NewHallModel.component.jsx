import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch } from "react-redux";
import { addHall } from "../../../../store/Halls/Halls.actions";

const NewHallModel = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={<h2>New Hall</h2>}
    >
      <Form
        name={"new-hall"}
        layout={"vertical"}
        onFinish={(val) => dispatch(addHall(val.name, val.sizeX, val.sizeY))}
      >
        <Form.Item name={"name"} label={"Name"}>
          <Input />
        </Form.Item>
        <Form.Item name={"sizeX"} label={"Size X"}>
          <Input type={"number"} />
        </Form.Item>
        <Form.Item name={"sizeY"} label={"Size Y"}>
          <Input type={"number"} />
        </Form.Item>
        <Button block htmlType={"submit"}>
          SAVE
        </Button>
      </Form>
    </Modal>
  );
};

export default NewHallModel;
