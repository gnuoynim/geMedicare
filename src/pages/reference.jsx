import React, { useState, useEffect } from "react";
import Faq from "../component/faq";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ReferenceMain = styled.div`
background: linear-gradient(180deg, #FFF 36.58%, rgba(205, 233, 240, 0.50) 100%), #FFF;
padding-bottom: 200px;  
.aboutMain {
    position: relative;
    img {
      width: 100%;
    }
    h2 {
      position: absolute;
      top: 0;
      z-index: 10;
      color: #333d4b;
      font-family: Pretendard;
      font-size: 64px;
      top: 50%;
      left: 20%;
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
  .tabContent{
    /*height: 260vh;*/
   
    img{
        position: relative;
        left:50%;
        transform: translateX(-50%);
        width: 80%;
    }
  }
`;

const Reference = () => {
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
    <ReferenceMain>
      <div className="aboutMain">
        <img src="/asset/Frame 86642.png" />
        <h2>자료실</h2>
      </div>
      <ul className="tabList">
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
           임대후기
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          자주묻는 질문 FAQ
        </li>
      </ul>
      <div className="tabContent">
        {activeTab === 0 && (
           <img src="/asset/Frame 86700.png"/>
        )}
        {activeTab === 1 && (
        <Faq></Faq>
        )}
      </div>
    </ReferenceMain>
  );
};

export default Reference;
