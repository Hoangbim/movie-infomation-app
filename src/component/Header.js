import React from "react";
// lấy icon MdSearch
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import custom hook scrollY
import { useScrollY } from "./hooks/useScrollY";

const Header = (props) => {
  // tạo biến nhận giá trị scrollY từ useScrollY hook
  const [scrollY] = useScrollY();

  return (
    <Navigation>
      <div
        className={
          scrollY > 100 ? "navContainer navBar" : "navContainer transparent"
        }
      >
        <Link to="/" className="linkHome logo">
          Movie App
        </Link>
        <button className="searchButton">
          <Link to="/search">
            <MdSearch className="transparent searchIcon" />
          </Link>
        </button>
      </div>
    </Navigation>
  );
};

export default Header;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 10;

  .navBar {
    background-color: var(--color-background);
  }
  .linkHome {
    text-decoration: none;
    font-size: 40px;
    font-weight: bold;
  }

  .transparent {
    background-color: transparent;
  }

  .navContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 0 20px 0 20px;
    text-align: center;
  }

  .logo {
    color: red;
    cursor: pointer;
    margin: auto 0;
  }

  .searchButton {
    width: 30px;
    height: 30px;
    // background-color: rgba(255, 255, 255, 0);
    background-color: transparent;
    margin: auto 0;
    border: none;

    .searchIcon {
      scale: 3;
      color: var(--color-white);
    }
  }
`;
