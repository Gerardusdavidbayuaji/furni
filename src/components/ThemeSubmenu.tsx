import { Eclipse, MoonIcon, Orbit, SunMedium } from "lucide-react";

import {
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuSub,
} from "@/components/ui/dropdown-menu";

const ThemeSubmenu = () => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Eclipse />
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="mr-2 -mt-10">
          <DropdownMenuItem>
            <SunMedium />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MoonIcon />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Orbit />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default ThemeSubmenu;
