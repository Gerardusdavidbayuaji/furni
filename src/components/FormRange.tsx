import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/utils/formatter";

interface propsRange {
  name: string;
  selectedPrice: string;
  maxPrice: number;
  step: number;
}

const FormRange = (props: propsRange) => {
  const { name, selectedPrice, maxPrice, step } = props;
  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
      <div className="text-[#2B2B2B] dark:text-[#FAFAFA] w-full space-y-1.5 text-sm font-medium">
        <div className="flex justify-between">
          <p>{name}</p>
          <p>{formatPrice(selectedPrice)}</p>
        </div>
        <Slider defaultValue={[0]} max={maxPrice} step={step} />
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
  );
};

export default FormRange;
