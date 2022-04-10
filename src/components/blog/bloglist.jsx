import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Title from "../base/title";
import BlogItem from "./blogitem";

const BlogList = (props) => {
  const { allStrapiBlogs } = useStaticQuery(graphql`
    query BlogsQuery {
      allStrapiBlogs {
        nodes {
          id
          Date(formatString: "DD.MM.yyyy")
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
  let info = allStrapiBlogs.nodes;

  const SessionInner = styled.div`
    margin-top: 60px;
  `;

  const BlogItems = styled.div`
    margin-top: 60px;
  `;

  const BlogItemWapper = styled.div`
    margin-top: 45px;
  `;

  return (
    <SessionInner>
      <Title text="Блог" color="#018ABE" />

      <BlogItems>
        {info.map((blog) => (
          <BlogItemWapper>
            <BlogItem
              img={blog.Img.localFile.url}
              title={blog.Title}
              text={blog.Text}
              date={blog.Date}
              id={blog.id}
            />
          </BlogItemWapper>
        ))}
      </BlogItems>
    </SessionInner>
  );
};

export default BlogList;
