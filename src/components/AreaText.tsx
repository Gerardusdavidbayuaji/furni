import { cn } from "@/lib/utils";

interface AreaTextProps {
  text: string;
  className?: string;
}

const AreaText = (props: AreaTextProps) => {
  const { text, className } = props;
  return (
    <div
      className={cn("font-normal lg:text-sm md:text-xs text-white", className)}
    >
      {text}
    </div>
  );
};

export default AreaText;
