import { useNavigate } from "react-router-dom";
import { DropdownMenuItem } from "./ui/dropdown-menu";

interface itemProps {
  Icon: React.ElementType;
  label: string;
  to?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const MenuItem = (props: itemProps) => {
  const { Icon, label, to, onClick, className } = props;
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <DropdownMenuItem onClick={handleClick} className={className}>
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </DropdownMenuItem>
  );
};

export default MenuItem;
