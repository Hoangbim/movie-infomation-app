import React from "react";
import styled from "styled-components";
import { useState } from "react";
import MovieDetail from "./content/MovieDetail";
const ResultsList = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [curId, setCurId] = useState("");
  const [curMovie, setCurMovie] = useState({});

  const movies = props.searchResults;

  function showMovieDetail(e) {
    const movieId = +e.target.id;
    console.log(movieId, e.target.movieID);
    const movie = movies[movieId];

    const num = 0;
    if (curId === movieId) {
      setShowDetail((prev) => {
        return (prev = false);
      });
      setCurId("");
      // setCurMovie({})
    }
    if (curId !== movieId) {
      setCurId(movieId);
      setShowDetail((prev) => {
        return (prev = true);
      });
      setCurMovie(movie);
    }
  }

  return (
    <ResultContainer>
      <h3>Search Result</h3>
      <div className="movieDetail">
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
      </div>
      <div className="resultList">
        {props.searchResults.map((movie, i) => (
          <img
            className="movieImg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.id}
            key={i}
            id={i}
            onClick={showMovieDetail}
          />
        ))}
      </div>
    </ResultContainer>
  );
};
export default ResultsList;

const ResultContainer = styled.div`
  padding: 300px 20px 50px 20px;
  color: var(--color-white);

  .movieDetail {
    width: 80%;
    margin: 20px auto;
  }

  .resultList {
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;

    gap: 20px;
    width: 90%;
  }

  .movieImg {
    height: 250px;
    width: 150px;
    border-radius: 6px;
  }
`;
