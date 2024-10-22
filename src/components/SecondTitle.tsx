interface SecondTitleProps {
  text: string;
}

const SecondTitle = (props: SecondTitleProps) => {
  const { text } = props;
  return <div className="font-medium text-2xl">{text}</div>;
};

export default SecondTitle;
