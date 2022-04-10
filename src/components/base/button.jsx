import * as React from "react";
import styled from "styled-components";


const Button = (props) => {
    const Button = styled.div`
      font-weight: 400;
      font-size: 13px;
      line-height: 13px;
      background-color: #018ABE;
      padding: 10px 15px;
      text-align: center;
      border-radius: 3px;
      cursor: pointer;
      transition: all .5s;
      border: 2px solid #018ABE;
      display: inline-block;

      &:hover{
          color: #018ABE;
          background-color: white;
      }
    `;



    return(
        <Button>{props.text}</Button>
    );
};


export default Button;