import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-3 cursor-pointer">
      <Button className="flex rounded-lg justify-center shadow-none h-9 items-center text-[#2B2B2B] text-sm bg-[#F0F2F1] hover:bg-[#DFE6E6]">
        <ChevronLeft className="w-7 h-5" />
        <p>Prev</p>
      </Button>

      <div className="flex text-white text-sm font-normal h-9 w-9 rounded-lg justify-center items-center bg-[#395C4E] hover:bg-[#395C4E]/80">
        1
      </div>

      <div className="flex text-[#2B2B2B] text-sm font-normal h-9 w-9 rounded-lg justify-center items-center">
        2
      </div>

      <div className="flex text-[#2B2B2B] text-sm font-normal h-9 w-9 rounded-lg justify-center items-center">
        3
      </div>

      <Button className="flex rounded-lg justify-center shadow-none h-9 items-center text-[#2B2B2B] text-sm bg-[#F0F2F1] hover:bg-[#DFE6E6]">
        <p>Next</p>
        <ChevronRight className="w-7 h-5" />
      </Button>
    </div>
  );
};

export default Pagination;
