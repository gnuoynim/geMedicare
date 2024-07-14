import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CompanyMain = styled.div`
  h2 {
  }
  .line {
    width: 100px;
    height: 1px;
    background: #000;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 150px 0;
  }
  .aboutMain {
    position: relative;
    img {
      width: 100%;
    }
    h2 {
      position: absolute;
      top: 0;
      z-index: 10;
      color: #fff;
      font-family: Pretendard;
      font-size: 64px;
      top: 46%;
      left: 19%;
    }
  }

  .tabList {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 20px 0;
    margin-top: 80px;
    text-align: center;
    justify-content: center;
    li {
      padding: 10px 20px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.3s;
      margin-bottom: 150px;
      font-family: Pretendard;
      font-size: 30px;
      &.active {
        border-bottom: 3px solid #00b3ba;
        font-weight: bold;
        color: #00b3ba;
      }
    }
  }

  .tabContent {
    padding: 20px;
    margin-bottom: 80px;
    .aboutGemedicare,
    .greeting {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #333d4b;
      font-family: Pretendard;
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
    }

    .aboutGemedicare {
      display: block;
      > p:nth-of-type(1) {
        @media (max-width: 1919px) {
          font-size: 2rem;
          width: 70%;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    &.greeting {
      display: block;
    }
    .greeting {
      margin-bottom: 320px;
      > p {
        color: #333d4b;
        font-family: Pretendard;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        width: 1180px;

        .mint {
          color: #00b3ba;
        }
      }
      > p:nth-of-type(2) {
        color: #333d4b;
        font-family: Pretendard;
        font-size: 36px;
        font-weight: 400;
        margin: 40px 0;
      }
      > p:nth-of-type(3) {
        color: #333d4b;
        font-family: Pretendard;
        font-size: 36px;
        font-weight: 400;
        text-align: right;
        font-weight: 700;
      }
    }
    .promise {
      > p {
        color: #00b3ba;
        font-family: Pretendard;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 80px;
      }

      ul {
        display: flex;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 450px;
          height: 400px;
          border-radius: 50px;
          border: 5px solid #00b3ba;
          background: #fff;
          text-align: center;
          margin-right: 30px;
        }
      }
    }
  }
`;

const About = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = parseInt(queryParams.get("tab"), 10) || 0;
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <CompanyMain>
      <div className="aboutMain">
        <img src="/asset/Frame 86639.png" alt="About Us" />
        <h2>회사소개</h2>
      </div>
      <ul className="tabList">
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          가은메디케어
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          인사말
        </li>
      </ul>
      <div className="tabContent">
        {activeTab === 0 && (
          <div className="aboutGemedicare">
            <p>
              가은메디케어는 건강보험공단 정식 등록 업체로서, 가정용
              산소발생기와 가정용 인공호흡기 임대 전문업체입니다. 호흡기 질환을
              가진 환자들이 안전하고 편리하게 치료와 삶의 질 향상을 위해 끊임
              없이 노력할 것을 약속 드립니다.
            </p>
            <div className="line"></div>
            <div className="promise">
              <p>가은메디케어의 3대 약속</p>
              <ul>
                <li>
                  <p>고객만족을 최우선으로 한다</p>
                </li>
                <li>
                  <p>
                    철저한 제품 관리를 통해
                    <br /> 환자의 건강증진을 위해 노력한다
                  </p>
                </li>
                <li>
                  <p>
                    신뢰와 정직을 통해
                    <br /> 고객과 함께 성장한다
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="greeting">
            <p>
              가은메디케어는 <span className="mint">신뢰</span>와{" "}
              <span className="mint">정직</span>을 약속드립니다.
            </p>
            <p>
              저희 가은메디케어는 홈케어 서비스를 제공하는 기업으로서
              <br />
              가정용 산소발생기 임대 서비스와, 가정용 인공호흡기 임대서비스를
              제공하고 있으며
              <br /> 전 구성원이 환자를 내 가족이라는 생각으로 책임감 있고
              진실한 마음으로
              <br /> 최선을 다하는 기업이 되도록 노력하겠습니다 감사합니다.
            </p>
            <p>가은메디케어 임직원 일동</p>
          </div>
        )}
      </div>
    </CompanyMain>
  );
};

export default About;
