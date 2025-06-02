import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-[100%] ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
