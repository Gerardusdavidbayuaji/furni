import { useEffect, useState } from "react";

import { getAllProducts } from "@/utils/apis/products/api";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const [, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async (page: number) => {
      const params = { page, limit: 10 };

      try {
        const response = await getAllProducts(params);
        setProducts(response.data);
      } catch (error) {
        console.log("error fetching products", error);
      }
    };

    fetchProducts(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    const nextPage = currentPage === 3 ? 1 : currentPage + 1;
    onPageChange(nextPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-3 cursor-pointer">
      <Button
        onClick={handlePrevPage}
        className="text-[#2B2B2B] dark:text-[#FAFAFA] bg-[#F0F2F1] hover:bg-[#DFE6E6] dark:bg-[#161514] hover:dark:bg-[#242322] flex rounded-lg justify-center shadow-none h-9 items-center text-sm"
      >
        <ChevronLeft className="w-7 h-5" />
      </Button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <div
            key={index}
            onClick={() => onPageChange(page)}
            className={`flex text-sm font-normal h-9 w-9 rounded-lg justify-center items-center cursor-pointer transition duration-300 ${
              page === currentPage
                ? "bg-[#395C4E] text-[#F0F2F1]"
                : "bg-[#F0F2F1] text-[#2B2B2B] dark:text-[#F0F2F1] hover:bg-[#DFE6E6] dark:bg-[#161514] hover:dark:bg-[#242322]"
            }`}
          >
            {page}
          </div>
        );
      })}

      <Button
        onClick={handleNextPage}
        className="text-[#2B2B2B] dark:text-[#FAFAFA] bg-[#F0F2F1] hover:bg-[#DFE6E6] dark:bg-[#161514] hover:dark:bg-[#242322] flex rounded-lg justify-center shadow-none h-9 items-center text-sm"
      >
        <ChevronRight className="w-7 h-5" />
      </Button>
    </div>
  );
};

export default Pagination;
