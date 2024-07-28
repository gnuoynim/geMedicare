import styled from "styled-components";

const InjuryCode = styled.div`
  .tab03 {
    width:70%;
  margin: 0 auto;
    .header {
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
      border: none;
      > div {
       /* width: 670px;*/
        text-align: left;
      }
      > div:nth-of-type(1) {
        padding-left: 100px;
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
const OxygenInjuryCode = () => {
  return (
    <InjuryCode>
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
                J12, J15, J16, J17, J18, J70, J100, J110, J120 ~ J129, J13, J14,
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
                J200, J67, J69, J678, J679, J680, J690, J691, J698, J8410, J851,
                J852,{" "}
              </div>
            </div>
            <div className="row row2">
              <div> M001, M0010 ～ M0019, O740, P23, P230 ～ P239 </div>
            </div>
          </div>
        </div>
      </div>
    </InjuryCode>
  );
};

export default OxygenInjuryCode;
