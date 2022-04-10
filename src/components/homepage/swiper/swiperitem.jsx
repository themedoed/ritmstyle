import * as React from "react";
import styled from "styled-components";

const SwiperItem = (props) => {
  const SwiperItemInner = styled.div`
  height: 196px;
  width: 410px;
  padding: 40px 45px;
  background-color: #018ABE;
  border-radius: 10px;
  transition: all .5s;
  `;

  const SwiperItemAuthor = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  `;

  const SwiperItemText = styled.div`
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    margin-top: 15px;
  `;

  return (
    <SwiperItemInner className="revies-slide">
      <SwiperItemAuthor className="revies-slide-author">{props.author}</SwiperItemAuthor>
      <SwiperItemText className="revies-slide-text">{props.text}</SwiperItemText>
    </SwiperItemInner>
  );
};

export default SwiperItem;
