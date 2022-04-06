import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Title from "../base/title";
import SessionItem from "../homepage/session/session-item";
import { Link } from "gatsby";

const NewsList = (props) => {
  const { allStrapiNewsItem } = useStaticQuery(graphql`
    query NewsQuery {
      allStrapiNewsItem {
        edges {
          node {
            id
          }
        }
        nodes {
          id
          Date
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
  let info = allStrapiNewsItem.nodes;

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

  const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
  `;
  

  return (
    <SessionInner>
      <Title text="Новости" color="#018ABE" />
      <SessionItems>
        {info.map((newsitem) => (
          <NavLink to={newsitem.id}>
            <SessionItem
              img={newsitem.Img.localFile.url}
              title={newsitem.Title}
              date={newsitem.Date}
            />
          </NavLink>
        ))}
      </SessionItems>
    </SessionInner>
  );
};

export default NewsList;
