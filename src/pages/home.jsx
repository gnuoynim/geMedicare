import Lnb from "../component/lnb";
import MainVisual from "../component/mainVisual";
import Service from "../component/service";
import Product from "../component/product";
import Lease from "../component/lease";
import LeaseProcedure from "../component/leaseProcedure";
import Counseling from "../component/counseling";
import Footer from "../component/footer";

const Home = () => {
  return (
    <>
      <MainVisual />
      <Service />
      <LeaseProcedure
        step1Title="서류발급"
        step1Description="병원 외래진료 혹은 퇴원시에 산소치료 처방전과 산소치료 급여대상자 등록신청서를 발급 받으세요"
      />
      <Product />
      <Lease />
      <Counseling />
    </>
  );
};

export default Home;
