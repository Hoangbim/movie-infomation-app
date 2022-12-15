import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useState } from "react";

const SearchForm = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    const iValue = e.target.value;
    setSearchInput(iValue);
  };
  const submitForm = (e) => {
    e.preventDefault();
    props.submitHandler(searchInput);
  };
  //hàm reset form, xoá dữ liệu nhập, trả về giá trị url khởi tạo

  const resetForm = () => {
    console.log("reset Form!");
    setSearchInput("");

    props.searchReset();
  };
  return (
    <SearchContainer onSubmit={submitForm}>
      <div className="searchInput">
        <input
          type="text"
          onChange={inputChangeHandler}
          value={searchInput}
          id="searchForm"
        />
        <button type="submit">
          <MdSearch className="transparent searchIcon" />
        </button>
      </div>
      <div className="searchButton">
        <button className="buttonSearch" type="submit">
          SEARCH
        </button>
        <button className="resetButton" type="reset" onClick={resetForm}>
          RESET
        </button>
      </div>
    </SearchContainer>
  );
};

export default SearchForm;

const SearchContainer = styled.form`
  background-color: white;
  width: 50%;
  height: 170px;
  position: absolute;
  top: 100px;
  left: 25%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .searchInput {
    height: 70px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid var(--color-button) 2px;
    border-radius: 5px;

    input {
      height: 40px;
      width: 80%;
      margin: auto 10px;
      background-color: transparent;
      border: none;
      //   text-align: center;
      font-size: large;
      padding: 20px;
    }
    button {
      width: 30px;
      height: 30px;

      margin: auto 20px;
      background-color: transparent;
      border: none;

      .searchIcon {
        scale: 3;
        color: var(--color-white);
      }
    }
  }

  .searchButton {
    display: flex;
    flex-direction: row-reverse;
    margin: auto 20px;
    border-radius: 5px;

    button {
      margin-left: 20px;
      width: 70px;
      height: 30px;
      border: none;
      font-weight: bold;
      //   background-color: transparent;
    }
  }
  .buttonSearch {
    background-color: var(--color-button);
    color: white;
  }
  .resetButton {
    background-color: transparent;
  }
`;
