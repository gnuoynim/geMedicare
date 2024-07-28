import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductMain = styled.div`
.swiper{
  width: 1200px !important;
}
margin: 260px 0;
  > p {
    color: #00b3ba;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 80px;
    text-align: center;
  }
`;

const TabMenu = styled.ul`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 40px;
  .submenu {
    height: 43px;
    color: #333d4b;
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    text-align: center;
    letter-spacing: 1.5px;
  }

  .focused {
    color: #00b3ba;
    border-bottom: 3px solid #00b3ba;
  }

  & div.desc {
    text-align: center;
  }
`;

const TabList = styled.div`
  margin-top: 80px;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    > li {
      width: 300px;
      height: 300px;
      background-color: rgba(242, 237, 234, 0.6);
      border-radius: 50%;
      position: relative;
      margin-right: 60px;
      cursor: pointer;
      @media (max-width: 1919px) {
        margin-right: 1%;
      }
      > div {
        width: 348px;
        height: 348px;
      }
      img {
        width: 132%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .vitaoxy530 {
        width: 89%;
      }
      .p2 {
        width: 110%;
      }
      .p2s4 {
        width: 90%;
      }
      .astral {
        width: 120%;
      }
      .pc60a {
        width: 90%;
      }
      .yk80b {
        width: 100%;
      }
      .trilogy {
        width: 110%;
      }
      .Le02{
        width: 90%;
      }
      span {
        color: #555;
        font-size: 26px;
        text-align: center;
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
      }
    }
  }
`;

const Product = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    {
      name: "가정용산소발생기",
      content: "가정용산소발생기",
      products: [
        {
          img: "/asset/EverFlo.png",
          name: "필립스 에버플로",
          className: "everflo",
        },
        {
          img: "/asset/Krober4.0.png",
          name: "크로버 4.0",
          className: "krober",
        },
        {
          img: "/asset/VitaOxy510.png",
          name: "비타옥시 510",
          className: "vitaoxy510",
        },
        {
          img: "/asset/VitaOxy540.png",
          name: "비타옥시 540",
          className: "vitaoxy540",
        },
        {
          img: "/asset/킹온 P2-O5E.png",
          name: "킹온 P2-O5E",
          className: "킹온 P2-O5E",
        },
      ],
    },
    {
      name: "휴대용산소발생기",
      content: "휴대용산소발생기",
      products: [
        {
          img: "/asset/VitaOxy530.png",
          name: "비타옥시 530",
          className: "vitaoxy530",
        },
        { img: "/asset/P2.png", name: "P2", className: "p2" },
        { img: "/asset/p2-s4.png", name: "p2-s4", className: "p2s4" },
        { img: "/asset/Le02.png", name: "레오투(휴대용)", className: "Le02" },
      ],
    },
    {
      name: "인공호흡기",
      content: "인공호흡기",
      products: [
        {
          img: "/asset/ASTRAL 100.png",
          name: "아스트랄100,150(혼합형)",
          className: "astral",
        },
        {
          img: "/asset/Trilogy Evo.png",
          name: "트릴로지 에보(혼합형)",
          className: "trilogy",
        },
      ],
    },

    {
      name: "기타제품",
      content: "기타제품",
      products: [
        {
          img: "/asset/YK-80B.png",
          name: "휴대용 산소포화도 측정기1",
          className: "yk80b",
        },
        {
          img: "/asset/넬코 베드사이드.png",
          name: "넬코 베드사이드",
          className: "NellcorBedsid",
        },
        {
          img: "/asset/Pc-60A.png",
          name: "휴대용 산소포화도 측정기2",
          className: "pc60a",
        },
      ],
    },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <ProductMain>
      <p>제품소개</p>
      <div>
        <TabMenu>
          {menuArr.map((el, index) => (
            <li
              key={index}
              className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}
            >
              {el.name}
            </li>
          ))}
        </TabMenu>

        <TabList>
          <Swiper spaceBetween={20} slidesPerView={3}>
            {menuArr[currentTab].products.map((product, index) => (
              <SwiperSlide key={index}>
                <ul>
                  <li>
                    <div>
                      <img
                        src={product.img}
                        alt={product.name}
                        className={product.className}
                      />
                      <span>{product.name}</span>
                    </div>
                  </li>
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </TabList>
      </div>
    </ProductMain>
  );
};

export default Product;
