import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import LeaseProcedure from "../component/leaseProcedure";
import OxygenInjuryCode from "../component/oxygenInjuryCode";
import RespiratorInjuryCode from "../component/respiratorInjuryCode";

const RentMain = styled.div`
.rentProcess > div{
  &:nth-of-type(1){
    margin-top:0;
  }
}
  background: linear-gradient(
      180deg,
      #fff 36.58%,
      rgba(205, 233, 240, 0.5) 100%
    ),
    #fff;
  .rentFeeTitle {
    color: #00b3ba;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    margin: 80px 0;
    text-align: center;
  }
  .rentMain {
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
  .rentFee {
    display: flex;
    justify-content: center;
    .table-container {
      margin: 20px 0;
      text-align: center;
      color: #333d4b;
      font-family: Pretendard;
      font-size: 28px;
      margin-bottom: 80px;
      > p {
        color: #333d4b;
        font-family: Pretendard;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        margin-bottom: 30px;
        text-align: left;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;

      border-bottom: 2px solid #00b3ba;
      padding: 10px 0;
      font-weight: bold;
      color: #333d4b;
      > div {
        width: 425px;
      }
    }
    .row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      > div {
        width: 425px;
      }
    }
    .highlight {
      color: #00b3ba;
    }
  }
  .rentFee2 {
    padding-bottom: 200px;
  }
  .tab03 {
    width: 70%;
    margin: 0 auto;
    .header {
      > div {
        width: 670px;
      }
    }
    .row {
      border: none;
      > div {
        font-family: Pretendard;
        font-size: 22px;
        &:nth-of-type(1) {
          width: 30%;
        }
        &:nth-of-type(2) {
          width: 70%;
          text-align: left;
        }
      }
    }
    .row:nth-of-type(odd) {
      background: #effafb;
    }
    .row:nth-of-type(even) {
      background: #fff;
    }
    .row.row2 {
      width: 100%;
      white-space: nowrap;
    }
  }
`;
const Rent = () => {
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
    <RentMain>
      <div className="rentMain">
        <img src="/asset/Frame 86666.png" alt="About Us" />
        <h2>임대방법</h2>
      </div>
      <ul className="tabList">
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          산소발생기 임대방법
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          인공호흡기 임대방법
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          산소치료 관련질환안내
        </li>
        <li
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          인공호흡기 관련질환안내
        </li>
      </ul>
      <div className="tabContent">
        {activeTab === 0 && (
          <div className="rentProcess">
            <LeaseProcedure />
            <p className="rentFeeTitle">기기별 월 임대료 안내</p>
            <div className="rentFee">
              <div className="table-container">
                <p>가정용 산소발생기</p>
                <div className="header">
                  <div>구분</div>
                  <div>공단부담금</div>
                  <div className="highlight">개인부담금</div>
                </div>
                <div className="row">
                  <div>건강보험가입자</div>
                  <div>108,000원 (90%)</div>
                  <div className="highlight">12,000원 (10%)</div>
                </div>
                <div className="row">
                  <div>의료급여 1,2종 또는 차상위계층</div>
                  <div>전액지원 (100%)</div>
                  <div className="highlight">0원 (0%)</div>
                </div>
              </div>
            </div>
            <div className="rentFee rentFee2">
              <div className="table-container">
                <p>휴대용 산소발생기</p>
                <div className="header">
                  <div>구분</div>
                  <div>공단부담금</div>
                  <div className="highlight">개인부담금</div>
                </div>
                <div className="row">
                  <div>건강보험가입자</div>
                  <div>180,000원 (90%)</div>
                  <div className="highlight">2,000원 (10%)</div>
                </div>
                <div className="row">
                  <div>의료급여 1,2종 또는 차상위계층</div>
                  <div>전액지원 (100%)</div>
                  <div className="highlight">0원 (0%)</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="rentProcess">
            <LeaseProcedure />
            <p className="rentFeeTitle">인공호흡기 월 임대료 안내</p>
            <div className="rentFee">
              <div className="table-container">
                <p>혼합형 요금</p>
                <div className="header">
                  <div>구분</div>
                  <div>공단부담금</div>
                  <div className="highlight">개인부담금</div>
                </div>
                <div className="row">
                  <div>건강보험가입자</div>
                  <div>579,600원 (90%)</div>
                  <div className="highlight">64,400원 (10%)</div>
                </div>
                <div className="row">
                  <div>의료급여 1,2종 또는 차상위계층</div>
                  <div>전액지원 (100%)</div>
                  <div className="highlight">0원 (0%)</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && <OxygenInjuryCode></OxygenInjuryCode>}
        {activeTab === 3 && <RespiratorInjuryCode></RespiratorInjuryCode>}
      </div>
    </RentMain>
  );
};

export default Rent;
