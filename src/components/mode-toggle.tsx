
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import WhatsAppIcon from "../assets/icons/whatsapp-icon.svg";
import WindowsIcon from "../assets/icons/windows-icon.svg";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <img src={WhatsAppIcon} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" alt="Whatsapp Theme" />
          <img src={WindowsIcon} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" alt="Windows Theme" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Windows
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
