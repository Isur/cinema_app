import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, updateMovie } from "../../../../store/Movies/Movies.actions";

const NewMovieModel = ({ visible, onClose, movie }) => {
  const dispatch = useDispatch();
  const [edited, setEdited] = useState(null);
  const [loading, setLoading] = useState(false);

  const movies = useSelector((state) => state.moviesState.movies);

  useEffect(() => {
    if (movie) {
      setLoading(true);
      setEdited(movies.find((u) => u.id === movie));
    }
  }, [movie]);

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
      title={edited ? <h2>Edit Movie</h2> : <h2>New Movie</h2>}
    >
      {loading ? (
        <Spin />
      ) : (
        <Form
          name={"new-movie"}
          layout={"vertical"}
          initialValues={edited && { ...edited }}
          onFinish={(val) => {
            if (edited) {
              dispatch(
                updateMovie(edited.id, val.title, val.year, val.director)
              );
              setEdited(null);
            } else {
              dispatch(addMovie(val.title, val.year, val.director));
            }
            onClose();
          }}
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
      )}
    </Modal>
  );
};

export default NewMovieModel;
