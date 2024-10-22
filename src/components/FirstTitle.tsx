interface FirstTitleProps {
  text: string;
}

const FirstTitle = (props: FirstTitleProps) => {
  const { text } = props;
  return <div className="font-medium text-5xl text-white">{text}</div>;
};

export default FirstTitle;
