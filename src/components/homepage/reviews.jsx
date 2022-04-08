import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Title from "../base/title";
import SessionItem from "./session/session-item";
import Carousel from 'react-elastic-carousel'

const ReviewsList = (props) => {


  const ReviewsInner = styled.div`
    margin-top: 150px;
  `;

  const ReviesItem = styled.div`
    width: 300px;
    height: 150px;
    background-color: white;
    font-size: 30px;
    line-height: 30px;
    color: black;
  `;

  return (
    <ReviewsInner>
      <Title text="Отзывы" color="#018ABE" />

      <Carousel itemsToShow={3}>
        {/* {info.map((session) => (
          <SessionItem img={session.Img.localFile.url} title={session.Title} />
        ))} */}
      <ReviesItem>1</ReviesItem>
      <ReviesItem>2</ReviesItem>
      <ReviesItem>3</ReviesItem>
      <ReviesItem>4</ReviesItem>

      </Carousel>
    </ReviewsInner>
  );
};

export default ReviewsList;
