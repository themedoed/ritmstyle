import * as React from "react";
import styled from "styled-components";
import WebFont from "webfontloader";
import "normalize.css";
import Header from "../components/base/header";
import Footer from "../components/base/footer";
import NewsList from "../components/news/newslist";

const NewsPage = () => {

  WebFont.load({
    google: {
      families: ["El Messiri"],
    },
  });

  const Page = styled.div`
    background-color: #162831;
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
        <NewsList />
        <Footer />
      </PageInner>
    </Page>
  );
};

export default NewsPage;
