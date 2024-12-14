import { navigationLinks } from "@/utils/datas/navigation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store/store";

const NavLinks = () => {
  const user = useSelector((state: RootState) => state.userState.user);

  return (
    <div className="hidden lg:flex gap-7 font-light">
      {navigationLinks.map((link) => {
        const { id, text, url } = link;
        if (url === "/orders" && !user) return null;
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
