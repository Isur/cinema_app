import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addHall, updateHall } from "../../../../store/Halls/Halls.actions";

const NewHallModel = ({ visible, onClose, hall }) => {
  const dispatch = useDispatch();
  const [edited, setEdited] = useState(null);
  const [loading, setLoading] = useState(false);

  const halls = useSelector((state) => state.hallsState.halls);

  useEffect(() => {
    if (hall) {
      setLoading(true);
      setEdited(halls.find((u) => u.id === hall));
    }
  }, [hall]);

  useEffect(() => {
    if (edited) {
      setLoading(false);
    }
  }, [edited]);

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={edited ? <h2>Edit Hall</h2> : <h2>New Hall</h2>}
    >
      {loading ? (
        <Spin />
      ) : (
        <Form
          name={"new-hall"}
          layout={"vertical"}
          initialValues={edited ? { ...edited } : {}}
          onFinish={(val) => {
            if (edited) {
              dispatch(updateHall(edited.id, val.name, val.sizeX, val.sizeY));
              setEdited(null);
            } else {
              dispatch(addHall(val.name, val.sizeX, val.sizeY));
            }
            onClose();
          }}
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
      )}
    </Modal>
  );
};

export default NewHallModel;
