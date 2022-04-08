import * as React from "react";
import styled from "styled-components";

const SessionItem = (props) => {
  const SessionItemInner = styled.div`
    position: relative;
    height: 258px;
    width: 416px;
    border-radius: 10px;
    z-index: 100;
    cursor: pointer;
  `;

  const SessionImgHover = styled.div`
    background: linear-gradient(
      0deg,
      rgba(0, 66, 92, 0.61),
      rgba(0, 66, 92, 0.61)
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

  const SessionDate = styled.div`
    position: absolute;
    top: 30px;
    left: 40px;
    padding: 5px 12px 3px; 
    background-color: #018abe;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
  `;

  const SessionImg = styled.img`
    width: 416px;
    height: 258px;
    object-fit: cover;
    border-radius: 10px;
  `;

  const SessionTitle = styled.div`
    position: absolute;
    top: 200px;
    left: 40px;
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    max-width: 336px;
  `;

  return (
    <SessionItemInner>
      <SessionImg src={props.img} />
      <SessionImgHover>
        {props?.date ? <SessionDate>{props.date}</SessionDate> : ""}
        <SessionTitle>{props.title}</SessionTitle>
      </SessionImgHover>
    </SessionItemInner>
  );
};

export default SessionItem;
