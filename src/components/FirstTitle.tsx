import { cn } from "@/lib/utils";

interface FirstTitleProps {
  text: string;
  className?: string;
}

const FirstTitle = (props: FirstTitleProps) => {
  const { text, className } = props;

  return (
    <div
      className={cn(
        "lg:font-medium text-lg md:text-4xl text-[#FAFAFA]",
        className
      )}
    >
      {text}
    </div>
  );
};

export default FirstTitle;
