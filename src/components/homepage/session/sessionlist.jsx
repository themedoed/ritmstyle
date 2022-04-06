import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Title from "../../base/title";
import SessionItem from "./session-item";

const SessionList = (props) => {
  const { allStrapiSessions } = useStaticQuery(graphql`
    query SessionQuery {
      allStrapiSessions {
        nodes {
          Img{
            localFile{
              url
            }
          }
          Title
          id
        }
      }
    }
  `);
  let info = allStrapiSessions.nodes;

  const SessionInner = styled.div`
    margin-top: 150px;
  `;

  const SessionItems = styled.div`
    margin-top: 100px;
    width: 1296px;
    display: grid;
    gap: 24px;
    grid-template-columns: 416px 416px 416px;
  `;

  return (
    <SessionInner>
      <Title text="Сеансы RitmStyle" color="#018ABE" />

      <SessionItems>
        {info.map((session) => (
          <SessionItem img={session.Img.localFile.url} title={session.Title} />
        ))}
      </SessionItems>
    </SessionInner>
  );
};

export default SessionList;
