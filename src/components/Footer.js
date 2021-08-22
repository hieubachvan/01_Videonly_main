import React from "react";
import styled from "styled-components";

import {
  AiFillFacebook,
  AiFillInstagram,
  FaTwitterSquare,
} from "react-icons/all";

function Footer(props) {
  return (
    <Wrapper>
      <section className="contact">
        <ul className="contact-option">
          <li>phone: 0852889871</li>
          <li>Fax: 0123818247123</li>
          <li>Email: hieubachvan@email.com</li>
        </ul>
      </section>
      <section className="social-network">
        <a href="https://www.facebook.com/" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <FaTwitterSquare />
        </a>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  margin-bottom: 2rem;
  .social-network {
  }
  svg {
    font-size: 1.8rem;
    margin: 0.5rem;
    color: var(--clr-primary-1);
  }
`;

export default Footer;
