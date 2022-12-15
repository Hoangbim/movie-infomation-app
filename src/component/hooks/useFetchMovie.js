import { useState, useEffect } from "react";

export function useFetchMovie(fetchUrl) {
  const [randomMovie, setRandomMovie] = useState("");
  const [movies, setMovies] = useState([]);
  console.log(fetchUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${fetchUrl}`
          //   "https://api.themoviedb.org/3/trending/all/week?api_key=e8fea289a11fdb723d9c3aaecfb5b1eb"
        );

        const data = await res.json();
        const movies = data.results;

        const movieRandom =
          data.results[Math.floor(Math.random() * data.results.length - 1)];

        setMovies(movies);
        setRandomMovie(movieRandom);
      } catch {
        console.log("error");
        //trong trường hợp fetch bị lỗi thì trả về kết quả là rỗng để tránh bug.
        setMovies([]);
      }
    };
    fetchData();
  }, [fetchUrl]);

  return [movies, randomMovie];
}
