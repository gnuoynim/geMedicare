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
      <LeaseProcedure />
      <Product />
      <Lease />
      <Counseling />
    </>
  );
};

export default Home;
