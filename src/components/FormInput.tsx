import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {
  label: string;
  name: string;
  type: string;
  defaultValue: string;
  size: number;
};

const FormInput = (props: Props) => {
  const { label, name, type, defaultValue, size } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        placeholder={defaultValue}
        className={`${size}`}
      />
    </div>
  );
};

export default FormInput;
