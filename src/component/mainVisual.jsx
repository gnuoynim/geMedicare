import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";

const MainSlider = styled.div`
  .swiper-wrapper {
    position: relative;
  }
  .swiper-slide {
  }
  .title {
    position: absolute !important;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    bottom: 31%;
    text-align: left;
    left: 10%;
    > h3 {
      color: #111;
      font-size: 40px;
    }
    > p {
      font-size: 36px;
      font-weight: 400;
      color: #111;
      font-family: Pretendard;
      font-style: normal;
      font-weight: 400;
      line-height: 58px;
      .mint {
        color: #00849d;
        font-family: Pretendard;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
  .title3 {
   
    line-height: normal;
    position: relative;
    bottom: 12.25rem;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    > h3 {
      color:#fff;
      font-size: 60px;
      font-weight: 700;
      margin-bottom: 25px;
    }
    > p {
      color:#fff;
      font-size: 30px;
      font-weight: 400;
      
    }
  }
  .title2 {
  line-height: normal;
  position: relative;
  bottom: 13.8rem;
  text-align: left;
  > h3 {
    font-size: 40px;
    margin-bottom: 25px;
  }
  > p {
    font-size: 36px;
    font-weight: 400;
    color: #111;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainVisual = () => {
  return (
    <MainSlider>
      <Swiper
        autoplay={{
          //delay: 4000,
          //disableOnInteraction: false,
        }}
        //modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/asset/main3.png" />
          <div className="title">
            <h3>건강보험공단 정식 등록업체</h3>
            <p>편안한 산소치료를 위한<br/>최적의 서비스를 제공합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/asset/main1.png" />
          <div className="title title2">
            <h3>환자분들의 건강 향상,</h3>
            <p>
              보호자분들의 삶의 질 개선
              <br />
              <span className="mint">가은메디케어</span>가 도움 드리겠습니다.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/asset/main2.png" />
          <div className="title title3">
            <h3>건강보험 가입자 월 최대 90% 임대비용 지원</h3>
            <p>가정용 & 휴대용 산소발생기 / 인공호흡기</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </MainSlider>
  );
};

export default MainVisual;
