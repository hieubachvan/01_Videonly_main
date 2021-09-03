import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/all";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/context";
import { useState, useRef, useEffect } from "react";

const Nav = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  console.log(toggleSideBar);
  return (
    <Wrapper>
      <div className="hero-image">
        <div className="nav-center">
          <div className="nav-header">
            <button type="button" className="btn">
              Videonly
            </button>
          </div>
          <div className="nav-btn">
            <button type="button" className="btn">
              Login
            </button>
            <button type="button" className="btn active">
              Join
            </button>
          </div>
          <div className="side-btn">
            <button
              onClick={() => setToggleSideBar(!toggleSideBar)}
              className="icon"
            >
              <FiMenu />
            </button>
          </div>
          <div className={`${toggleSideBar ? "sidebar active" : "sidebar"}`}>
            <button type="button" className="btn">
              Login
            </button>
            <hr width="100%" size="4px" />
            <button type="button" className="btn">
              Join
            </button>
          </div>
        </div>
        {/* .................side bar................ */}

        {/* .................side bar................ */}
        <div className="hero-text">
          <p>
            예쁜 목소리'는 수현 <br />
            이를 위한 말 아닐까 예쁜 목소리'는 <br /> 위한 말 아닐까
          </p>
          <h4>예쁜 목소리'는 수현이를 위한 말 아닐까</h4>
          <button type="button" className="btn">
            예쁜
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
.side-btn {
  display: none;
}
.sidebar {
  display: none;
  flex-direction: column;
  background-color: var(--black);
  width: 10vw;
  border-radius:8px;
  position: absolute;
  right: 5%;
  top: 100%;
  hr {
    margin: 0;
    color: var(--white);
    text-align: center;
  }

  button {
    color: var(--white);
    font-size: 2vw;
  }
  .btn:hover {
    background-color: var(--white);
    color: var(--black);
    border-color: var(--black);
  }
}
.sidebar.active {
  display: flex;
}
  .hero-image {
    background-image: url("https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260");

    height: 40vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    p {
      font-size: 3vw;
      margin-bottom: 2vw;
    }
    h4 {
      margin-bottom: 2vw;
      font-size: 1vw;
    }
    .btn {
      background-color: var(--peach);
      margin-left: 1vw;
      font-weight: 500;
      border-radius: 1vw;
      width: 8vw;
      height: 1vw;
      font-size: 1vw;
      padding-bottom: 1.7vw;
    }
    .btn:hover {
      background-color: var(--grapefruit);
      border-color: var(--grapefruit);
      cursor: pointer;
    }
  }
  .nav-center {
    display: flex;
      align-items: center;
    justify-content: space-between;
    padding: 2vw 10vw;
  }
  .nav-header {
    align-items: center;
    .btn {
      font-size: 1.6vw;
      font-weight: bold;
      color: var(--white);
    }
  }
  .btn {
    color: var(--whitey-90pc);
  }
  .nav-btn {
    .btn {
      background-color: transparent;
      border: 1.6px solid var(--whitey-90pc);
      margin-left: 1vw;
      font-weight: 500;
      width: 6vw;
      font-size: 1vw;
      border-radius: 8px;
    }
    .btn.active {
      background-color: var(--peach);
      border-color: var(--peach);
    }
  }
  @media screen and (max-width: 960px) {
   
    .side-btn {
  display: block;
  .icon {
    border:none;
    background-color: var(--white);
  }

  svg {
    font-size: 4vw;

  }
}
    .hero-image {
      background-image: none;
    background-color: var(--light-gray);

    }
    .hero-text {
      text-align: left;
      color: var(--black);
      left: 30%;
    }
    .nav-btn {
      display: none;

    .btn {
      background-color: transparent;
      border: 1.8px solid var(--peach);
      margin-left: 4vw;
      font-weight: 500;
      width: 9vw;
      font-size: 1.5vw;
      border-radius: 8px;
      color: var(--peach);
    }
    .btn.active {
      background-color: var(--peach);
      border-color: var(--peach);
      color: var(--white);
    }
  }
  .nav-center {
    position: relative;
    display: flex;
      align-items: center;
    padding: 1vw 5vw;
    background-color: var(--white);


  }
  .nav-header {
    .btn {
      color: var(--black);

    }
  }
`;

export default Nav;
