import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className="font-hind-siliguri w-11/12 mx-auto"> 
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
};

export default MainLayout;