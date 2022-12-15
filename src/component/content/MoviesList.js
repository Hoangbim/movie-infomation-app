import React from "react";

import styled from "styled-components";
import { useState } from "react";

import MovieDetail from "./MovieDetail";

const MoviesList = (props) => {
  //taọ biến nhận trạng thái hiển thị của component detail
  const [showDetail, setShowDetail] = useState(false);
  //tạo biến nhận id của phim click vào
  const [curId, setCurId] = useState("");
  //biến nhận dữ liệu của phim được click vào
  const [curMovie, setCurMovie] = useState({});
  //array chứa list phim
  const movies = props.movies;

  function showMovieDetail(e) {
    //xác định id hiện tại của phim được click vào
    const movieId = +e.target.id;
    //lấy dữ liệu của phim được click vào từ list
    const movie = movies[e.target.id];
    console.log(movie);
    //kiểm tra, trường hợp phim được click vào lần nữa thì đặt lại trạng thái hiển thị về false và giá trị về mặc định
    if (curId === movieId) {
      setShowDetail((prev) => {
        return (prev = false);
      });
      setCurId("");
      // setCurMovie({})
    }
    //trường hợp chưa hiển thị detail hoặc đang hiển thị detail phim khác thì đặt giá trị id và dữ liệu về phim hiện tại
    if (curId !== movieId) {
      setCurId(movieId);
      setShowDetail((prev) => {
        return (prev = true);
      });
      setCurMovie(movie);
    }
  }

  return (
    <MoviesContainer>
      <h1 className="heading">{props.type}</h1>
      <MoviesSlider moviesLength={movies.length} movieType={props.type}>
        {props.type === "Originals"
          ? movies.map((movie, i) => (
              <div
                key={i}
                id={movie.id}
                className="movieItem"
                onClick={showMovieDetail}
              >
                <img
                  id={i}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Movie Poster"
                />
              </div>
            ))
          : movies.map((movie, i) => (
              <div
                key={i}
                id={movie.id}
                className="movieItem"
                onClick={showMovieDetail}
              >
                <img
                  id={i}
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="Movie Poster"
                />
              </div>
            ))}
      </MoviesSlider>
      {showDetail && (
        <MovieDetail
          title={curMovie.title || curMovie.name}
          date={curMovie.first_air_date || curMovie.release_date}
          vote={curMovie.vote_count}
          description={curMovie.overview}
          id={curMovie.id}
          banner={curMovie.backdrop_path}
        />
      )}
    </MoviesContainer>
  );
};

export default MoviesList;

const MoviesContainer = styled.div`
  position: relative;
  padding: 0 20px;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 20px;
    user-select: none;
    color: var(--color-white);
    margin-top: 15px;
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 10px;
  //điều chỉnh kích thước của cột theo thể loại phim
  grid-template-columns: repeat(
    ${(props) => props.moviesLength},
    ${(props) => (props.movieType === "Originals" ? "200px" : "300px")}
  );
  transition: all 0.3s linear;
  // transform: translateX 200px;

  overflow-y: hidden;
  overflow-x: auto;
  // overflow: hidden;
  padding-top: 5px;
  scroll-behavior: smooth;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--color-background);
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: var(--color-white);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-white);

    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }

  .movieItem {
    transform: scale(1);
    max-width: 700px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    // user-select: none;
    overflow: hidden;
    // border-radius: 16px;
    transform: center-left;
    position: relative;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      // opacity: 1;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }
`;
