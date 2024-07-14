import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const ServiceWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 80px 0;
  .textWrap {
    margin: 80px 122px 40px 0;
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
    display: grid;
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    row-gap: 40px;
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
  margin-right: 50px;
  cursor: pointer;
  ${(props) =>
    props.isSelected &&
    `
    color: #00B3BA;
    font-weight: bold;
    border-color: #00B3BA;
  `}
`;

const ServiceCarousel = styled.div`
  /*width: 1035px;*/
  width: 45%;
  height: 100%;
  /*height: 630px;*/
  border-radius: 80px 0px 0px 80px;
  background: #fff;
  box-shadow: -2px 4px 30px 0px rgba(139, 138, 138, 0.25);
  .carousel-indicators {
    top: 0;
    button {
      background: #00b3ba;
      /*height: 15px;*/
      width: 100px;
    }
    button[aria-current="false"] {
      background-color: #dedede;
      color: white;
    }
  }
  img {
    border-radius: 80px 0px 0px 80px;
  }
  .carousel-item {
    img {

      @media (max-width: 1919px) {
        width: auto;
      }
    }
  }
  .carousel-inner {
    border-radius: 80px 0px 0px 80px;
  }
  .serviceContentText {
    position: absolute;
    bottom: 11rem;
    @media (max-width: 1919px) {
      bottom: 7rem;
    }
    h3 {
      color: #00b3ba;
      font-family: Pretendard;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: left;
    }
    h4 {
      color: #333d4b;
      font-family: Pretendard;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 0.8px;
      text-align: left;
      margin: 20px 0 40px 0;
    }
    p {
      color: #6b7684;
      font-family: Pretendard;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.45px;
      text-align: left;
    }
  }
`;

const Service = () => {
  const [index, setIndex] = useState(0);
  const [selectedList, setSelectedList] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    setSelectedList(selectedIndex);
  };

  return (
    <ServiceWrap>
      <div className="textWrap">
        <p className="title">
          가은메디케어만의 <span className="mint">특별한</span> 서비스
        </p>
        <p className="subTitle">
          기기설치부터 정기방문서비스와 서류관리까지
          <br /> 가은메디케어만의 ONE-STOP 서비스를 느껴보세요
        </p>
        <ul>
          <ServiceList
            isSelected={selectedList === 0}
            onClick={() => handleSelect(0)}
          >
            설치방문
          </ServiceList>
          <ServiceList
            isSelected={selectedList === 1}
            onClick={() => handleSelect(1)}
          >
            무료지원
          </ServiceList>
          <ServiceList
            isSelected={selectedList === 2}
            onClick={() => handleSelect(2)}
          >
            무상제공
          </ServiceList>
          <ServiceList
            isSelected={selectedList === 3}
            onClick={() => handleSelect(3)}
          >
            할인제도
          </ServiceList>
          <ServiceList
            isSelected={selectedList === 4}
            onClick={() => handleSelect(4)}
          >
            서류대행 및 관리
          </ServiceList>
          <ServiceList
            isSelected={selectedList === 5}
            onClick={() => handleSelect(5)}
          >
            정기정검 관리
          </ServiceList>
          <ServiceList
            isSelected={selectedList === 6}
            onClick={() => handleSelect(6)}
          >
            24시간
            <br />
            고객대응
          </ServiceList>
        </ul>
      </div>
      <ServiceCarousel>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src="/asset/sercive content (5).png" />
            <Carousel.Caption>
              <div className="serviceContentText">
                <h3>설치방문</h3>
                <h4>고객맞춤 설치 방문</h4>
                <p>
                  고객이 원하는 시간대에 방문하여 기기설치를 진행하고 <br />
                  기기 사용방법에 대한 교육을 진행해드립니다
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/asset/sercive content (6).png" />
            <Carousel.Caption>
              <div className="serviceContentText">
                <h3>무료 지원</h3>
                <h4>산소포화도 측정기 무료 지원</h4>
                <p>
                  주기적인 산소포화도 측정이 필요한 환자분들께
                  <br />
                  휴대용 산소포화도 측정기를 지원 해드립니다
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/asset/sercive content (7).png" />
            <Carousel.Caption>
              <div className="serviceContentText">
                <h3>무상 제공</h3>
                <h4>각종 소모품 무상제공</h4>
                <p>
                  치료를 위해 필요한 다양한 소모품을
                  <br />
                  무상으로 지원해 드리고 있습니다.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/asset/sercive content (8).png" />
            <Carousel.Caption>
              <div className="serviceContentText">
                <h3>할인제도</h3>
                <h4>전기요금 할인제도 신청</h4>
                <p>
                  매월 30%의 전기요금을 할인 받을 수 있는 생명유지장
                  <br />치 할인 요금제 신청을 대행하고 있습니다.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/asset/sercive content (9).png" />
            <Carousel.Caption>
              <div className="serviceContentText">
                <h3>서류대행 및 관리</h3>
                <h4>모든 서류대행 및 관리</h4>
                <p>
                  건강보험 급여대상자 등록, 요양비 청구 등
                  <br />
                  치료에 관련된 서류작업을 대행해 드립니다.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/asset/sercive content (10).png" />
            <Carousel.Caption>
              <div className="serviceContentText">
                <h3>정기점검</h3>
                <h4>정기점검 관리</h4>
                <p>
                  기기 유지관리를 위해 정기적으로 방문하여
                  <br />
                  기기상태를 관리하고 있습니다.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/asset/sercive content (11).png" />
            <Carousel.Caption>
              <div className="serviceContentText">
                <h3>24시간 고객대응</h3>
                <h4>24시간 고객대응센터 운영</h4>
                <p>
                  기기 이용 중 문제 발생시 즉각 대응이 가능한
                  <br />
                  24시간 고객대응센터를 운영하고 있습니다.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </ServiceCarousel>
    </ServiceWrap>
  );
};

export default Service;
