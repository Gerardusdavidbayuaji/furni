import { Checkbox } from "./ui/checkbox";

interface propsCheckbox {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const FormCheckbox = (props: propsCheckbox) => {
  const { label, name, checked, onChange } = props;

  // Adjust the onChange handler type to match the Checkbox component
  const handleCheckedChange = (checked: boolean) => {
    onChange(checked);
  };

  return (
    <div className="rounded-md p-2 flex flex-col justify-center items-center text-center space-y-1.5">
      <p className="lg:text-sm md:text-sm text-xs font-medium">{label}</p>
      <Checkbox
        name={name}
        checked={checked}
        onCheckedChange={handleCheckedChange}
      />
    </div>
  );
};

export default FormCheckbox;
