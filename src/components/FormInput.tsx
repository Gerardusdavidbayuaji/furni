import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface propsSearch {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const FormInput = (props: propsSearch) => {
  const { id, value, name, label, defaultValue, onChange } = props;

  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label
          htmlFor={name}
          className="text-left lg:text-sm md:text-sm text-xs"
        >
          {label}
        </Label>
        <Input
          type={name}
          id={id}
          value={value}
          placeholder={defaultValue}
          onChange={onChange}
          className="h-[39px] rounded-lg outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]"
        />
      </div>
    </div>
  );
};

export default FormInput;
