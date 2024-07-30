import styled from "styled-components";

const Procedure = styled.div`
margin: 200px 0;
  > p {
    color: #00b3ba;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-bottom: 80px;
  }
  ul {
    display: flex;
    justify-content: center;
    @media (max-width: 1919px) {
      margin: 0 2%;
    }
    li {
      padding: 40px 20px;
      width: 289.82px;
      height: 461.54px;
      border-radius: 40px;
      border: 1px solid #00b3ba;
      background: #f2fbfb;
      margin-right: 20px;
      @media (max-width: 1919px) {
        width: 25%;
        height: auto;
        padding: 2.78vw 3.54vw;
      }
      > span {
        display: block;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: #333d4b;
        color: #fff;
        font-family: Pretendard;
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        line-height: 50px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 10px;
        @media (max-width: 1919px) {
          width: 60px;
          height: 60px;
          line-height: 60px;
          font-size: 35px;
          margin-bottom: 20px;
        }
      }
      > p {
        color: #333d4b;
        font-size: 27px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 15px;
        @media (max-width: 1919px) {
          font-size: 2rem;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          width: fit-content;
          margin-top: 10px;
        }
      }
      > div {
        color: #6b7684;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 33px */
        letter-spacing: 0.33px;
        padding: 0px 11px;
      }
      > img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        top: 18px;
        width: 165px;
        @media (max-width: 1919px) {
          width: 90%;
        }
      }
    }
    li:nth-of-type(2) {
      background: #e6f8f9;
      img {
        padding-top: 7px;
        width: 200px;
        @media (max-width: 1919px) {
          width: 100%;
          bottom: -11%;
        }
      }
    }
    li:nth-of-type(3) {
      background: #d9f4f5;
      img {
        width: 266px;
        padding-top: 21px;
        padding-left: 16px;
        @media (max-width: 1919px) {
          width: 120%;
          bottom: -16%;
        }
      }
      
    }
    li:nth-of-type(4) {
        background: #ccf0f1;
        margin-right: 0;
        p {
          height: 40.5px;
          letter-spacing: -2px;
          line-height: 34px;
          @media (max-width: 1919px) {
            font-size: 1.7rem;
          }
        }
        > img {
          width: 225px;
          padding-top: 20px;
          padding-right: 22px;
          @media (max-width: 1919px) {
            width: 93%;
            bottom: -10%;
          }
        }
      }
  }
`;

const LeaseProcedure = ({ step1Title, step1Description }) => {
  return (
    <Procedure>
      <p>임대절차</p>
      <ul>
        <li>
          <span>1</span>
          <p>{step1Title}</p>
          <div>{step1Description}</div>
         
          <img src="/asset/contract checkmark button.png" />
        </li>
        <li>
          <span>2</span>
          <p>전화상담 진행</p>
          <div>
            1661-0259 가은메디케어 상담 센터로 연락하여 상담을 진행하세요.
          </div>
          <img src="/asset/Man chatting remotely with female colleague.png" />
        </li>
        <li>
          <span>3</span>
          <p>방문 및 설치</p>
          <div>
            전문가가 방문하여 서류 진행부터 기기설치 사용방법 안내까지 진행해 드립니다.
          </div>
          <img src="/asset/house.png" />
        </li>
        <li>
          <span>4</span>
          <p>기기 사용 및 정기방문</p>
          <div>
            정기적으로 방문하여 기기 유지관리와 각종 소모품을 제공해 드립니다.
          </div>
          <img src="/asset/young man holding laptop and pointing up.png" />
        </li>
      </ul>
    </Procedure>
  );
};

export default LeaseProcedure;
