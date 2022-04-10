import * as React from "react";
import styled from "styled-components";
import Button from "../base/button";
import { Link } from "gatsby";

const BlogItem = (props) => {
  const BlogItemInner = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #018abe;
    border-radius: 10px;
    padding: 50px 60px;
  `;

  const BlogImg = styled.img`
    width: 564px;
    height: 430px;
    object-fit: cover;
    border-radius: 10px;
  `;

  const BlogInfo = styled.div`
    max-width: 564px;
  `;

  const BlogDate = styled.div`
    display: inline-block;
    padding: 5px 12px 3px;
    background-color: #018abe;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
  `;

  const BlogTitle = styled.div`
    margin-top: 30px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  `;

  const BlogText = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    -webkit-line-clamp: 9;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;

  const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
  `;

  return (
    <BlogItemInner>
      <BlogImg src={props.img} />
      <BlogInfo>
        <BlogDate>{props.date}</BlogDate>
        <BlogTitle>{props.title}</BlogTitle>
        <BlogText>{props.text}</BlogText>
        <NavLink to={props.id}>
          <Button text="Читать статью" />
        </NavLink>
      </BlogInfo>
    </BlogItemInner>
  );
};

export default BlogItem;
