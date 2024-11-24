import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface propsSearch {
  id: string;
  name: string;
  label: string;
  value: string; // Menambahkan 'value' ke dalam interface
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
}

const FormInput = (props: propsSearch) => {
  const { id, name, label, defaultValue } = props;

  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor={name} className="text-left">
          {label}
        </Label>
        <Input
          type={name}
          id={id}
          placeholder={defaultValue}
          className="h-[39px] rounded-lg outline outline-1 outline-[#778F86] focus:outline-2 focus:outline-[#778F86]"
        />
      </div>
    </div>
  );
};

export default FormInput;
