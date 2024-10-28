import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryBox = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-2 p-2 lg:h-60 md:h-40 w-full rounded-lg bg-[#DFE6E6]">
      <div className="rounded-md p-2 flex justify-start items-center text-center">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="search-product" className="text-left">
            Search Product
          </Label>
          <Input
            type="search-product"
            id="search-product"
            placeholder="Search Product . . . "
            className="outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]"
          />
        </div>
      </div>
      <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="select-category" className="text-left">
            Select Category
          </Label>
          <Select>
            <SelectTrigger className="w-full outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]">
              <SelectValue placeholder="Select Category . . ." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tables">Tables</SelectItem>
              <SelectItem value="chairs">Chairs</SelectItem>
              <SelectItem value="kids">Kids</SelectItem>
              <SelectItem value="sofa">Sofa</SelectItem>
              <SelectItem value="beds">Beds</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="select-product" className="text-left">
            Select Company
          </Label>
          <Select>
            <SelectTrigger className="w-full outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]">
              <SelectValue placeholder="Select Company . . ." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ikea-1">Ikea</SelectItem>
              <SelectItem value="ikea-2">Ikea Tanjung Duren</SelectItem>
              <SelectItem value="ikea-3">Ikea Petamburan</SelectItem>
              <SelectItem value="ikea-4">Ikea Grogol</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="sort-product" className="text-left">
            Sort Product
          </Label>
          <Select>
            <SelectTrigger className="w-full outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]">
              <SelectValue placeholder="Sort Product . . ." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a-z">a-z</SelectItem>
              <SelectItem value="z-a">z-a</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
        <div className="w-full space-y-1.5 text-sm font-medium">
          <div className="flex justify-between">
            <p>Setting Price</p>
            <p>Rp. 16.000.000</p>
          </div>
          <Slider defaultValue={[33]} max={100} step={1} />
          <div className="flex justify-between text-sm">
            <p>
              Min: <span>Rp. 0</span>
            </p>
            <p>
              Max: <span>Rp. 16.000.000</span>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md p-2 flex flex-col justify-center items-center text-center space-y-1.5">
        <p className="text-sm font-medium">Free Shipping</p>
        <Checkbox />
      </div>
      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Button className="rounded-lg bg-[#F5C02F] shadow-none hover:bg-[#F5C02F]/80 text-[#2B2B2B] w-40 mt-2 md:text-xs md:h-auto">
          Search
        </Button>
      </div>
      <div className="rounded-md p-2 flex justify-center items-center text-center">
        <Button className="rounded-lg bg-[#778F86] shadow-none hover:bg-[#778F86]/80 w-40 mt-2 md:text-xs md:h-auto">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CategoryBox;
