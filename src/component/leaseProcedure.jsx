import styled from "styled-components";

const Procedure = styled.div`
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
      padding: 40px 51px;
      width: 425px;
      height: 600px;
      border-radius: 60px;
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
        width: 80px;
        height: 80px;
        background: #333d4b;
        color: #fff;
        font-family: Pretendard;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 80px;
        margin: 0 auto;
        text-align: center;
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
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        @media (max-width: 1919px) {
          font-size: 2rem;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          width: fit-content;
         
        }
      }
      > div {
        color: #6b7684;
        font-family: Pretendard;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 33px */
        letter-spacing: 0.33px;
      }
      > img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 1919px) {
          width: 90%;
        }
      }
    }
    li:nth-of-type(2) {
      background: #e6f8f9;
      img {
        @media (max-width: 1919px) {
          width: 100%;
          bottom: -11%;
        }
      }
    }
    li:nth-of-type(3) {
      background: #d9f4f5;
      img {
        @media (max-width: 1919px) {
          width: 120%;
          bottom: -16%;
        }
      }
      
    }
    li:nth-of-type(4) {
        background: #ccf0f1;
        p {
          letter-spacing: 0.8px;
          line-height: 34px;
        }
        > img {
          @media (max-width: 1919px) {
            width: 93%;
            bottom: -10%;
          }
        }
      }
  }
`;

const LeaseProcedure = () => {
  return (
    <Procedure>
      <p>임대절차</p>
      <ul>
        <li>
          <span>1</span>
          <p>서류발급</p>
          <div>
            병원 외래진료 혹은 퇴원시에 산소치료 처방전과 산소치료 급여대상자
            등록신청서를 발급 받으세요
          </div>
          <img src="/asset/contract checkmark button.png" />
        </li>
        <li>
          <span>2</span>
          <p>전화상담 진행</p>
          <div>
            1661-0259 가은메디케어 상담센터로 연락하여 상담을 진행하세요
          </div>
          <img src="/asset/Man chatting remotely with female colleague.png" />
        </li>
        <li>
          <span>3</span>
          <p>방문 및 설치</p>
          <div>
            전문가가 방문하여 서류 진행부터 기기설치 사용방법 안내까지
            진행해드립니다
          </div>
          <img src="/asset/house.png" />
        </li>
        <li>
          <span>4</span>
          <p>기기 사용 및 정기방문</p>
          <div>
            정기적으로 방문하여 기기 유지관리와 각종 소모품을 제공해드립니다
          </div>
          <img src="/asset/young man holding laptop and pointing up.png" />
        </li>
      </ul>
    </Procedure>
  );
};

export default LeaseProcedure;
