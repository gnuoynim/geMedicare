import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const MainImg = styled.div`
  img {
    width: 100%;
    height: 100vh;
  }
`;
const Tilte = styled.div`
  color: #111;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  bottom: 14.8rem;
  text-align: left;
  > h3 {
    font-size: 40px;
  }
  > p {
    font-size: 36px;
    font-weight: 400;
    color: #111;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    .mint {
      color: #00849d;
      font-family: Pretendard;
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
const Tilte2 = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  color: #fff;
  line-height: normal;
  position: relative;
  bottom: 12.25rem;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  > h3 {
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  > p {
    font-size: 30px;
    font-weight: 400;
  }
`;
const Tilte3 = styled.div`
   color: #111;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  bottom: 13.8rem;
  text-align: left;
  > h3 {
    font-size: 40px;
    margin-bottom: 25px;
  }
  > p {
    font-size: 36px;
    font-weight: 400;
    color: #111;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const MainVisual = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <MainImg>
          <img src="/asset/main1.png" />
        </MainImg>
        <Carousel.Caption>
          <Tilte>
            <h3>환자분들의 건강 향상,</h3>
            <p>
              보호자분들의 삶의 질 개선
              <br />
              <span className="mint">가은메디케어</span>가 도움 드리겠습니다.
            </p>
          </Tilte>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MainImg>
          <img src="/asset/main2.png" />
        </MainImg>
        <Carousel.Caption>
          <Tilte2>
            <h3>건강보험 가입자 월 최대 90% 임대비용 지원</h3>
            <p>가정용 & 휴대용 산소발생기 / 인공호흡기</p>
          </Tilte2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MainImg>
          <img src="/asset/main3.png" />
        </MainImg>
        <Carousel.Caption>
          <Tilte3>
            <h3>건강보험공단 정식 등록업체</h3>
            <p>
              편안한 산소치료를 위한
              <br />
              최적의 서비스를 제공합니다
            </p>
          </Tilte3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainVisual;
