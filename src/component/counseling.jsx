import styled from "styled-components";

const CounselingWrap = styled.div`
  a {
    text-decoration: none;
    color: #fff;
  }
  width: 1574px;
  height: 521px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  margin-bottom: 80px;
  @media (max-width: 1919px) {
    height: auto;
  }
  > img {
  
    @media (max-width: 1919px) {
      width: 80%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .counselText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      color: #111;
      text-align: center;
      font-family: Pretendard;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      &:nth-of-type(2) {
        font-weight: 700;
      }
      span {
        color: #00b3ba;
      }
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        /*height: 56px;*/
        padding: 0px 16px;
        border-radius: 99px;
        background: #00b3ba;
        color: #fff;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 56px;
        margin-right: 20px;
        cursor: pointer;
        img{
            margin-left: 15px;
        }
      }
    }
  }
`;
const Counseling = () => {
  return (
    <div>
      <CounselingWrap>
        <img src="/asset/Frame 28.png" />
        <div className="counselText">
          <div>
            <p>산소호흡기 전문가와 상담을 원하시나요?</p>
            <p>
              <span>가은메디케어</span>가 도와드리겠습니다.
            </p>
          </div>
          <ul>
            <li>
              전화상담
              <img src="/asset/call.png" />
            </li>
            <li>
              <a href="https://pf.kakao.com/_xhmxmNG" target="_blank">
                카톡상담
                <img src="/asset/그룹 31.png" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@gemedicare" target="_blank">
                유튜브
                <img src="/asset/그룹 32.png" />
              </a>
            </li>
          </ul>
        </div>
      </CounselingWrap>
    </div>
  );
};

export default Counseling;
