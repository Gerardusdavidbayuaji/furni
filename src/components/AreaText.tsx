interface AreaTextProps {
  text: string;
}

const AreaText = (props: AreaTextProps) => {
  const { text } = props;
  return <div className="font-normal text-base">{text}</div>;
};

export default AreaText;
