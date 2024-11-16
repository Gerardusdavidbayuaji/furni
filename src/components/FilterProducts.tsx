import { Button } from "@/components/ui/button";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-2 p-2 lg:h-60 md:h-40 w-full rounded-lg bg-[#DFE6E6] dark:bg-[#242322]">
      <FormInput
        id="search-product"
        name="search"
        label="Seach Product"
        defaultValue="Search Product . . ."
      />
      <FormSelect
        label="Select Category"
        name="select-product"
        defaultValue="Select Category . . ."
      />
      <FormSelect
        label="Select Company"
        name="select-company"
        defaultValue="Select Company . . ."
      />
      <FormSelect
        label="Sort Product"
        name="select-product"
        defaultValue="Sort Product . . ."
      />

      <FormRange
        name="Setting Price"
        selectedPrice="1200"
        maxPrice={100}
        step={1}
      />

      <FormCheckbox name="Free Shipping" />

      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Button className="rounded-lg bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B] w-40 mt-2 md:text-xs md:h-auto">
          Search
        </Button>
      </div>
      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Link to="/products">
          <Button className="rounded-lg bg-[#778F86] shadow-none hover:bg-[#778F86]/80 text-[#FAFAFA] w-40 mt-2 md:text-xs md:h-auto">
            Reset
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Filter;
