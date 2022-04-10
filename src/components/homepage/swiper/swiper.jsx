import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Title from "../../base/title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperItem from "./swiperitem";
import "./myswiper.css";

const SwiperSection = (props) => {
  const { allStrapiReviews } = useStaticQuery(graphql`
    query ReviewsQuery {
      allStrapiReviews {
        nodes {
          Author
          Text
          id
        }
      }
    }
  `);
  let info = allStrapiReviews.nodes;

  const SwiperInner = styled.div`
    margin-top: 150px;
    /* max-width: 1736px; */
    padding: 0 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1800px;
    box-sizing: border-box;
  `;

  const SwiperWrapper = styled.div`
    margin-top: 100px;
  `;

  return (
    <SwiperInner>
      <Title text="Отзывы" color="#018ABE" />
      <SwiperWrapper>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {info.map((review) => (
            <SwiperSlide>
              <SwiperItem
                author={review.Author}
                text={review.Text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </SwiperInner>
  );
};

export default SwiperSection;
