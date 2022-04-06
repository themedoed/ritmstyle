import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import WebFont from "webfontloader";
import "normalize.css";
import Header from "../components/base/header";
import Banner from "../components/homepage/banner";
import SessionList from "../components/homepage/session/sessionlist";
import Footer from "../components/base/footer";

// markup
const IndexPage = () => {
  const { allStrapiHomePage } = useStaticQuery(graphql`
    query MyQuery {
      allStrapiHomePage {
        nodes {
          Banner {
            localFile {
              url
            }
          }
          Logo {
            localFile {
              url
            }
          }
          Slogan
          Title
        }
      }
    }
  `);
  let info = allStrapiHomePage.nodes[0];

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
        <Banner
          img={info.Banner.localFile.url}
          slogan={info.Slogan}
          title={info.Title}
        />
        <SessionList />
      <Footer />
      </PageInner>
    </Page>
  );
};

export default IndexPage;
