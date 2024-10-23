import { cn } from "@/lib/utils";

interface FirstTitleProps {
  text: string;
  className?: string;
}

const FirstTitle = (props: FirstTitleProps) => {
  const { text, className } = props;

  return (
    <div className={cn("font-medium text-4xl text-white", className)}>
      {text}
    </div>
  );
};

export default FirstTitle;
