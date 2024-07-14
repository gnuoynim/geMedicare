import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import LeaseProcedure from "../component/leaseProcedure";

const RentMain = styled.div`
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
    margin-bottom: 200px;
  }
  .tab03 {
    width: 1340px;
    .header {
      > div {
        width: 670px;
      }
    }
    .row {
      border: none;
      > div {
        width: 670px;
        text-align: left;
      }
      > div:nth-of-type(1) {
        padding-left: 220px;
      }
    }
    .row:nth-of-type(odd) {
      background: #effafb;
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
        {activeTab === 2 && (
          <div className="rentProcess">
            <p className="rentFeeTitle">산소발생기 상병코드</p>
            <div className="rentFee">
              <div className="table-container tab03">
                <div className="header">
                  <div>상병기호</div>
                  <div>상병명</div>
                </div>
                <div className="row">
                  <div>A150 ~ A169</div>
                  <div>호흡기 결핵</div>
                </div>
                <div className="row">
                  <div>B909</div>
                  <div>B909 호흡기 및 상세불명 결핵의 후유증</div>
                </div>
                <div className="row">
                  <div>C32 ~ C349</div>
                  <div>기관지 및 폐의 악성 신생물</div>
                </div>
                <div className="row">
                  <div>C780 ~ C783</div>
                  <div>폐의 이차성 악성 신생물</div>
                </div>
                <div className="row">
                  <div>I21 ~ I25</div>
                  <div>심근경색 관련 상병</div>
                </div>
                <div className="row">
                  <div>I260 ~ I289</div>
                  <div>폐성심장병 및 폐순환의 질환</div>
                </div>
                <div className="row">
                  <div>I500 ~ I509</div>
                  <div>울혈성 심부전 등</div>
                </div>
                <div className="row">
                  <div>J43 ~ J47</div>
                  <div>폐기종 등</div>
                </div>
                <div className="row">
                  <div>J60 ~ J65</div>
                  <div>진폐증 등</div>
                </div>
                <div className="row">
                  <div>J80 ~ J99</div>
                  <div>성인호흡곤란증후군 등</div>
                </div>
                <div className="row">
                  <div>P270 ~ P289</div>
                  <div>윌슨미키티증후군 등</div>
                </div>
                <div className="row">
                  <div>Q20 ~ Q349</div>
                  <div>심방실 및 연결의 선천기형 등</div>
                </div>
                <div className="row">
                  <div>R060 ~ R068</div>
                  <div>호흡곤란 등</div>
                </div>
                <div className="row row2">
                  <div>폐렴관련 상병코드</div>
                  <div></div>
                </div>
                <div className="row row2">
                  <div>B012, B052, B206, B221, B250, B953, B960, B961,</div>
                  <div></div>
                </div>
                <div className="row row2">
                  <div>C73, G001, </div>
                </div>
                <div className="row row2">
                  <div>
                    J12, J15, J16, J17, J18, J70, J100, J110, J120 ~ J129, J13,
                    J14,
                  </div>
                </div>
                <div className="row row2">
                  <div>R060 ~ R068</div>
                </div>
                <div className="row row2">
                  <div>
                    J150 ～ 159, J160, J168, J170～J178, J180, J181, J182, J188,
                    J189
                  </div>
                </div>
                <div className="row row2">
                  <div>R060 ~ R068</div>
                </div>
                <div className="row row2">
                  <div>
                    {" "}
                    J200, J67, J69, J678, J679, J680, J690, J691, J698, J8410,
                    J851, J852,{" "}
                  </div>
                </div>
                <div className="row row2">
                  <div> M001, M0010 ～ M0019, O740, P23, P230 ～ P239 </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </RentMain>
  );
};

export default Rent;
