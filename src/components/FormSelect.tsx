import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  Select,
} from "@/components/ui/select";

interface propsSelect {
  label: string;
  name: string;
  list: { value: string; label: string }[];
  value?: string;
  onValueChange?: (value: string) => void;
}

const FormSelect = (props: propsSelect) => {
  const { label, name, list, value, onValueChange } = props;

  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor={name} className="text-left">
          {label}
        </Label>
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="w-full outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]">
            <SelectValue placeholder={value} />
          </SelectTrigger>
          <SelectContent>
            {list.map((item) => {
              return (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FormSelect;
