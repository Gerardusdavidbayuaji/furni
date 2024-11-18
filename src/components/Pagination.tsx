import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllProducts } from "@/utils/apis/products/api";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page: number) => {
    const params = { page, limit: 10 };

    try {
      const response = await getAllProducts(params);
      setProducts(response.data);
      setTotalPages(Math.ceil(response.meta.total / 10));
    } catch (error) {
      console.log("error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-3 cursor-pointer">
      <Button
        onClick={handlePrevPage}
        className="flex rounded-lg justify-center shadow-none h-9 items-center text-[#2B2B2B] text-sm bg-[#F0F2F1] hover:bg-[#DFE6E6]"
      >
        <ChevronLeft className="w-7 h-5" />
        <p>Prev</p>
      </Button>

      <div className="flex text-white text-sm font-normal h-9 w-9 rounded-lg justify-center items-center bg-[#395C4E] hover:bg-[#395C4E]/80">
        {currentPage}
      </div>

      <Button
        onClick={handleNextPage}
        className="flex rounded-lg justify-center shadow-none h-9 items-center text-[#2B2B2B] text-sm bg-[#F0F2F1] hover:bg-[#DFE6E6]"
      >
        <p>Next</p>
        <ChevronRight className="w-7 h-5" />
      </Button>
    </div>
  );
};

export default Pagination;
