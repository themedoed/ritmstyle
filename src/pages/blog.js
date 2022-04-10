import * as React from "react";
import styled from "styled-components";
import WebFont from "webfontloader";
import "normalize.css";
import Header from "../components/base/header";
import Footer from "../components/base/footer";
import BlogList from "../components/blog/bloglist";

const BlogPage = () => {

  WebFont.load({
    google: {
      families: ["El Messiri"],
    },
  });

  const Page = styled.div`
    background-color: #162831;
    min-height: 100vh;
  `;

  const PageInner = styled.div`
    font-family: "El Messiri";
    color: white;
    font-weight: 400;
    font-size: 14px;
    line-height: 35px;
    max-width: 1336px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
  `;

  return (
    <Page>
      <PageInner>
        <Header />
        <BlogList />
        <Footer />
      </PageInner>
    </Page>
  );
};

export default BlogPage;
