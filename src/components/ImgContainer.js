import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
// import jQuery from "jquery";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

const ImgContainer = () => {
  const items = [
    { id: 1, img: "img1.png" },
    { id: 2, img: "img2.png" },
    { id: 3, img: "img3.png" },
    { id: 4, img: "img2.png" },
    { id: 5, img: "img3.png" },
    { id: 6, img: "img1.png" },
  ];
  return (
    <Wrapper>
      <Carousel itemsToScroll={2} itemsToShow={3}>
        {items.map((item) => {
          return (
            <div className="img-container" key={item.id}>
              <img src={item.img} alt="img-vd" />
            </div>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3vw 0;
  .img-container {
    color: #fff;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin: 2vw;
      width: 30vw;
      height: auto;
    }
  }
`;
export default ImgContainer;
