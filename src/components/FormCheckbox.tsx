import { Checkbox } from "./ui/checkbox";

interface propsCheckbox {
  name: string;
}

const FormCheckbox = (props: propsCheckbox) => {
  const { name } = props;

  return (
    <div className="rounded-md p-2 flex flex-col justify-center items-center text-center space-y-1.5">
      <p className="text-sm font-medium">{name}</p>
      <Checkbox />
    </div>
  );
};

export default FormCheckbox;
