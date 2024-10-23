import { navigationLinks } from "@/utils/datas/navigation";

const NavLinks = () => {
  return (
    <div className="flex gap-7 font-light">
      {navigationLinks.map((link) => {
        const { id, text } = link;
        return (
          <p key={id} className="un cursor-pointer">
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default NavLinks;
