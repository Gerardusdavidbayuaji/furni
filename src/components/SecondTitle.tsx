import { cn } from "@/lib/utils";

interface SecondTitleProps {
  text: string;
  className?: string;
}

const SecondTitle = (props: SecondTitleProps) => {
  const { text, className } = props;
  return (
    <div className={cn("font-medium lg:text-2xl md:text-base", className)}>
      {text}
    </div>
  );
};

export default SecondTitle;
