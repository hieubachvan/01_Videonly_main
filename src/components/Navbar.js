import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/context";

const Nav = () => {
  const { isSidebarOpen, openSidebar } = useProductsContext();
  // console.log(isSidebarOpen);
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
        </div>
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
  .hero-image {
    background-image: url("https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260");
    background-color: #cccccc;
    height: 50vw;
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
    justify-content: space-between;
    padding: 2vw 20vw;
  }
  .nav-header {
    align-items: center;
    .btn {
      font-size: 2vw;
      font-weight: bold;
    }
  }
  .btn {
    color: var(--whitey-90pc);
  }
  .nav-btn {
    .btn {
      background-color: transparent;
      border: 1.6px solid var(--whitey-90pc);
      margin-left: 4vw;
      font-weight: 500;
      width: 9vw;
      font-size: 1.5vw;
      border-radius: 8px;
    }
    .btn.active {
      background-color: var(--peach);
      border-color: var(--peach);
    }
  }
`;

export default Nav;
