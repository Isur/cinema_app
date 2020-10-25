import React, { useState } from "react";
import "./MoviePage.styles.scss";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Button, Divider } from "antd";
import ShowingsCarousel from "../MoviesPage/components/ShowingsCarousel/ShowingCarousel.component";
import { PlusCircleFilled } from "@ant-design/icons";
import NewMovieModel from "../MoviesPage/components/NewMovieModal/NewMovieModal.component";

const MoviePage = () => {
  const { id } = useParams();
  const role = useSelector((state) => state.userState.role);

  const [updatingMovie, setUpdatingMovie] = useState(false);
  const [editedMovie, setEditedMovie] = useState(null);

  const movie = useSelector((state) =>
    state.moviesState.movies.find((m) => m.id === id)
  );

  return (
    movie && (
      <div className={"MoviePage"}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <NewMovieModel
            visible={updatingMovie}
            onClose={() => setUpdatingMovie(false)}
            movie={movie.id}
          />
          <h2>{movie.title}</h2>
          {role === "Admin" && (
            <Button
              icon={<PlusCircleFilled />}
              type={"primary"}
              onClick={() => {
                setEditedMovie(movie.id);
                setUpdatingMovie(true);
              }}
            >
              Edit Movie
            </Button>
          )}
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h3>Showings</h3>
        </div>
        <div
          style={{
            height: "35vh",
            overflowX: "auto",
            overflowY: "hidden",
            marginBottom: "1rem",
          }}
        >
          <ShowingsCarousel movie={id} />
        </div>
      </div>
    )
  );
};

export default MoviePage;
