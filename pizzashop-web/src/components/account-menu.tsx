
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger  } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";





export function AccountMenu() {


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none" >
                    Pizza Shop
                    <ChevronDown className="w4 h4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w56">
                <DropdownMenuLabel className="flex flex-col">
                  <span>  Paulo Henrique</span>
                  <span className="text-xs font-normal text-muted-foreground">paulo@gmail.com</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Building className="w4 h-4 mr-2" />
                    <span>Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="w4 h-4 mr-2" />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}