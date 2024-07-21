import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

const ProductMain = styled.div`
background: linear-gradient(180deg, #FFF 36.58%, rgba(205, 233, 240, 0.50) 100%), #FFF;
  .productMain {
    position: relative;

    img {
      width: 100%;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 19%;
      z-index: 10;
      color: #333d4b;
      font-family: Pretendard;
      font-size: 64px;
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
      cursor: pointer;

      &.active {
        border-bottom: 3px solid #00b3ba;
        font-weight: bold;
        color: #00b3ba;
      }
    }
  }
  .tabContent {
    .homeOxygen {
      height: 190vh;
    }
    .tabTitle {
      color: #00b3ba;
      font-family: Pretendard;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 80px;
      margin-left: 7vw;
    }
    .homeOxygen {
      margin: 0 3%;
      ul {
        width: 1150px;
        display: grid;
        gap: 70px;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        margin-left: 0;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1919px) {
          width: 70%;
          margin-left: 0;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      li {
        position: relative;
        cursor: pointer;
        left: 0;
        width: 610px;
        height: 765px;
        padding: 50px 40px;
        border-radius: 50px;
        /*border: 3px solid rgba(0, 0, 0, 0.05);*/
        background: linear-gradient(
          161deg,
          rgba(255, 255, 255, 0.3) 7.16%,
          rgba(255, 255, 255, 0.6) 95.23%
        );
        box-shadow: 1px 2px 30px 0px rgba(0, 0, 0, 0.1);
        img {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          height: 350px;
          @media (max-width: 1919px) {
            height: 300px;
          }
        }
        @media (max-width: 1919px) {
          width: 30vw;
          padding: 25px 20px;
          height: auto;
        }
        .applied {
          display: inline-block;
          color: #00b3ba;
          font-family: Pretendard;
          font-size: 14px;
          padding: 8px 16px;
          border-radius: 99px;
          border: 2px solid #00b3ba;
          background: rgba(0, 179, 186, 0.1);
        }
        .title {
          color: #333;
          text-align: left;
          font-family: Pretendard;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          margin: 20px 0;
          .subTitle {
            color: #333;
            text-align: center;
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
        .description {
          color: #333;
          font-family: Pretendard;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
        }
      }
    }
  }
  .homeOxygen.ventilator {
    height: 109vh;
  }
  .homeOxygen {
    height: 109vh;
  }
  .homeOxygen li:hover .explain {
    opacity: 1;
    visibility: visible;
  }
  .explain {
    /* display: none;*/
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 610px;
    height: 765px;
    border-radius: 50px;
    padding: 50px 40px;
    background-color: #fff;
    border: 3px solid rgba(0, 179, 186, 0.1);
    background: #fff;
    @media (max-width: 1919px) {
      width: 30vw;
      padding: 25px 20px;
      height: 100%;
    }
    .explainText {
      position: relative;
      z-index: 100;
      > .description {
        margin-bottom: 30px;
      }
      dl {
        dt {
          margin-bottom: 20px;
          color: #333;
          font-family: Pretendard;
          font-size: 22px;
          display: flex;
          align-items: center;
        }
        dt::before {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 99px;
          background: #00b3ba;
          margin-right: 20px;
        }
      }
    }
  }
  .explain::after {
    content: "";
    display: block;
    position: absolute;
    width: 610px;
    height: 765px;
    top: 0;
    left: 0;
    border-radius: 50px;
    background: linear-gradient(
      161deg,
      rgba(255, 255, 255, 0.2) 7.16%,
      rgba(0, 179, 186, 0.08) 95.23%
    );
    @media (max-width: 1919px) {
      width: 30vw;

      padding: 25px 20px;
      height: 100%;
    }
  }
`;

