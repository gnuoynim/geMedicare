import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ProductMain = styled.div`
  background: linear-gradient(
      180deg,
      #fff 36.58%,
      rgba(205, 233, 240, 0.5) 100%
    ),
    #fff;
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
      &:nth-of-type(2) {
        margin-right: 0;
      }
    }
  }
  .tabContent {
    .homeOxygen {
     
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
        width: 100%;
        display: grid;
        grid-template-columns: 400px 400px;
        row-gap: 30px;
        column-gap: 30px;
        margin-left: 0;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;
        padding-bottom: 250px;
        li {
          position: relative;
          cursor: pointer;
          left: 0;
          width: 400px;
          padding: 20px 30px;
          height: 500px;
          border-radius: 50px;
          background: linear-gradient(
            161deg,
            rgba(255, 255, 255, 0.3) 7.16%,
            rgba(255, 255, 255, 0.6) 95.23%
          );
          box-shadow: 1px 2px 30px 0px rgba(0, 0, 0, 0.1);
          margin-right: 50px;
          box-sizing: border-box;
          img {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            @media (max-width: 1919px) {
            }
          }
          @media (max-width: 1919px) {
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
            font-size: 24px;
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
              margin-left: 10px;
            }
          }
          .description {
            color: #333;
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px;
          }
        }
      }
    }
    .homeOxygen.ventilator {
    
    }
    .homeOxygen {
     
    }
    .homeOxygen li:hover .explain {
      opacity: 1;
      visibility: visible;
     
    }
    .explain {
      opacity: 0;
      visibility: hidden;
     
      transition: opacity 0.5s ease, visibility 0.5s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 400px;
      padding: 20px 30px;
      height: 500px;
      border-radius: 50px;
      background-color: #fff;
      border: 3px solid rgba(0, 179, 186, 0.1);
      background: #fff;
      box-sizing: border-box;
      @media (max-width: 1919px) {
       
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
            font-size: 18px;
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
      width: 400px;
      padding: 20px 30px;
      height: 500px;
      top: 0;
      left: 0;
      border-radius: 50px;
      box-sizing: border-box;
      background: linear-gradient(
        161deg,
        rgba(255, 255, 255, 0.2) 7.16%,
        rgba(0, 179, 186, 0.08) 95.23%
      );
      @media (max-width: 1919px) {
      
      }
    }
    #Le02 {
      img {
        width: 65%;
      }
    }
    #P2-S4{
      img{
        width: 80%;
      }
    }
    #VitaOxy530{
      img{
        width: 76%;
      }
    }
    #YK-80B{
      img{
        width: 70%;
      }
    }
    #Pc-60A{
      img{
        width: 75%;
      }
    }
    #P2{
      img{
        width: 90%;
      }
    }
    #homeOxygen5{
      img{
        margin-bottom: -30px;
    margin-top: -30px;
      }
    }
  }
`;

