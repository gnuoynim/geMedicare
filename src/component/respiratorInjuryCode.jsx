import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const InjuryCode = styled.div`
.injuryCodeContent{
  width:70%;
  margin: 0 auto;
  .injuryCode{

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
        &:nth-of-type(1){
          width: 30%;
        }
        &:nth-of-type(2){
          width: 70%;
          
        }
      }
    }
    .row {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      align-items: center;
      justify-content: center;
      > div {
        font-family: Pretendard;
        font-size: 22px;
        &:nth-of-type(1){
          width: 30%;
        }
        &:nth-of-type(2){
          width: 70%;
          text-align: left;
        }
      }
    }
    .row:nth-of-type(even) {
      background: #fff;
    }
    .row:nth-of-type(odd) {
      background: #effafb;
    }
    .row.row2 {
      width: 100%;
      white-space: nowrap;
    }
  }

}
  .codeTab {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    > li {
      font-size: 28px;
      background: rgba(0, 0, 0, 0.05);
      text-align: center;
      color: #333d4b;
      padding: 10px 25px;
      border-radius: 999px;
      cursor: pointer;
      display: flex;
    align-items: center;
    font-size: 22px;
    margin-right: 20px;
      &:nth-of-type(3) {
        margin-right: 0;
      }
      &.active {
        background: #00b3ba;
        font-weight: bold;
        color: #fff;
      }
    }
  }
 
`;
const RespiratorInjuryCode = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = parseInt(queryParams.get("tab"), 10) || 0;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <InjuryCode>
      <p className="rentFeeTitle">인공호흡기 상병코드</p>
      <ul className="codeTab">
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          희귀난치성질환 상병
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          만성호흡부전이 동반 중추신경계 질환 상병
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          만성호흡부전이 동반 폐질환 상병
        </li>
      </ul>
      {activeTab === 0 && (
        <div className="injuryCodeContent">
          <div className="rentFee injuryCode">
            <div className="table-container">
              <div className="header">
                <div>상병기호</div>
                <div>상병명</div>
              </div>
              <div className="row">
                <div>A81.0</div>
                <div>크로이츠펠트-야콥병</div>
              </div>
              <div className="row">
                <div>E71.3</div>
                <div>부신백질디스트로피[애디슨-쉴더]</div>
              </div>
              <div className="row">
                <div>E74.0</div>
                <div>
                  글리코젠축적병 / 심장글리코젠증 / 안데르센병 / 코리병 /
                  포르브스병 / 허스병 / 맥아들병 / 폼페병 / 타루이병 /
                  폰기에르케병 / 간인산화효소결핍
                </div>
              </div>
              <div className="row">
                <div>E76.0</div>
                <div>
                  I형 점액다당류증 / 헐러증후군 / 헐러-샤이에증후군 /
                  샤이에증후군
                </div>
              </div>
              <div className="row">
                <div>E76.1</div>
                <div>II형 점액다당류증 / 헌터증후군</div>
              </div>
              <div className="row">
                <div>E76.2</div>
                <div>
                  기타 점액다당류증 / 베타-글루쿠론산분해효소결핍 /
                  III,IV,VI,VII형 점액다당 류증 / 마로토-라미(경도)(중증) 증후군
                  / 모르키오(-유사)(고전적)증후군 / 산
                  필립포(B형)(C형)(D형)증후군
                </div>
              </div>
              <div className="row">
                <div>E76.3</div>
                <div>상세불명의 점액다당류증</div>
              </div>
              <div className="row">
                <div>E76.8</div>
                <div>글루코사미노글라이칸대사의 기타 장애</div>
              </div>
              <div className="row">
                <div>E76.9</div>
                <div>글루코사미노글라이칸대사의 상세불명 장애</div>
              </div>
              <div className="row">
                <div>G11</div>
                <div>유전성 운동실조</div>
              </div>
              <div className="row">
                <div>G11.0</div>
                <div>선천성 비진행성 운동실조</div>
              </div>
              <div className="row">
                <div>G11.1</div>
                <div>
                  조기발병 소뇌성 운동실조 / 본태성 떨림을(를) 동반한 조기발병
                  소뇌성 운동실조 / 마이오클로누스[헌트운동실조]을(를) 동반한
                  조기발병 소뇌성 운동실조 / 보류된 건반사(을)를 동반한 조기발병
                  소뇌성 운동실조 / 프리드라이히운동 실조(보통염색체열성) /
                  X-연관 열성 척수소뇌성 운동실조
                </div>
              </div>
              <div className="row">
                <div>G11.2</div>
                <div>만기발병 소뇌성 운동실조</div>
              </div>
              <div className="row">
                <div>G11.3</div>
                <div>
                  DNA복구결손을 수반한 소뇌성 운동실조 / 모세혈관확장성
                  운동실조[루이- 바]{" "}
                </div>
              </div>
              <div className="row">
                <div>G11.4</div>
                <div>유전성 강직성 하반신마비</div>
              </div>
              <div className="row">
                <div>G11.8</div>
                <div>기타 유전성 운동실조</div>
              </div>
              <div className="row">
                <div>G11.9</div>
                <div>
                  상세불명의 유전성 운동실조 / 유전성 소뇌의 운동실조 NOS /
                  유전성 소뇌의 변성 / 유전성 소뇌의 병 / 유전성 소뇌의 증후군
                </div>
              </div>
              <div className="row">
                <div>G12</div>
                <div>척수성 근위축 및 관련 증후군</div>
              </div>
              <div className="row">
                <div>G12.0</div>
                <div>영아척수성 근위축, I형[베르드니히-호프만]</div>
              </div>
              <div className="row">
                <div>G12.1</div>
                <div>
                  기타 유전성 척수성 근위축 / 소아기의 진행성
                  연수마비[파지오-론데] / 성인형 척수성근위축/ 소아형,
                  II형척수성근위축/ 원위척수성근위축 / 연소형, III
                  형[쿠겔베르그-벨란더] 척수성 근위축 / 어깨종아리형 척수성
                  근위축{" "}
                </div>
              </div>
              <div className="row">
                <div>G12.2</div>
                <div>운동신경세포병</div>
              </div>
              <div className="row">
                <div>G12.20</div>
                <div>가족성 근위축측삭경화증</div>
              </div>
              <div className="row">
                <div>G12.21</div>
                <div>산발형 근위축측삭경화증</div>
              </div>
              <div className="row">
                <div>G12.22</div>
                <div>원발성 측삭경화증</div>
              </div>
              <div className="row">
                <div>G12.23</div>
                <div>진행성 연수마비</div>
              </div>
              <div className="row">
                <div>G12.24</div>
                <div>진행성 근위축</div>
              </div>
              <div className="row">
                <div>G12.8</div>
                <div>기타 척수성 근위축 및 관련 증후군</div>
              </div>
              <div className="row">
                <div>G12.9</div>
                <div>상세불명의 척수성 근위축</div>
              </div>
              <div className="row">
                <div>G35</div>
                <div>
                  다발경화증 / 다발경화증 NOS / 뇌간(∼의) 다발경화증 / 척수(∼의)
                  다발경화증 / 파종성(∼의) 다발경화증 / 전신성(∼의) 다발경화증
                </div>
              </div>
              <div className="row">
                <div>G60.0</div>
                <div>
                  샤르코-마리-치아질환 / 데제린-소타스병 / 루시-레비증후군 /
                  영아기의 비대성 신경병증 / 유전성 운동 및 감각 신경병증I-IV형
                  / 유전성 운동 및 감각 신경병 증 / 비골근위축(축삭형, 비대형)
                </div>
              </div>
              <div className="row">
                <div>G61.0</div>
                <div>길랭-바레증후군 / 급성 감염(후)다발신경염</div>
              </div>
              <div className="row">
                <div>G70.0</div>
                <div>중증근무력증</div>
              </div>
              <div className="row">
                <div>G71</div>
                <div>근육의 원발성 장애</div>
              </div>
              <div className="row">
                <div>G71.0</div>
                <div>
                  근디스트로피 / 뒤쉔 또는 베커와 유사한 보통염색체열성, 소아형
                  근디스트로피 / 양성[베커] 근디스트로피 / 조기수축을 동반하는
                  양성 어깨종아리[에머리-드 라이프스] 근디스트로피 / 원위성
                  근디스트로피 / 얼굴어깨팔 근디스트로피 / 지 대 근디스트로피 /
                  눈 근디스트로피 / 눈인두성 근디스트로피 / 어깨종아리 근디
                  스트로피 / 중증[뒤쉔] 근디스트로피
                </div>
              </div>
              <div className="row">
                <div>G71.1</div>
                <div>
                  근긴장장애 / 근긴장디스트로피[스타이너트] / 연골형성장애성
                  근긴장증 / 약물 유발 근긴장증 / 증상성 근긴장증 / 선천성
                  근긴장증 NOS / 우성[톰슨] 선천성 근긴장증 / 열성[베커] 선천성
                  근긴장증 / 신경근육긴장[아이작스] / 선천성 이 상근긴장증 /
                  거짓근긴장증
                </div>
              </div>
              <div className="row">
                <div>G71.2</div>
                <div>
                  선천성 근병증 / 선천성 근디스트로피 NOS / 근섬유의 특정
                  형태이상을 동반한 선천성 근디스트로피 / 중심핵 병 / 미세심 병
                  / 다발심 병 / 근섬유형 불균형 / 근세관성(중심핵성) 근병증 /
                  네말린근병증
                </div>
              </div>
              <div className="row">
                <div>G71.3</div>
                <div>달리 분류되지 않은 미토콘드리아근병증</div>
              </div>
              <div className="row">
                <div>G71.8</div>
                <div>근육의 기타 원발성 장애</div>
              </div>
              <div className="row">
                <div>G71.9</div>
                <div>근육의 상세불명의 원발성 장애 / 유전성 근병증 NOS</div>
              </div>
              <div className="row">
                <div>GJ84.18</div>
                <div>특발성 폐섬유증</div>
              </div>
              <div className="row">
                <div>GJ84.18</div>
                <div>특발성 폐섬유증</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div className="injuryCodeContent">
          <div className=" injuryCode">
            <div className="table-container">
              <div className="header">
                <div>상병기호</div>
                <div>상병명</div>
              </div>
              <div className="row">
                <div>C71.7 + J96.1</div>
                <div>뇌간의 악성 신생물 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>D33.1 + J96.1</div>
                <div>뇌간의 양성 신생물 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G04 + J96.1</div>
                <div>뇌염, 척수염 및 뇌척수염 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G05 + J96.1</div>
                <div>달리 분류된 질환에서의 뇌염, 척수염 및 뇌척수염 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G12.28 + J96.1</div>
                <div>기타 및 상세불명의 운동신경세포병 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G23.2 + J96.1</div>
                <div>다발-계통 위축 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G23.8 + J96.1</div>
                <div>신경성 기립성 저혈압[샤이-드레거] + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G46.3 + J96.1</div>
                <div>뇌간뇌졸중 증후군 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G47.31 + J96.1</div>
                <div>중추성 수면무호흡 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G61.0 + J96.1</div>
                <div>밀러휘셔증후군 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G72.0 + J96.1</div>
                <div>약물유발 근병증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G93.1 + J96.1</div>
                <div>달리 분류되지 않은 무산소성 뇌손상 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G93.4 + J96.1</div>
                <div>상세불명의 뇌병증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>G93.80 + J96.1</div>
                <div>대사성 뇌병증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>I61.3 + J96.1</div>
                <div>뇌간의 뇌내출혈 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>I63 + J96.1</div>
                <div>뇌경색증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>M40.24 + J96.1</div>
                <div>기타 및 상세불명의 척주후만증, 흉추부 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>M41 + J96.1</div>
                <div>척주측만증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>M47.12 + J96.1</div>
                <div>척수병증을 동반한 기타 척추증, 경부 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>P91.6 + J96.1</div>
                <div>신생아의 저산소성 허혈뇌병증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q04.0 + J96.1</div>
                <div>뇌량의 선천기형 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q04.9 + J96.1</div>
                <div>뇌의 상세불명의 선천기형 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>S14.1</div>
                <div>경부척수의 기타 및 상세불명의 손상</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="injuryCodeContent">
          <div className=" injuryCode">
            <div className="table-container">
              <div className="header">
                <div>상병기호</div>
                <div>상병명</div>
              </div>
              <div className="row">
                <div>B90.9 + J96.1</div>
                <div>호흡기 및 상세불명 결핵의 후유증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>I27.0 + J96.1</div>
                <div>원발성 폐동맥고혈압 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>I27.2 + J96.1</div>
                <div>기타 이차성 폐동맥고혈압 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>I27.9 + J96.1</div>
                <div>폐심장증(만성) NOS + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>J44 + J96.1</div>
                <div>기타 만성 폐색성 폐질환 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>J47 + J96.1</div>
                <div>기관지확장증 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>J98.01 + J96.1</div>
                <div>기관기관지의 허탈 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>J98.8 + J96.1</div>
                <div>기타 명시된 호흡장애 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>P27.1 + J96.1</div>
                <div>출생전후기에 기원한 기관지폐형성이상 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>P28.5 + J96.1</div>
                <div>신생아의 호흡부전 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>P29.3 + J96.1</div>
                <div>신생아의 (지속성)폐동맥고혈압 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q31.5 + J96.1</div>
                <div>선천성 후두연화 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q32 + J96.1</div>
                <div>기관 및 기관지의 선천기형 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q33.0 + J96.1</div>
                <div>선천성 낭성 폐 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q33.8 + J96.1</div>
                <div>폐의 기타 선천기형 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q34.8 + J96.1</div>
                <div>호흡계통의 기타 명시된 선천기형 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q38.8 + J96.1</div>
                <div>인두의 기타 선천기형 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q39.2 + J96.1</div>
                <div>폐쇄를 동반하지 않은 선천성 기관지-식도루 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q79.0 + J96.1</div>
                <div>선천성 횡격막탈장 + 만성호흡부전</div>
              </div>
              <div className="row">
                <div>Q24.9 + J96.1</div>
                <div>심장의 선천이상 NOS + 만성호흡부전</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </InjuryCode>
  );
};

export default RespiratorInjuryCode;
