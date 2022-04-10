import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Title from "../../base/title";
import AboutItem from "./aboutitem";

const AboutList = (props) => {
  const { allStrapiAbouts } = useStaticQuery(graphql`
    query AboutsQuery {
      allStrapiAbouts {
        nodes {
          Img {
            localFile {
              url
            }
          }
          Text
          Title
        }
      }
    }
  `);
  let info = allStrapiAbouts.nodes;

  const AboutInner = styled.div`
    margin-top: 150px;
  `;

  const AboutItemWrapper = styled.div`
    margin-top: 100px;
    :nth-child(odd) .about-img {
      float: left;
      margin-left: 0;
      margin-right: 100px;
    }
  `;

  return (
    <AboutInner>
      <Title text="Об RitmStyle" color="#018ABE" />
      {info.map((aboutitem) => (
        <AboutItemWrapper>
          <AboutItem
            img={aboutitem.Img.localFile.url}
            title={aboutitem.Title}
            text={aboutitem.Text}
          />
        </AboutItemWrapper>
      ))}
    </AboutInner>
  );
};

export default AboutList;
