import { PaginationProps } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./orders-details";

export function OrdersTableRow (){
    return(
        <TableRow>
        <TableCell>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline' size='xs'>
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                </DialogTrigger>

       
                <OrderDetails />
               
            </Dialog>

        </TableCell>
        <TableCell className="font-mono text-xs font-medium">
            12321312321312
        </TableCell>
        <TableCell className="text-muted-foreground">
            Há 15 minutos
        </TableCell>
        <TableCell>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                <span className="">Confirmado</span>
            </div>
        </TableCell>
        <TableCell className="font-medium">
            Paulo Henrique da Rosa
        </TableCell>
        <TableCell className="font-medium">
            R$ 145,55
        </TableCell>
        <TableCell>
            <Button variant='outline' size='xs'>
                <ArrowRight className="mr-2 h-3 w-3" />
                Aprovar
            </Button>
        </TableCell>
        <TableCell>
            <Button variant='ghost' size='xs'>
                <X className="mr-2 h-3 w-3" />
                Cancelar
            </Button>
        </TableCell>
    </TableRow>
    
    )
}