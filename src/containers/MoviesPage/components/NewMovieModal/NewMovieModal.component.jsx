import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../../store/Movies/Movies.actions";

const NewMovieModel = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={<h2>New Movie</h2>}
    >
      <Form
        name={"new-movie"}
        layout={"vertical"}
        onFinish={(val) =>
          dispatch(addMovie(val.title, val.year, val.director))
        }
      >
        <Form.Item name={"title"} label={"Title"}>
          <Input />
        </Form.Item>
        <Form.Item name={"year"} label={"Year"}>
          <Input type={"number"} />
        </Form.Item>
        <Form.Item name={"director"} label={"Director"}>
          <Input />
        </Form.Item>
        <Button block htmlType={"submit"}>
          SAVE
        </Button>
      </Form>
    </Modal>
  );
};

export default NewMovieModel;
