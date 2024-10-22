import Navbar from "./Navbar";
import FirstTitle from "./FirstTitle";

const Layout = () => {
  return (
    <section className="w-full h-screen font-poppins">
      <div className="bg-[#395C4E] w-full h-[60vh]">
        <Navbar />
        <div className="grid grid-cols-2 ">
          <div className=" bg-slate-500">
            <FirstTitle text="Modern Interior" />
            <FirstTitle text="Design Studio" />
          </div>
          <div className=" bg-yellow-300">2</div>
        </div>
      </div>
      <div className="bg-[#F0F2F1] w-full h-[40vh]">Isi div 2</div>
    </section>
  );
};

export default Layout;
