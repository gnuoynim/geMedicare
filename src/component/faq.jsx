import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const FaqMain = styled.div`
  .faqTab {
    display: flex;
    justify-content: center;
    > li {
      font-size: 28px;
      background: rgba(0, 0, 0, 0.05);
      text-align: center;
      color: #333d4b;
      padding: 10px 25px;
      border-radius: 999px;
      cursor:pointer;
      &:nth-of-type(1) {
        margin-right: 50px;
      }
      &.active {
        background: #00b3ba;
        font-weight: bold;
        color: #fff;
      }
    }
  }
  .question {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #aeaeae;
    cursor: pointer;
  }
  .questionList {
    width: 70%;
    margin: 0 auto;
    padding-top: 50px;
    p {
      font-size: 24px;
      padding-left: 20px;
      font-weight: 700;
    }
    .questionButton {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.8);
      margin-left: 20px;
      img {
        width: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .Answer {
      overflow: hidden;
      transition: height 0.3s ease, padding 0.3s ease;
      height: 0;
      border-bottom: 1px dashed #00b3ba;
      padding: 0 20px;
      background: rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      .anserButton {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: #00b3ba;
        img {
          width: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      > div {
        width: 100%;
        margin-left: 20px;
        font-weight: 700;
        font-size: 22px;
        line-height: 35px;
      }
    }
    .Answer.active {
      height: auto; /* Allow auto height */
      padding: 20px;
    }
  }
`;

const Faq = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = parseInt(queryParams.get("tab"), 10) || 0;
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const answerRef = useRef([]);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveQuestion(null);
    answerRef.current = []; 
  };

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  useEffect(() => {
    answerRef.current.forEach((answer, index) => {
      if (answer) {
        if (activeQuestion === index) {
          answer.style.height = `${answer.scrollHeight + 60}px`;
        } else {
          answer.style.height = "0";
        }
      }
    });
  }, [activeQuestion]);

  return (
    <FaqMain>
      <ul className="faqTab">
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          가정용 산소발생기
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          가정용 인공호흡기
        </li>
      </ul>
      {activeTab === 0 && (
        <div className="questionList oxygen">
          <ul>
            <li>
              <div className="question" onClick={() => handleQuestionClick(0)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>가정용 산소발생기의 원리는 무엇일까요? </p>
              </div>

              <div
                className={`Answer ${activeQuestion === 0 ? "active" : ""}`}
                ref={(el) => (answerRef.current[0] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  대기중의 공기를 제품으로 흡입해 대기 중 가장 많이
                  차지하는 질소 등을 제거하고 90% 이상의 고농도의 산소를 배출해
                  내는 방식입니다.
                </div>
              </div>
            </li>
            <li>
              <div className="question" onClick={() => handleQuestionClick(1)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>가정용 산소발생기와 휴대용 산소발생기의 차이점은?</p>
              </div>

              <div
                className={`Answer ${activeQuestion === 1 ? "active" : ""}`}
                ref={(el) => (answerRef.current[1] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  가정용 산소 발생기는 전원을 연결해 사용하는 방식의 제품으로
                  내장 배터리가 없습니다. 환자의 호흡 횟수나 흡입
                  정도와 관계없이 지속적으로 산소를 공급합니다. 휴대용 산소
                  발생기는 내장 배터리가 탑재되어 있어 충전 후 전원을 연결하지
                  않고 사용 가능한 제품입니다. 환자의 호흡 감지
                  시마다 간헐적으로 산소가 공급됩니다. 물론 일부 제품은
                  지속적으로 산소 공급도 가능합니다. 환자의 상황에 맞춰 기기를
                  준비해서 제공합니다.
                </div>
              </div>
            </li>
            <li>
              <div className="question" onClick={() => handleQuestionClick(2)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>기기에서 경고등과 함께 알람이 울려요.</p>
              </div>

              <div
                className={`Answer ${activeQuestion === 2 ? "active" : ""}`}
                ref={(el) => (answerRef.current[2] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  기기에 따라 유량조절이 잘 되어있는지 확인이 필요합니다 기기
                  유량이 잘 세팅되어 있는데도 알람이 울린다면 기기에 이상이 있을
                  수 있으니 1661-0259로 연락 주세요.
                </div>
              </div>
            </li>
            <li>
              <div className="question" onClick={() => handleQuestionClick(3)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>정기 방문은 언제 오나요?</p>
              </div>

              <div
                className={`Answer ${activeQuestion === 3 ? "active" : ""}`}
                ref={(el) => (answerRef.current[3] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  가정용 산소 발생기의 경우 3개월 기준으로 정기 방문 드립니다.
                </div>
              </div>
            </li>
            <li>
              <div className="question" onClick={() => handleQuestionClick(4)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>소모품 교체 주기를 알고 싶어요.</p>
              </div>

              <div
                className={`Answer ${activeQuestion === 4 ? "active" : ""}`}
                ref={(el) => (answerRef.current[4] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  소모품 교체주기의 경우 산소 줄(콧줄)은 한 달에 한 번 교체할
                  것을 권장 드리며 1차 필터 및 증류수는 일주일마다 확인할 것을
                  권장 드립니다 자세한 내용은 담당자가 설치 시 안내드립니다.
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
      {activeTab === 1 && (
        <div className="questionList respirator">
          <ul>
            <li>
              <div className="question" onClick={() => handleQuestionClick(0)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>가정용 산소 발생기와 인공호흡기의 차이점은?</p>
              </div>

              <div
                className={`Answer ${activeQuestion === 0 ? "active" : ""}`}
                ref={(el) => (answerRef.current[0] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  산소 발생기는 높은 농도의 산소를 발생시키는 제품입니다.
                  만성폐쇄성 폐 질환(COPD) 등으로 인한 저산소증 환자의 치료
                  목적으로 사용하는 제품으로 높은 농도의 산소를 제공합니다.
                  인공호흡기는 적절한 압력과 양을 설정하여 폐에 환기를 제공해
                  호흡을 보조해 주는 제품입니다. 환자의 질병 상태에 따라
                  인공호흡기에 산소 발생기를 연결해서 환기와 산소치료를 동시에
                  제공할 수도 있습니다.
                </div>
              </div>
            </li>
            <li>
              <div className="question" onClick={() => handleQuestionClick(1)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>정기 방문은 언제 오나요?</p>
              </div>

              <div
                className={`Answer ${activeQuestion === 1 ? "active" : ""}`}
                ref={(el) => (answerRef.current[1] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  인공호흡기를 사용하고 계시다면 한 달에 한 번 방문 드리고
                  있습니다.
                </div>
              </div>
            </li>
            <li>
              <div className="question" onClick={() => handleQuestionClick(2)}>
                <span className="questionButton">
                  <img src="/asset/Q.png" />
                </span>
                <p>인공호흡기 소모품 교체 주기를 알고 싶어요.</p>
              </div>

              <div
                className={`Answer ${activeQuestion === 2 ? "active" : ""}`}
                ref={(el) => (answerRef.current[2] = el)}
              >
                <span className="anserButton">
                  <img src="/asset/A.png" />
                </span>
                <div>
                  인공호흡기 회로(서킷)은 한 달 한번 또는 환자의 상태 및 상황에
                  따라 교체 주기가 빨라지거나 달라질 수도 있습니다. 박테리아
                  필터는 기본적으로 한 달에 4개까지 지원이 되며 주 1회 교체해
                  주시면 됩니다. 하지만, 환경에 따라 달라질 수 있으니 자세한
                  내용은 방문 담당자와 상의하여 진행해 주시기 바랍니다.
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </FaqMain>
  );
};

export default Faq;