const ProductInfo = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = parseInt(queryParams.get("tab"), 10) || 0;
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <ProductMain>
      <div className="productMain">
        <img src="/asset/Frame 86640.png" alt="About Us" />
        <h2>제품정보</h2>
      </div>
      <ul className="tabList">
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          전체보기
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          가정용산소발생기
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          휴대용산소발생기
        </li>
        <li
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          인공호흡기
        </li>
        <li
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          기타제품
        </li>
      </ul>
      <div className="tabContent">
        {activeTab === 0 && (
          <div className="productTabContainer">
            <div className="homeOxygen">
              <p className="tabTitle">가정용산소발생기</p>
              <ul>
                <li>
                  <img src="/asset/EverFlo.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      필립스 에버플로
                      <span className="subTitle">EverFlo</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        필립스 에버플로
                        <span className="subTitle">EverFlo</span>
                      </p>
                      <p className="description">
                        고유의 내구성과 아날로그 제어 방식으로 장애물을
                        최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                      </p>
                      <dl>
                        <dt>산소유량 1~5 LPM</dt>
                        <dt>산소순도 93±3%</dt>
                        <dt>무게 15kg</dt>
                        <dt>사이즈(mm) 580(높이) x 380(너비) x 240(두께)</dt>
                        <dt>소음 43dB 이내</dt>
                        <dt>소비전력 300W</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/Krober4.0.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      크로버 4.0
                      <span className="subTitle">Kröber 4.0</span>
                    </p>
                    <p className="description">
                      세밀한 산소 유량을 디지털 조절하여 <br />
                      소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        크로버 4.0
                        <span className="subTitle">Kröber 4.0</span>
                      </p>
                      <p className="description">
                      전자식 유량조절과 함께 31db의 저소음에 장점이 있어 신생아 사용시 매우 적합한 모델로 설계되었습니다. 
                      </p>
                      <dl>
                        <dt>산소유량 0.1~5 LPM</dt>
                        <dt> 4LPM 미만93±3%/4LPM 이상90±3%</dt>
                        <dt>무게 16kg</dt>
                        <dt>소음 31dB 이내</dt>
                        <dt>소비전력 280W</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/VitaOxy510.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      비타옥시 510
                      <span className="subTitle">VitaOxy 510</span>
                    </p>
                    <p className="description">
                    쉬운 인터페이스 설계와 함께 기기사용의 편리함을 추구하며, 익숙한 아날로그 제어방식까지 갖추고 있어 사용의 편리함을 추구하고 있습니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        비타옥시 510
                        <span className="subTitle">VitaOxy 510</span>
                      </p>
                      <p className="description">
                      쉬운 인터페이스 설계와 함께 기기사용의 편리함을 추구하며, 익숙한 아날로그 제어방식까지 갖추고 있어 사용의 편리함을 추구하고 있습니다.
                      </p>
                      <dl>
                        <dt>산소유량 1~5 LPM</dt>
                        <dt>산소순도 93±3%</dt>
                        <dt>무게 14.2kg</dt>
                        <dt>소음 43dB 이내</dt>
                        <dt>소비전력 290W</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/VitaOxy540.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      비타옥시 540
                      <span className="subTitle">VitaOxy 540</span>
                    </p>
                    <p className="description">
                    기기사용의 편리함에 포커스를 맞춘 설계와 함께 쉬운 제어방식으로 기기사용의 어려움을 최소화 하였으며 저유량 및 고유랑 모두 사용 가능합니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        비타옥시 540
                        <span className="subTitle">VitaOxy 540</span>
                      </p>
                      <p className="description">
                      기기사용의 편리함에 포커스를 맞춘 설계와 함께 쉬운 제어방식으로 기기사용의 어려움을 최소화 하였으며 저유량 및 고유랑 모두 사용 가능합니다.
                      </p>
                      <dl>
                        <dt>산소유량 1~5 LPM</dt>
                        <dt>산소순도 93±3%</dt>
                        <dt>무게 14.2kg</dt>
                        <dt>소음 43dB 이내</dt>
                        <dt>소비전력 290W</dt>
                      </dl>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="homeOxygen">
              <p className="tabTitle">휴대용산소발생기</p>
              <ul>
                <li>
                  <img src="/asset/Le02.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      레오투(휴대용)
                      <span className="subTitle">Le02</span>
                    </p>
                    <p className="description">
                    휴대용 모델 중 가벼운 무게로 설계되었으며 (소형 및 경량) 직관적인 인터페이스를 갖추었으며 흡입모드시 1~3단계로 설계되었습니다. 높은 순도를 자랑하고 있습니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        레오투(휴대용)
                        <span className="subTitle">Le02</span>
                      </p>
                      <p className="description">
                      휴대용 모델 중 가벼운 무게로 설계되었으며 (소형 및 경량) 직관적인 인터페이스를 갖추었으며 흡입모드시 1~3단계로 설계되었습니다. 높은 순도를 자랑하고 있습니다.
                      </p>
                      <dl>
                        <dt>산소순도 90±3%</dt>
                        <dt>무게 1.2kg</dt>
                        <dt>사이즈(mm) 178(높이) x 221(너비) x 68(두께)</dt>
                        <dt>소음 55dB 이내</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/P2.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      P2
                      <span className="subTitle">P2</span>
                    </p>
                    <p className="description">
                    간단한 조작과 함께 편리한 휴대성에 강점을 갖고 있으며, 사용가능시간 및 배터리 잔량 표시 등 사용자에게 편리한 인터페이스를 제공하고 있습니다. 흡입모드시 1~5단계로 조절이 가능합니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        P2
                        <span className="subTitle">P2</span>
                      </p>
                      <p className="description">
                      간단한 조작과 함께 편리한 휴대성에 강점을 갖고 있으며, 사용가능시간 및 배터리 잔량 표시 등 사용자에게 편리한 인터페이스를 제공하고 있습니다. 흡입모드시 1~5단계로 조절이 가능합니다.
                      </p>
                      <dl>
                        <dt>산소단계 1~5단계</dt>
                        <dt>1단계 최대 4시간</dt>
                        <dt>무게 1.98kg</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/p2-s4.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      P2-S4
                      <span className="subTitle"> P2-S4</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        P2-S4
                        <span className="subTitle"> P2-S4</span>
                      </p>
                      <p className="description">
                        고유의 내구성과 아날로그 제어 방식으로 장애물을
                        최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                      </p>
                      <dl>
                        <dt>산소순도 93±3%</dt>
                        <dt>산소단계 1~4단</dt>
                        <dt>배터리 2단기준 약 4시간</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/VitaOxy530.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      비타옥시 530
                      <span className="subTitle">VitaOxy 530</span>
                    </p>
                    <p className="description">
                    직관적인 인터페이스 구성과 함께 내구성에 초점을 맞춘 설계와 기기 가동시 1~6단계의 조절이 가능합니다. 
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        비타옥시 530
                        <span className="subTitle">VitaOxy 530</span>
                      </p>
                      <p className="description">
                      직관적인 인터페이스 구성과 함께 내구성에 초점을 맞춘 설계와 기기 가동시 1~6단계의 조절이 가능합니다. 
                      </p>
                      <dl>
                        <dt>산소순도 93±3%</dt>
                        <dt>사이즈(mm) 220(높이) x 223(너비) x 82(두께)</dt>
                        <dt>무게 14.2kg</dt>
                        <dt>소비전력 110W</dt>
                      </dl>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="homeOxygen ventilator">
              <p className="tabTitle">인공호흡기</p>
              <ul>
                <li>
                  <img src="/asset/ASTRAL 100.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      아스트롤 100
                      <span className="subTitle">ASTRAL 100</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        아스트롤 100
                        <span className="subTitle">ASTRAL 100</span>
                      </p>
                      <p className="description">
                        고유의 내구성과 아날로그 제어 방식으로 장애물을
                        최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                      </p>
                      <dl>
                        <dt>
                          적용환자 : 소아~성인 침습적(기도절개) 혹은
                          비침습적(마스크)적용가능
                        </dt>
                        <dt>터치스크린, 자동누출관리, 이상적 흡기시간</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/Trilogy Evo.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      필립스 Trilogy Evo
                      <span className="subTitle">Trilogy Evo</span>
                    </p>
                    <p className="description">
                      세밀한 산소 유량을 디지털 조절하여 <br />
                      소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        필립스 Trilogy Evo
                        <span className="subTitle">Trilogy Evo</span>
                      </p>
                      <p className="description">
                        고유의 내구성과 아날로그 제어 방식으로 장애물을
                        최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                      </p>
                      <dl>
                        <dt>
                          {" "}
                          적용환자 : 소아~성인 침습적(기도절개) 혹은
                          비침습적(마스크)적용가능
                        </dt>
                        <dt>8인치 풀터치스크린 컬러LED</dt>
                        <dt>무게 3.2kg</dt>
                      </dl>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="homeOxygen">
              <p className="tabTitle">기타</p>
              <ul>
                <li>
                  <img src="/asset/넬코 베드사이드.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      넬코 베드사이드
                      <span className="subTitle">넬코 베드사이드</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                  </div>
                  <div className="explain">
                    <div className="explainText">
                      <span className="applied">건강보험 적용제품</span>
                      <p className="title">
                        넬코 베드사이드
                        <span className="subTitle">
                          넬코 베드사이드
                        </span>
                      </p>
                      <p className="description">
                        고유의 내구성과 아날로그 제어 방식으로 장애물을
                        최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                      </p>
                      <dl>
                        <dt>
                          적용환자 :산소포화도 & 맥박수 측정 미숙아, 소아, 성인
                          적용
                        </dt>
                        <dt>내장형 배터리 최대 8시간</dt>
                        <dt>무게 1.68kg</dt>
                      </dl>
                    </div>
                  </div>
                </li>
                <li>
                  <img src="/asset/YK-80B.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      YK-80B
                      <span className="subTitle">
                        {" "}
                        YK-80B(휴대용 산소포화도 측정기)
                      </span>
                    </p>
                    <p className="description">
                      세밀한 산소 유량을 디지털 조절하여 <br />
                      소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                    </p>
                  </div>
                </li>
                <li>
                  <img src="/asset/Pc-60A.png" />
                  <div>
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      Pc-60A
                      <span className="subTitle">
                        {" "}
                        Pc-60A(휴대용 산소포화도 측정기)
                      </span>
                    </p>
                    <p className="description">
                      세밀한 산소 유량을 디지털 조절하여 <br />
                      소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="homeOxygen">
            <p className="tabTitle">가정용산소발생기</p>
            <ul>
              <li id="EverFlo">
                <img src="/asset/EverFlo.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    필립스 에버플로
                    <span className="subTitle">EverFlo</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      필립스 에버플로
                      <span className="subTitle">EverFlo</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소유량 1~5 LPM</dt>
                      <dt>산소순도 93±3%</dt>
                      <dt>무게 15kg</dt>
                      <dt>사이즈(mm) 580(높이) x 380(너비) x 240(두께)</dt>
                      <dt>소음 43dB 이내</dt>
                      <dt>소비전력 300W</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <img src="/asset/Krober4.0.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    크로버 4.0
                    <span className="subTitle">Kröber 4.0</span>
                  </p>
                  <p className="description">
                    세밀한 산소 유량을 디지털 조절하여 <br />
                    소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      크로버 4.0
                      <span className="subTitle">Kröber 4.0</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소유량 0.1~5 LPM</dt>
                      <dt> 4LPM 미만93±3%/4LPM 이상90±3%</dt>
                      <dt>무게 16kg</dt>
                      <dt>소음 31dB 이내</dt>
                      <dt>소비전력 280W</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li id="VitaOxy540" >
                <img src="/asset/VitaOxy510.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    비타옥시 510
                    <span className="subTitle">VitaOxy 510</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      비타옥시 510
                      <span className="subTitle">VitaOxy 510</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소유량 1~5 LPM</dt>
                      <dt>산소순도 93±3%</dt>
                      <dt>무게 14.2kg</dt>
                      <dt>소음 43dB 이내</dt>
                      <dt>소비전력 290W</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <img src="/asset/VitaOxy540.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    비타옥시 540
                    <span className="subTitle">VitaOxy 540</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      비타옥시 540
                      <span className="subTitle">VitaOxy 540</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소유량 1~5 LPM</dt>
                      <dt>산소순도 93±3%</dt>
                      <dt>무게 14.2kg</dt>
                      <dt>소음 43dB 이내</dt>
                      <dt>소비전력 290W</dt>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 2 && (
          <div className="homeOxygen">
            <p className="tabTitle">휴대용산소발생기</p>
            <ul>
              <li>
                <img src="/asset/Le02.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    레오투(휴대용)
                    <span className="subTitle">Le02</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      레오투(휴대용)
                      <span className="subTitle">Le02</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소순도 90±3%</dt>
                      <dt>무게 1.2kg</dt>
                      <dt>사이즈(mm) 178(높이) x 221(너비) x 68(두께)</dt>
                      <dt>소음 55dB 이내</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <img src="/asset/P2.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    P2
                    <span className="subTitle">P2</span>
                  </p>
                  <p className="description">
                    세밀한 산소 유량을 디지털 조절하여 <br />
                    소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      P2
                      <span className="subTitle">P2</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소단계 1~5단계</dt>
                      <dt>1단계 최대 4시간</dt>
                      <dt>무게 1.98kg</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <img src="/asset/p2-s4.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    P2-S4
                    <span className="subTitle"> P2-S4</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      P2-S4
                      <span className="subTitle"> P2-S4</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소순도 93±3%</dt>
                      <dt>산소단계 1~4단</dt>
                      <dt>배터리 2단기준 약 4시간</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <img src="/asset/VitaOxy530.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    비타옥시 530
                    <span className="subTitle">VitaOxy 530</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      비타옥시 530
                      <span className="subTitle">VitaOxy 530</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>산소순도 93±3%</dt>
                      <dt>사이즈(mm) 220(높이) x 223(너비) x 82(두께)</dt>
                      <dt>무게 14.2kg</dt>
                      <dt>소비전력 110W</dt>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 3 && (
          <div className="homeOxygen ventilator">
            <p className="tabTitle">인공호흡기</p>
            <ul>
              <li>
                <img src="/asset/ASTRAL 100.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    아스트롤 100
                    <span className="subTitle">ASTRAL 100</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      아스트롤 100
                      <span className="subTitle">ASTRAL 100</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>
                        적용환자 : 소아~성인 침습적(기도절개) 혹은
                        비침습적(마스크)적용가능
                      </dt>
                      <dt>터치스크린, 자동누출관리, 이상적 흡기시간</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <img src="/asset/Trilogy Evo.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    필립스 Trilogy Evo
                    <span className="subTitle">Trilogy Evo</span>
                  </p>
                  <p className="description">
                    세밀한 산소 유량을 디지털 조절하여 <br />
                    소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      필립스 Trilogy Evo
                      <span className="subTitle">Trilogy Evo</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>
                        {" "}
                        적용환자 : 소아~성인 침습적(기도절개) 혹은
                        비침습적(마스크)적용가능
                      </dt>
                      <dt>8인치 풀터치스크린 컬러LED</dt>
                      <dt>무게 3.2kg</dt>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 4 && (
          <div className="homeOxygen etc">
            <p className="tabTitle">기타</p>
            <ul>
              <li>
                <img src="/asset/넬코 베드사이드.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    넬코 베드사이드
                    <span className="subTitle">넬코 베드사이드</span>
                  </p>
                  <p className="description">
                    고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며,
                    고유량에서도 고순도 산소를 유지합니다.
                  </p>
                </div>
                <div className="explain">
                  <div className="explainText">
                    <span className="applied">건강보험 적용제품</span>
                    <p className="title">
                      넬코 베드사이드
                      <span className="subTitle">넬코 베드사이드</span>
                    </p>
                    <p className="description">
                      고유의 내구성과 아날로그 제어 방식으로 장애물을
                      최소화하며, 고유량에서도 고순도 산소를 유지합니다.
                    </p>
                    <dl>
                      <dt>
                        적용환자 :산소포화도 & 맥박수 측정 미숙아, 소아, 성인
                        적용
                      </dt>
                      <dt>내장형 배터리 최대 8시간</dt>
                      <dt>무게 1.68kg</dt>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <img src="/asset/YK-80B.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    YK-80B
                    <span className="subTitle">
                      {" "}
                      YK-80B(휴대용 산소포화도 측정기)
                    </span>
                  </p>
                  <p className="description">
                    세밀한 산소 유량을 디지털 조절하여 <br />
                    소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                  </p>
                </div>
              </li>
              <li>
                <img src="/asset/Pc-60A.png" />
                <div>
                  <span className="applied">건강보험 적용제품</span>
                  <p className="title">
                    Pc-60A
                    <span className="subTitle">
                      {" "}
                      Pc-60A(휴대용 산소포화도 측정기)
                    </span>
                  </p>
                  <p className="description">
                    세밀한 산소 유량을 디지털 조절하여 <br />
                    소아 및 신생아에게 적합한 최저소음으로 설계되었습니다
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </ProductMain>
  );
};

export default ProductInfo;
