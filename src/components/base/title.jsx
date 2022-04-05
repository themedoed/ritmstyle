import * as React from "react";
import styled from "styled-components";

const Title = (props) => {

  const Title = styled.div`
    text-align: center;
    font-size: 42px;
    line-height: 58px;
    font-weight: 700;
    white-space: nowrap;

    svg {
      padding-bottom: 6px;
      margin-left: 40px;
      margin-right: 40px;
    }
  `;

  return (
    <Title>
      <svg
        width="28"
        height="14"
        viewBox="0 0 28 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
          fill={props.color}
        />
      </svg>
      {props.text}
      <svg
        width="28"
        height="14"
        viewBox="0 0 28 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z"
          fill={props.color}
        />
      </svg>
    </Title>
  );
};

export default Title;
