import { Eclipse, MoonIcon, Orbit, SunMedium } from "lucide-react";
import { useTheme } from "@/utils/contexts/theme-provider";

import {
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuSub,
} from "@/components/ui/dropdown-menu";

const ThemeSubmenu = () => {
  const { theme, setTheme } = useTheme(); // Ambil theme dan setTheme dari context

  // Fungsi untuk menangani pemilihan tema
  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme as "light" | "dark" | "system");
  };

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Eclipse />
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="mr-2 -mt-9 space-y-1">
          <DropdownMenuItem
            onClick={() => handleThemeChange("light")}
            className={
              theme === "light" ? "bg-[#DFE6E6] dark:bg-[#353432]" : ""
            }
          >
            <SunMedium />
            <span className="text-xs">Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange("dark")}
            className={theme === "dark" ? "bg-[#DFE6E6] dark:bg-[#353432]" : ""}
          >
            <MoonIcon />
            <span className="text-xs">Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange("system")}
            className={
              theme === "system" ? "bg-[#DFE6E6] dark:bg-[#353432]" : ""
            }
          >
            <Orbit />
            <span className="text-xs">System</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default ThemeSubmenu;
