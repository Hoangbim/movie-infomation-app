import React, { useEffect, useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { useFetchMovie } from "../hooks/useFetchMovie";

const opts = {
  height: "400px",
  width: "650px",
  playerVars: {
    autoplay: 1,
  },
};
const MovieDetail = (props) => {
  //tạo biêns nhận url của movie
  const trailerUrl = `/movie/${props.id}/videos?api_key=e8fea289a11fdb723d9c3aaecfb5b1eb`;

  //sử dụng hook useFetchMovie để láy data từ API
  const [movies] = useFetchMovie(trailerUrl);

  console.log(movies);

  //tạo hàm để lấy trailerKey để nạp vào component YouTube, ưu tiên Trailer trước.
  const getTrailerKey = () => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].site === "YouTube" && movies[i].type === "Trailer") {
        console.log(i, movies[i].key);
        return movies[i].key;
      }
    }
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].site === "YouTube" && movies[i].type === "Teaser") {
        console.log(i, movies[i].key);
        return movies[i].key;
      }
    }
  };
  const trailerKey = getTrailerKey();

  let movieTrailer;

  // nếu có trailer hoặc teaser thì hiển thị video
  if (trailerKey) {
    movieTrailer = <YouTube videoId={trailerKey} opts={opts} />;
  }
  // nếu không có trailer hoặc teaser thì hiển thị ảnh banner
  if (!trailerKey) {
    movieTrailer = (
      <img
        src={`https://image.tmdb.org/t/p/w500${props.banner}`}
        alt="Movie Banner"
      />
    );
  }

  return (
    <MovieDetailContainer>
      <MovieContent>
        <h3 className="title">{props.title}</h3>
        <h5 className="releaseDate">{`Release Date: ${props.date}`}</h5>
        <h5 className="vote">{`Vote: ${props.vote}`}</h5>
        <p className="description">{props.description}</p>
      </MovieContent>
      <Trailer>{movieTrailer}</Trailer>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
//styled component
const MovieDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  margin-bottom: 200px;
`;

const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  color: var(--color-white);

  margin-top: auto;
  margin-bottom: auto;

  .title {
    border-bottom: solid red 2px;
    padding: 30px 0 10px 0;
  }

  .releaseDate {
    padding-top: 10px;
  }

  .vote {
    padding-bottom: 10px;
  }
`;
const Trailer = styled.div`
  margin-top: 20px;
`;
