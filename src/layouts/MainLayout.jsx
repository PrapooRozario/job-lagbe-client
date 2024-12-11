import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-hind-siliguri w-11/12 mx-auto">
      <Navbar></Navbar>
      <div>
        <section className="my-10"> 
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
