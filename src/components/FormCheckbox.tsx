import { Checkbox } from "./ui/checkbox";

interface propsCheckbox {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const FormCheckbox = (props: propsCheckbox) => {
  const { label, name, checked, onChange } = props;

  return (
    <div className="rounded-md p-2 flex flex-col justify-center items-center text-center space-y-1.5">
      <p className="lg:text-sm md:text-sm text-xs font-medium">{label}</p>
      <Checkbox name={name} checked={checked} onChange={onChange} />
    </div>
  );
};

export default FormCheckbox;
