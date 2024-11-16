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
  list?: string[];
  defaultValue: string;
}

const FormSelect = (props: propsSelect) => {
  const { label, name, list, defaultValue } = props;

  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor={name} className="text-left">
          {label}
        </Label>
        <Select>
          <SelectTrigger className="w-full outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]">
            <SelectValue placeholder={defaultValue} />
          </SelectTrigger>
          <SelectContent>
            {list?.map((item) => {
              return (
                <SelectItem key={item} value={item}>
                  {item}
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
