import * as React from "react";
import styled from "styled-components";

const AboutItem = (props) => {
  const AboutItemInner = styled.div`
    min-height: 465px;
  `;

  const AboutImg = styled.img`
    width: 526px;
    height: 365px;
    object-fit: cover;
    border-radius: 10px;
    float: right;
    margin-left: 100px;
  `;

  const AboutInfo = styled.div`
    padding-top: 50px;
  `;

  const AboutTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  `;

  const AboutText = styled.div`
    margin-top: 30px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  `;

  return (
    <AboutItemInner>
      <AboutImg className="about-img" src={props.img} />
      <AboutInfo>
        <AboutTitle>{props.title}</AboutTitle>
        <AboutText>{props.text}</AboutText>
      </AboutInfo>
    </AboutItemInner>
  );
};

export default AboutItem;
