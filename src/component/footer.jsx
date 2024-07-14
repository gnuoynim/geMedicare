import logo from "../assets/logo.png";
import styled from "styled-components";

const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  background: #2c2a29;
  color: #fff;
  height: 500px;
  padding-top: 75px;
  .textWrap {
    color: rgba(255, 255, 255, 0.8);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    margin-right: 450px;
    @media (max-width: 1919px) {
      margin-right: 10%;
        }
    ul {
      padding-left: 74px;

      li {
        opacity: 0.8;
      }
    }
    > span {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 20px;
      padding-left: 74px;
    }
  }
  .phone {
    color: #fff;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    ul {
      li {
        &:nth-of-type(2) {
          color: #fff;
          font-family: Pretendard;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
        }
        &:nth-of-type(3) {
          color: #00b3ba;
          font-family: Pretendard;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap id="footer">
      <div className="textWrap">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            대표자 유규범{" "}
            <span>
              서울특별시 금천구 서부샛길 606 대성디폴리스지식산업센터 B동 2608호
            </span>
          </li>
          <li>사업자등록번호 254-03-01932</li>
          <li>산소치료서비스제공 등록번호 H1106600</li>
          <li>인공호흡기치료서비스제공 등록번호 V1102300</li>
          <li>통신판매업번호 2021-서울금천-0800</li>
        </ul>
        <span>© 가은메디케어. All Rights Reserved.</span>
      </div>
      <div className="phone">
        <ul>
          <li>임대 및 상담 문의</li>
          <li>1661-0259</li>
          <li>24시 상담센터</li>
        </ul>
      </div>
    </FooterWrap>
  );
};

export default Footer;
