import { ReactNode } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`flex flex-col h-screen font-poppins ${
        isHomePage ? "bg-[#395C4E]" : "bg-[#F0F2F1] dark:bg-[#161514]"
      }`}
    >
      <Navbar />
      <div className="w-full grow flex flex-col bg-[#F0F2F1] dark:bg-[#161514]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
