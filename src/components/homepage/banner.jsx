import * as React from "react";
import styled from "styled-components";
import Title from "../base/title";

const Banner = (props) => {
  const BannerInner = styled.div`
    height: 600px;
    position: relative;
    margin-top: 50px;
  `;

  const BannerImgHover = styled.div`
    background: linear-gradient(
      0deg,
      rgba(93, 125, 138, 0.664),
      rgba(93, 125, 138, 0.664)
    );
    width: 100%;
    height: 600px;
    position: absolute;
    top: 0;
    border-radius: 10px;
  `;

  const BannerImg = styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 10px;
  `;

  const BannerInfo = styled.div`
    position: absolute;
    max-width: 650px;
    top: 25%;
    left: 27%;
  `;

  const MainTitle = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 64px;
    line-height: 89px;
    max-width: 600px;
    margin: 40px auto 0 auto;
  `;

  return (
    <BannerInner>
      <BannerImg src={props.img} />
      <BannerImgHover></BannerImgHover>
      <BannerInfo>
        <Title text={props.slogan} color="white" />
        <MainTitle>{props.title}</MainTitle>
      </BannerInfo>
    </BannerInner>
  );
};

export default Banner;
