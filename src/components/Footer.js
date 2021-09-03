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
          <li>Home</li>
          <li>Company</li>
          <li>Address</li>
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
  padding: 4rem 14rem;
  ul {
    list-style-type: none;
  }
  .contact-option {
    display: flex;
    li {
      margin-right: 2rem;
      font-size: 1.5rem;
      opacity: 0.7;
    }
  }
  .list {
    display: flex;
  }
  .network {
    margin: 0 0.5rem;
    padding: 4px 9px 7px 9px;
    background-color: #bcc1c8;
    border-radius: 50%;
    a {
      color: var(--white);
    }
  }
`;

export default Footer;
