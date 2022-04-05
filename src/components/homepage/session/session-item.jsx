import * as React from "react";
import styled from "styled-components";

const SessionItem = (props) => {
  const SessionItemInner = styled.div`
    position: relative;
    height: 258px;
    width: 416px;
    border-radius: 10px;
  `;

  const SessionImgHover = styled.div`
    background: linear-gradient(
      0deg,
      rgba(1, 138, 190, 0.5),
      rgba(1, 138, 190, 0.5)
    );
    height: 258px;
    width: 416px;
    position: absolute;
    top: 0;
    border-radius: 10px;
    
    &:hover {
      height: 251px;
      border-bottom: 7px solid #018abe;
    }
  `;

  const SessionImg = styled.img`
    width: 416px;
    height: 258px;
    object-fit: cover;
    border-radius: 10px;
  `;

  const SessionTitle = styled.div`
    position: absolute;
    bottom: 40px;
    left: 40px;
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    text-align: center;
  `;

  return (
    <SessionItemInner>
      <SessionImg src={props.img} />
      <SessionImgHover></SessionImgHover>
      <SessionTitle>{props.title}</SessionTitle>
    </SessionItemInner>
  );
};

export default SessionItem;
