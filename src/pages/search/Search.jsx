import React from "react";
import { useState } from "react";
import Header from "../../component/Header";
import { useFetchMovie } from "../../component/hooks/useFetchMovie";
import ResultsList from "../../component/ResultsList";
import SearchForm from "../../component/SearchForm";

// /trending/all/week?api_key=${API_KEY}&language=en-US

const Search = () => {
  //tạo biến nhận URL path, khởi tạo bằng trending url
  const [searchUrl, setSearchUrl] = useState(
    "/trending/all/week?api_key=e8fea289a11fdb723d9c3aaecfb5b1eb&language=en-US"
    // "movie/550?api_key=e8fea289a11fdb723d9c3aaecfb5b1eb"
  );

  //biến nhận giá trị từ hook useFetchMovie
  const [movies] = useFetchMovie(searchUrl);
  console.log(movies);
  const submitHandler = (data) => {
    const url = `search/movie?api_key=e8fea289a11fdb723d9c3aaecfb5b1eb&query=${data}&language=en-US&page=1&include_adult=false`;
    setSearchUrl(url);
    console.log(searchUrl);
  };
  const searchReset = () => {
    console.log("resetted");
    setSearchUrl(
      "/trending/all/week?api_key=e8fea289a11fdb723d9c3aaecfb5b1eb&language=en-US"
    );
  };

  return (
    <div className="app">
      <Header />
      <SearchForm submitHandler={submitHandler} searchReset={searchReset} />
      <ResultsList searchResults={movies} />
    </div>
  );
};

export default Search;
