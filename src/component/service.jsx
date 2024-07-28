import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

import styled from "styled-components";

const ServiceWrap = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px 0;
  .textWrap {
    margin: 80px 0 40px 0;
    text-align: center;
    .title {
      color: #111;
      font-family: Pretendard;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 40px;
    }
    .subTitle {
      color: #6b7684;
      font-family: Pretendard;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 45px */
      letter-spacing: 0.45px;
      margin-bottom: 80px;
    }
  }
  ul {
    display: flex;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.05);
    padding: 15px 20px;
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
    border-radius: 80px;
    box-shadow: -2px 4px 30px 0px rgba(139, 138, 138, 0.25);
  }
  .swiperCarousel {
    height: 60vh;
    position: relative;
    .sliderContent {
      position: relative;
      height: calc(100% - 30px);
      .sliderContentText {
        position: absolute;
        top: 80px;
        left: 80px;
        text-align: left;
        h3 {
          color: #00b3ba;
          font-family: Pretendard;
          font-size: 26px;
          font-style: normal;
          font-weight: 700;
        }
        h4 {
          font-size: 34px;
          margin: 0;
        }
        p {
          color: #6b7684;
          font-family: Pretendard;
          font-size: 26px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0.45px;
          text-align: left;
        }
      }
    }
  }
`;

const ServiceList = styled.li`
  letter-spacing: 0.28px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #b3b3b3;
  margin-right: 20px;
  background-color: #fff;
  cursor: pointer;
  ${(props) =>
    props.isSelected &&
    `
    color: #00B3BA;
    font-weight: bold;
    border-color: #00B3BA;
  `}
`;


const Service = () => {
  const [index, setIndex] = useState(0);
  const [selectedList, setSelectedList] = useState(0);
  const swiperRef = useRef(null);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    setSelectedList(selectedIndex);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(selectedIndex);
    }
  };
  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
  };


  return (
    <ServiceWrap>
      <div className="textWrap">
        <p className="title">
          가은메디케어만의 <span className="mint">특별한</span> 서비스
        </p>
        <p className="subTitle">
          기기설치부터 정기방문서비스와 서류관리까지
          <br /> 가은메디케어만의 ONE-STOP 서비스를 느껴보세요.
        </p>
        <ul>
          <ServiceList
            isSelected={index === 0}
            onClick={() => handleSelect(0)}
          >
            설치방문
          </ServiceList>
          <ServiceList
            isSelected={index === 1}
            onClick={() => handleSelect(1)}
          >
            무료지원
          </ServiceList>
          <ServiceList
            isSelected={index === 2}
            onClick={() => handleSelect(2)}
          >
            무상제공
          </ServiceList>
          <ServiceList
            isSelected={index === 3}
            onClick={() => handleSelect(3)}
          >
            할인제도
          </ServiceList>
          <ServiceList
            isSelected={index === 4}
            onClick={() => handleSelect(4)}
          >
            서류대행 및 관리
          </ServiceList>
          <ServiceList
            isSelected={index === 5}
            onClick={() => handleSelect(5)}
          >
            정기정검 관리
          </ServiceList>
          <ServiceList
            isSelected={index === 6}
            onClick={() => handleSelect(6)}
          >
            24시간
            <br />
            고객대응
          </ServiceList>
        </ul>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={
          {
           delay: 4000,
            disableOnInteraction: false,
          }
        }
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        ref={swiperRef}
      >
        <SwiperSlide className="swiperCarousel">
          <div className="sliderContent">
            <img src="/asset/sercive content (5).png" />
            <div className="sliderContentText">
              <h3>설치 방문</h3>
              <h4>고객맞춤 설치 방문</h4>
              <p>
                고객이 원하는 시간대에 방문하여 기기 설치를 진행하고
                <br /> 기기 사용방법에 대한 교육을 진행해 드립니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCarousel">
          <div className="sliderContent">
            <img src="/asset/sercive content (6).png" />
            <div className="sliderContentText">
              <h3>무료 지원</h3>
              <h4>산소 포화도 측정기 무료 지원</h4>
              <p>
                주기적인 산소포화도 측정이 필요한 환자분들께
                <br />
                휴대용 산소포화도 측정기를 지원해 드립니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCarousel">
          <div className="sliderContent">
            <img src="/asset/sercive content (7).png" />
            <div className="sliderContentText">
              <h3>무상 제공</h3>
              <h4>각종 소모품 무상 제공</h4>
              <p>다양한 소모품을 무상으로 지원해 드리고 있습니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCarousel">
          <div className="sliderContent">
            <img src="/asset/sercive content (8).png" />
            <div className="sliderContentText">
              <h3>할인 제도</h3>
              <h4>전기 요금 할인 제도 신청</h4>
              <p>
                매월 30%의 전기 요금을 할인받을 수 있는 <br />
                생명유지 장치 할인 요금제 신청을 대행하고 있습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCarousel">
          <div className="sliderContent">
            <img src="/asset/sercive content (9).png" />
            <div className="sliderContentText">
              <h3>서류 대행 및 관리</h3>
              <h4>모든 서류 대행 및 관리</h4>
              <p>
                건강보험 급여 대상자 등록, 요양비 청구 등<br />
                치료에 관련된 서류작업을 대행해 드립니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCarousel">
          <div className="sliderContent">
            <img src="/asset/sercive content (10).png" />
            <div className="sliderContentText">
              <h3>정기점검</h3>
              <h4>정기점검 관리</h4>
              <p>
                기기 유지관리를 위해 정기적으로 방문하여
                <br />
                기기 상태를 관리하고 있습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCarousel">
          <div className="sliderContent">
            <img src="/asset/sercive content (11).png" />
            <div className="sliderContentText">
              <h3>24시간 고객 대응</h3>
              <h4>24시간 고객 대응 센터 운영</h4>
              <p>
                기기 이용 중 문제 발생 시 즉각 대응이 가능한
                <br />
                24시간 고객 대응 센터를 운영하고 있습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ServiceWrap>
  );
};

export default Service;
