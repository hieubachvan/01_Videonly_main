import React from "react";
import styled from "styled-components";

import {
  ImYoutube,
  FaFacebookF,
  AiOutlineInstagram,
  SiNetflix,
} from "react-icons/all";

function Footer(props) {
  return (
    <Wrapper>
      <article className="contact">
        <ul className="contact-option">
          <li>예쁜 목소리</li>
          <li>예쁜 목</li>
          <li>쁜 목소리</li>
        </ul>
        <ul className="contact-info">
          <li>예쁜 목소리 예쁜 목소리 목소리 예쁜 목소리</li>
          <li>예쁜 목 예쁜 목소리 목소리 예쁜 목소리</li>
          <li>쁜 목소리 예쁜 목소리 목소리 예쁜 목소리</li>
        </ul>
      </article>
      <div className="social-network">
        <ul className="list">
          <li className="network">
            <a href="https://www.netflix.com/vn/">
              <SiNetflix />
            </a>
          </li>
          <li className="network">
            <a href="https://www.instagram.com/">
              <AiOutlineInstagram />
            </a>
          </li>
          <li className="network">
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
          </li>
          <li className="network">
            <a href="https://www.youtube.com/">
              <ImYoutube />
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 320px;
  background-color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  padding: 3vw 10vw;

  ul {
    list-style-type: none;
  }
  .contact-option {
    display: flex;
    padding: 0;
    li {
      margin-right: 1vw;
      font-size: 1vw;
      opacity: 0.9;
    }
  }
  .contact-info {
    padding: 0;
    opacity: 0.5;
    font-size: 0.8vw;
  }
  .list {
    display: flex;
  }
  .network {
    margin: 0 0.5vw;
    padding: 4px 9px 7px 9px;
    background-color: #bcc1c8;
    border-radius: 50%;
    a {
      color: var(--white);
    }
  }
`;

export default Footer;
