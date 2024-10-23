import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-col h-screen font-poppins">
      <Navbar />
      <div className="w-full grow flex flex-col bg-slate-300">{children}</div>
    </div>
  );
};

export default Layout;