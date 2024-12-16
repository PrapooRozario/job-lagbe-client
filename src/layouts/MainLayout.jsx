import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="font-hind-siliguri w-11/12 mx-auto">
      {loading ? (
        <div class="flex justify-center items-center h-screen">
          <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <section className="my-10">
            <Outlet></Outlet>
          </section>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
