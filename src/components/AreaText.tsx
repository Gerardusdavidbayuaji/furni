import { cn } from "@/lib/utils";

interface AreaTextProps {
  text: string;
  className?: string;
}

const AreaText = (props: AreaTextProps) => {
  const { text, className } = props;

  return (
    <div
      className={cn("font-normal md:text-sm text-xs text-[#FAFAFA]", className)}
    >
      {text}
    </div>
  );
};

export default AreaText;
