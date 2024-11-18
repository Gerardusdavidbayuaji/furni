import { Checkbox } from "./ui/checkbox";

interface propsCheckbox {
  label: string;
  name: string;
  defaultValue: boolean;
}

const FormCheckbox = (props: propsCheckbox) => {
  const { label, name, defaultValue } = props;

  return (
    <div className="rounded-md p-2 flex flex-col justify-center items-center text-center space-y-1.5">
      <p className="text-sm font-medium">{label}</p>
      <Checkbox name={name} defaultChecked={defaultValue} />
    </div>
  );
};

export default FormCheckbox;
