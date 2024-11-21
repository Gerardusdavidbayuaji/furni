import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/utils/formatter";
import { useState } from "react";

interface propsRange {
  name: string;
  maxPrice: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const FormRange = (props: propsRange) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const { name, maxPrice, step, value } = props;

  const handleSliderChange = (value: number[]) => {
    setSelectedPrice(value[0]);
    props.onChange(value[0]); // Notify the parent with the updated price
  };

  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
      <div className="text-[#2B2B2B] dark:text-[#FAFAFA] w-full space-y-1.5 text-sm font-medium">
        <div className="flex justify-between">
          <p>{name}</p>
          <p>{formatPrice(selectedPrice.toString())}</p>
        </div>
        <Slider
          value={[value]}
          max={maxPrice}
          step={step}
          onValueChange={handleSliderChange}
        />
        <div className="flex justify-between text-sm">
          <p>
            Min: <span>Rp. 0</span>
          </p>
          <p>
            Max: <span>{formatPrice(maxPrice.toString())}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormRange;
