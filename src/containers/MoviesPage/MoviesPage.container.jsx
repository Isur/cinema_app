import React, { useEffect, useState } from "react";
import "./MoviesPage.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/Movies/Movies.actions";
import { Button, Divider } from "antd";
import MoviesCarousel from "./components/MoviesCarousel/MoviesCarousel.component";
import ShowingsCarousel from "./components/ShowingsCarousel/ShowingCarousel.component";
import { fetchShowings } from "../../store/Showings/Showings.actions";
import { PlusCircleFilled } from "@ant-design/icons";
import NewMovieModel from "./components/NewMovieModal/NewMovieModal.component";
import { fetchHalls } from "../../store/Halls/Halls.actions";
import NewShowingModel from "./components/NewShowingModal/NewShowingModal";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userState.role);

  const [creatingMovie, setCreatingMovie] = useState(false);
  const [creatingShowing, setCreatingShowing] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShowings());
    dispatch(fetchHalls());
  }, []);

  return (
    <div className={"MoviesPage"}>
      <NewMovieModel
        visible={creatingMovie}
        onClose={() => setCreatingMovie(false)}
      />
      <NewShowingModel
        visible={creatingShowing}
        onClose={() => setCreatingShowing(false)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Movies</h2>
        {role === "Admin" && (
          <Button
            icon={<PlusCircleFilled />}
            type={"primary"}
            onClick={() => setCreatingMovie(true)}
          >
            Add Movie
          </Button>
        )}
      </div>
      <Divider />
      <div
        style={{
          height: "35vh",
          overflowX: "auto",
          overflowY: "hidden",
          marginBottom: "1rem",
        }}
      >
        <MoviesCarousel />
      </div>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Showings</h2>
        {role === "Admin" && (
          <Button
            icon={<PlusCircleFilled />}
            type={"primary"}
            onClick={() => setCreatingShowing(true)}
          >
            Add Showing
          </Button>
        )}
      </div>
      <Divider />
      <div
        style={{
          height: "35vh",
          overflowX: "auto",
          overflowY: "hidden",
          marginBottom: "1rem",
        }}
      >
        <ShowingsCarousel />
      </div>
    </div>
  );
};

export default MoviesPage;
