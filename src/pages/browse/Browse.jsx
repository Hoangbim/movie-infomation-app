import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import MoviesList from "../../component/content/MoviesList";
import Header from "../../component/Header";
import { useFetchMovie } from "../../component/hooks/useFetchMovie";
import Intro from "../../component/Intro";
import TestGit from "../../component/TestGit";

// https://api.themoviedb.org/3/movie/550?api_key=e8fea289a11fdb723d9c3aaecfb5b1eb

// /trending/all/week?api_key=${API_KEY}&language=en-US
const API_KEY = "e8fea289a11fdb723d9c3aaecfb5b1eb";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const initMovie = {
  backdrop_path: "/cl8NLaoztP877hTSYSy6YIUkChF.jpg",
  first_air_date: "2022-09-26",
  genre_ids: [10764],
  id: 210855,
  name: "Now what",
  origin_country: ["BE"],
  original_language: "nl",
  original_name: "Now what",
  overview:
    "7 young people co-house in Antwerp. They are all at the beginning of their adult life and have to decide what that should look like.",
  popularity: 1242.886,
  poster_path: "/89kiLK0S7Rbfjorvhm0vxTAgAH3.jpg",
  vote_average: 4.4,
  vote_count: 5,
};

function Browse() {
  //lấy data các thể loại film từ api, sử dụng useFetchMovie hook
  const [originals, randomMovie] = useFetchMovie(
    requests.fetchNetflixOriginals
  );
  const [trending] = useFetchMovie(requests.fetchTrending);
  const [topRated] = useFetchMovie(requests.fetchTopRated);
  const [actionMovies] = useFetchMovie(requests.fetchActionMovies);
  const [comedyMovies] = useFetchMovie(requests.fetchComedyMovies);
  const [horrorMovies] = useFetchMovie(requests.fetchHorrorMovies);
  const [romanceMovies] = useFetchMovie(requests.fetchRomanceMovies);
  const [documentaries] = useFetchMovie(requests.fetchDocumentaries);
  const [introMovie, setIntroMovie] = useState({});

  useEffect(() => {
    //kiểm tra nếu fetch thành công thì gán introMovie
    if (randomMovie) {
      setIntroMovie(randomMovie);
    }
    // else {
    //   setIntroMovie(initMovie);
    // }
  }, [randomMovie]);

  return (
    <div className="app">
      <Header />
      <TestGit />
      <Intro
        image={introMovie.backdrop_path}
        description={introMovie.overview}
        name={introMovie.name || introMovie.title}
      />
      <MoviesList movies={originals} type="Originals" />
      <MoviesList movies={trending} type="Trending" />
      <MoviesList movies={topRated} type="Top Rated" />
      <MoviesList movies={actionMovies} type="Action" />
      <MoviesList movies={comedyMovies} type="Comedy" />
      <MoviesList movies={horrorMovies} type="Horror" />
      <MoviesList movies={romanceMovies} type="RomanceMovies" />
      <MoviesList movies={documentaries} type="Documentaries" />
    </div>
  );
}

export default Browse;
