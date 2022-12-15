import React from "react";

import styled from "styled-components";

const Intro = (props) => {
  return (
    <Introduction
      backgroundImg={`https://image.tmdb.org/t/p/w500${props.image}`}
    >
      {/* <img src={props.image} alt="banner image" className="bannerImg" /> */}
      <div className="bannerContent">
        <h1>{props.name}</h1>
        <div className="bannerButton">
          <button>Play</button>
          <button>My list</button>
        </div>
        <p className="description">{props.description}</p>
      </div>
    </Introduction>
  );
};

export default Intro;

const Introduction = styled.div`
  margin: 0;
  height: 500px;
  background-image: url("${(props) => props.backgroundImg}");
  background-size: 100%;
  position: relative;

  .bannerImg {
    width: 100%;
    height: 300px;
    position: relative;
  }

  .bannerContent {
    position: absolute;
    top: 200px;
    left: 20px;
    color: white;

    & button {
      width: 100px;
      height: 30px;
      margin: 10px 20px 10px 0;
      border-radius: 4px;
      background-color: rgb(200, 200, 200);
      border: none;
    }

    & p {
      width: 450px;
    }
  }

  //   .description {
  //     position: absolute;
  //     top
  //   }
`;