const ProductInfo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = parseInt(queryParams.get("tab"), 10) || 0;
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        window.scrollTo({
          top: elementTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const ProductList = ({ title, products }) => (
    <div className="homeOxygen">
      <p className="tabTitle">{title}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index} id={product.id}>
            <img src={product.img} alt={product.title} />
            <div>
              <span className="applied">건강보험 적용제품</span>
              <p className="title">
                {product.title}
                <span className="subTitle">{product.subTitle}</span>
              </p>
              <p className="description">{product.description}</p>
            </div>
            <div className="explain">
              <div className="explainText">
                <span className="applied">건강보험 적용제품</span>
                <p className="title">
                  {product.title}
                  <span className="subTitle">{product.subTitle}</span>
                </p>
                <p className="description">{product.description}</p>
                <dl>
                  {product.details.map((detail, i) => (
                    <dt key={i}>{detail}</dt>
                  ))}
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const productsData = {
    homeOxygen: [
      {
        id: "EverFlo",
        img: "/asset/EverFlo.png",
        title: "필립스 에버플로",
        subTitle: "EverFlo",
        description:
          "고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며, 고유량에서도 고순도 산소를 유지합니다.",
        details: [
          "산소유량 1~5 LPM",
          "산소순도 93±3%",
          "무게 15kg",
          "사이즈(mm) 580(높이) x 380(너비) x 240(두께)",
          "소음 43dB 이내",
          "소비전력 300W",
        ],
      },
      {
        id: "homeOxygen2",
        img: "/asset/Krober4.0.png",
        title: "크로버 4.0",
        subTitle: "Kröber 4.0",
        description:
          "세밀한 산소 유량을 디지털 조절하여 소아 및 신생아에게 적합한 최저 소음으로 설계되었습니다.",
        details: [
          "산소유량 0.1~5 LPM",
          "4LPM 미만93±3%/4LPM 이상90±3%",
          "무게 16kg",
          "소음 31dB 이내",
          "소비전력 280W",
        ],
      },
      {
        id: "homeOxygen3",
        img: "/asset/VitaOxy510.png",
        title: "비타옥시 510",
        subTitle: "VitaOxy 510",
        description:
          "쉬운 인터페이스 설계와 함께 기기 사용의 편리함을 추구하며, 익숙한 아날로그 제어 방식까지 갖추고 있어 사용의 편리함을 추구하고 있습니다.",
        details: [
          "산소유량 0.1~5 LPM",
          "산소순도 93±3%",
          "무게 14.2kg",
          "소음 43dB 이내",
          "소비전력 290W",
        ],
      },
      {
        id: "homeOxygen4",
        img: "/asset/VitaOxy540.png",
        title: "비타옥시 540",
        subTitle: "VitaOxy 540",
        description:
          "기기 사용의 편리함에 포커스를 맞춘 설계와 함께 쉬운 제어 방식으로 기기 사용의 어려움을 최소화하였으며 저 유량 및 고유량 모두 사용 가능합니다.",
        details: [
          "산소유량 1~5 LPM",
          "산소순도 93±3%",
          "무게 14.2kg",
          "소음 43dB 이내",
          "소비전력 290W",
        ],
      },
      {
        id: "homeOxygen5",
        img: "/asset/킹온 P2-O5E.png",
        title: "킹온 P2-O5E",
        subTitle: "킹온 P2-O5E",
        description:
          "저 소음과 함께 저 유량 시 저전력 설계되었으며 디지털 방식의 제어 방식으로 편리함을 갖춰 설계되었습니다.",
        details: [
          "산소유량 0.5~5L /Min",
          "산소순도 93±3%",
          "무게 14kg",
          "소음 35dB 이내로 설계",
          "소비전력 245W",
        ],
      },
    ],
    portableOxygen: [
      {
        id: "Le02",
        img: "/asset/Le02.png",
        title: "레오투(휴대용)",
        subTitle: "Le02",
        description:
          "휴대용 모델 중 가벼운 무게로 설계되었으며 (소형 및 경량) 직관적인 인터페이스를 갖추었으며 흡입 모드 시 1~3단계로 설계되었습니다. 높은 순도를 자랑하고 있습니다.",
        details: [
          "산소순도 90±3%",
          "무게 1.2kg",
          "사이즈(mm) 178(높이) x 221(너비) x 68(두께)",
          "소음 55dB 이내",
        ],
      },
      {
        id: "P2",
        img: "/asset/P2.png",
        title: "P2(휴대용)",
        subTitle: "P2",
        description:
          "간단한 조작과 함께 편리한 휴대성에 강점을 갖고 있으며, 사용 가능 시간 및 배터리 잔량 표시 등 사용자에게 편리한 인터페이스를 제공하고 있습니다. 흡입 모드 시 1~5단계로 조절이 가능합니다.",
        details: [
          "산소단계 1~5단계",
          "1단계 최대 4시간",
          "무게 1.98kg",
        ],
      },
      {
        id: "P2-S4",
        img: "/asset/p2-s4.png",
        title: "P2-S4",
        subTitle: "P2-S4",
        description:
          "고유의 내구성과 아날로그 제어 방식으로 장애물을 최소화하며, 고유량에서도 고순도 산소를 유지합니다.",
        details: [
          "산소순도 93±3%",
          "산소단계 1~4단",
          "배터리 2단기준 약 4시간",
        ],
      },
      {
        id: "VitaOxy530",
        img: "/asset/VitaOxy530.png",
        title: "비타옥시 530",
        subTitle: "VitaOxy 530",
        description:
          "직관적인 인터페이스 구성과 함께 내구성에 초점을 맞춘 설계와 기기 가동 시 1~6단계의 조절이 가능합니다.",
        details: [
          "산소순도 93±3%",
          "사이즈(mm) 220(높이) x 223(너비) x 82(두께)",
          "무게 14.2kg",
          "소비전력 110W",
        ],
      },
    ],
    ventilator: [
      {
        id: "ASTRAL100",
        img: "/asset/ASTRAL 100.png",
        title: "아스트랄 100",
        subTitle: "ASTRAL 100",
        description:
          "",
        details: [
          "적용환자 : 소아~성인 침습적(기도절개) 혹은 비침습적(마스크)적용가능",
          "터치스크린, 자동누출관리, 이상적 흡기시간",
        ],
      },
      {
        id: "Trilogy Evo",
        img: "/asset/Trilogy Evo.png",
        title: "필립스 Trilogy Evo",
        subTitle: "Trilogy Evo",
        description:
          "",
        details: [
          "적용환자 : 소아~성인 침습적(기도절개) 혹은 비침습적(마스크)적용가능",
          "8인치 풀터치스크린 컬러LED",
          "무게 3.2kg",
        ],
      },
    ],
    others: [
      {
        id: "NellcorBedside",
        img: "/asset/nellco.png",
        title: "넬코 베드사이드",
        subTitle: "NellcorBedsid",
        description:
          "",
        details: [
          "적용환자 :산소포화도 & 맥박수 측정 미숙아, 소아, 성인 적용",
          "내장형 배터리 최대 8시간",
          "무게 1.68kg",
        ],
      },
      {
        id: "YK-80B",
        img: "/asset/YK-80B.png",
        title: "YK-80B",
        subTitle: "YK-80B",
        description:
          "",
        details: [
          "내장형 배터리 최대 8시간",
          "무게 1.68kg",
        ],
      },
      {
        id: "Pc-60A",
        img: "/asset/Pc-60A.png",
        title: "Pc-60A",
        subTitle: " Pc-60A(휴대용 산소포화도 측정기)",
        description:
          "",
        details: [
        
        ],
      },
    ],
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
            <ProductList
              title="가정용산소발생기"
              products={productsData.homeOxygen}
            />
            <ProductList
              title="휴대용산소발생기"
              products={productsData.portableOxygen}
            />
            <ProductList
              title="인공호흡기"
              products={productsData.ventilator}
            />
            <ProductList title="기타" products={productsData.others} />
          </div>
        )}
        {activeTab === 1 && (
          <ProductList
            title="가정용산소발생기"
            products={productsData.homeOxygen}
          />
        )}
        {activeTab === 2 && (
          <ProductList
            title="휴대용산소발생기"
            products={productsData.portableOxygen}
          />
        )}
        {activeTab === 3 && (
          <ProductList title="인공호흡기" products={productsData.ventilator} />
        )}
        {activeTab === 4 && (
          <ProductList title="기타" products={productsData.others} />
        )}
      </div>
    </ProductMain>
  );
};

export default ProductInfo;
