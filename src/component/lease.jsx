import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import styled from "styled-components";


const LeaseContentWrap = styled.div`
  position: relative;
  height: 1340px;
  .contentText {
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

const Background = styled.div`
  img {
    width: 100%;
    height: 500px;
  }
`;

const LeaseList = styled.div`
  display: flex;
  justify-content: center;
  > ul {
    width: 33%;
    position: absolute;
    top: 38%;
    display: flex;
    justify-content: center;
    gap: 50px;
    > li {
      /*width: 592px;*/
      // margin-right: 50px;+
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .leaseText {
        color: #111;
        font-family: Pretendard;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        width: 400px;
        height: 89px;
        margin: 30px 0;
        word-break: normal;
        line-height: 33px;
      }
      img {
        width: 70%;
        @media (max-width: 1919px) {
          width: 90%;
        }
      }
      &:last-of-type{
        margin-right:0;
      }
    }
  }
  
  .leaseWrap {
    width: 400px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .thumWrap {
    padding-left: 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
    }
  }
  .thumbnail {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background: #b6b6b6;
    margin-right: 20px;
    img {
      width: 120%;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .thumText {
    color: #111;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    span {
      font-weight: 400;
      display: block;
    }
  }
  .arrowButton {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #edecec;
    cursor:pointer;
    img {
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Lease = () => {
    const navigate = useNavigate();

    const navigateToProduct = (tabIndex, productId) => {
        navigate(`/productInfo?tab=${tabIndex}#${productId}`);
    };
  
  return (
    <LeaseContentWrap>
      <p className="contentText">임대후기</p>
      <Background>
        <img src="/asset/image 66 (1).png" />
      </Background>
      <LeaseList>
        <ul>
          <li>
            <img src="/asset/lease01.png" />
            <div className="leaseWrap">
              <p className="leaseText">
                환자 상태에 맞는 상담부터 기기선택 그리고 설치까지 논스톱으로
                진행해주셔서 만족스러웠습니다!
              </p>
              <ul className="thumWrap">
                <li>
                  <div>
                    <div className="thumbnail">
                      <img src="/asset/VitaOxy540.png" />
                    </div>
                    <p className="thumText">
                      비타옥시540
                      <span>VitaOxy540</span>
                    </p>
                  </div>
                  <span className="arrowButton" onClick={() => navigateToProduct(1, 'VitaOxy540')}>
                    <img src="/asset/arrow-right.png" />
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <img src="/asset/lease02.png" />
            <div className="leaseWrap">
              <p className="leaseText">
                4~5리터를 24시간 써야하는 상황인데 고유량에 강한 에버플로 기기를
                임대할 수 있어서 좋았어요
              </p>
              <ul className="thumWrap">
                <li>
                  <div>
                    <div className="thumbnail">
                      <img src="/asset/EverFlo.png" />
                    </div>
                    <p className="thumText">
                      에버플로
                      <span>EverFlo</span>
                    </p>
                  </div>
                  <span className="arrowButton" onClick={() => navigateToProduct(1, 'EverFlo')}>
                    <img src="/asset/arrow-right.png" />
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <img src="/asset/lease03.png" />
            <div className="leaseWrap">
              <p className="leaseText">
                요양원 임대라 상황에 맞는 최신 기기로 임대를 진행하고 각종
                소모품 제공까지 감사합니다.
              </p>
              <ul className="thumWrap">
                <li>
                  <div>
                    <div className="thumbnail">
                      <img src="/asset/VitaOxy540.png" />
                    </div>
                    <p className="thumText">
                      비타옥시540
                      <span>VitaOxy540</span>
                    </p>
                  </div>
                  <span className="arrowButton" onClick={() => navigateToProduct(1, 'VitaOxy540')}>
                    <img src="/asset/arrow-right.png" />
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </LeaseList>
    </LeaseContentWrap>
  );
};

export default Lease;
