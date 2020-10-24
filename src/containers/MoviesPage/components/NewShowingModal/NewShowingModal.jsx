import React from "react";
import { Button, Form, DatePicker, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addShowing } from "../../../../store/Showings/Showings.actions";

const NewShowingModel = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesState.movies);
  const halls = useSelector((state) => state.hallsState.halls);

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={<h2>New Showing</h2>}
    >
      <Form
        name={"new-showing"}
        layout={"vertical"}
        onFinish={(val) => dispatch(addShowing(val.movie, val.hall, val.time))}
      >
        <Form.Item name={"movie"} label={"Movie"}>
          <Select>
            {movies &&
              movies.map((movie) => {
                return (
                  <Select.Option value={movie.id}>{movie.title}</Select.Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item name={"hall"} label={"Hall"}>
          <Select>
            {halls &&
              halls.map((hall) => {
                return (
                  <Select.Option value={hall.id}>{hall.name}</Select.Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item name={"time"} label={"Time"}>
          <DatePicker showTime />
        </Form.Item>
        <Button block htmlType={"submit"}>
          SAVE
        </Button>
      </Form>
    </Modal>
  );
};

export default NewShowingModel;
