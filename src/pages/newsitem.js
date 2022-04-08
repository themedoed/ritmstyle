import * as React from "react";
import styled from "styled-components";
import WebFont from "webfontloader";
import "normalize.css";
import Header from "../components/base/header";
import Title from "../components/base/title";
import Footer from "../components/base/footer";

const NewsItemPage = (props) => {
  let info = props.pageContext.node;
  console.log(info.id);

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

  const NewsWrapper = styled.div`
    margin-top: 60px;
  `;

  const SessionDate = styled.div`
    padding: 5px 12px 3px;
    background-color: #018abe;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
  `;

  return (
    <Page>
      <PageInner>
        <Header />
        <NewsWrapper>
          <Title text={info.Title} color="#018ABE" />
          <SessionDate>{info.Date}</SessionDate> 
        </NewsWrapper>
        <Footer />
      </PageInner>
    </Page>
  );
};

export default NewsItemPage;
