import { navigationLinks } from "@/utils/datas/navigation";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex gap-7 font-light">
      {navigationLinks.map((link) => {
        const { id, text, url } = link;
        return (
          <Link key={id} to={url}>
            <p className="un cursor-pointer">{text}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
