import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, Form, DatePicker, Modal, Select, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addShowing,
  updateShowing,
} from "../../../../store/Showings/Showings.actions";

const NewShowingModel = ({ visible, onClose, showing }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesState.movies);
  const showings = useSelector((state) => state.showingsState.showings);
  const halls = useSelector((state) => state.hallsState.halls);

  const [edited, setEdited] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showing) {
      setLoading(true);
      setEdited(showings.find((u) => u.id === showing));
    }
  }, [showing]);

  useEffect(() => {
    if (edited) {
      setLoading(false);
    }
  }, [edited]);

  return (
    <Modal
      visible={visible}
      onCancel={() => {
        onClose();
        setEdited(null);
      }}
      footer={null}
      title={edited ? <h2>Edit Showing</h2> : <h2>New Showing</h2>}
    >
      {loading ? (
        <Spin />
      ) : (
        <Form
          name={"new-showing"}
          layout={"vertical"}
          initialValues={
            edited
              ? {
                  movie: edited.movieId,
                  hall: edited.hallId,
                  time: moment(edited.time),
                }
              : {}
          }
          onFinish={(val) => {
            if (edited) {
              dispatch(updateShowing(edited.id, val.movie, val.hall, val.time));
              setEdited(null);
            } else {
              dispatch(addShowing(val.movie, val.hall, val.time));
            }
            onClose();
          }}
        >
          <Form.Item name={"movie"} label={"Movie"}>
            <Select>
              {movies &&
                movies.map((movie) => {
                  return (
                    <Select.Option value={movie.id}>
                      {movie.title}
                    </Select.Option>
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
      )}
    </Modal>
  );
};

export default NewShowingModel;
