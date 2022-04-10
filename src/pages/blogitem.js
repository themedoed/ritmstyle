import * as React from "react";
import styled from "styled-components";
import WebFont from "webfontloader";
import "normalize.css";
import Header from "../components/base/header";
import Title from "../components/base/title";
import Footer from "../components/base/footer";

const BlogItemPage = (props) => {
  let info = props.pageContext.node;

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

  const NewsDate = styled.div`
    padding: 5px 12px 3px;
    background-color: #018abe;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    display: inline-block;
  `;

  const NewsInfo = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-top: 23px;
  `;

  const NewsText = styled.div`
   
  `;

  const NewsTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    padding-top: 22px;
    margin-bottom: 30px;
  `;

  const NewsImg = styled.img`
    width: 636px;
    height: 394px;
    object-fit: cover;
    border-radius: 10px;
    float: right;
    margin-left: 70px;
  `;

  return (
    <Page>
      <PageInner>
        <Header />
        <NewsWrapper>
          <Title text={info.Title} color="#018ABE" />
          <NewsDate>{info.Date}</NewsDate>
          <NewsInfo>
            <NewsImg src={info.Img.localFile.url} />
            <NewsText>
              <NewsTitle>{info.Title}</NewsTitle>
              {info.Text}
            </NewsText>
          </NewsInfo>
        </NewsWrapper>
        <Footer />
      </PageInner>
    </Page>
  );
};

export default BlogItemPage;