import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface OrderDetailsProps {

}

export function OrderDetails(){

    return(
       <DialogContent>
        <DialogHeader>
            <DialogTitle>Pedido 22213213</DialogTitle>
            <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
            <Table>
                <TableBody>
                    <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                <span className="">Confirmado</span>
                            </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                           Paulo Henique da Rosa
                            </TableCell>
                         </TableRow>

                         <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                           35 9999 9999
                            </TableCell>
                         </TableRow>

                         <TableRow>
                            <TableCell className="text-muted-foreground">Email</TableCell>
                            <TableCell className="flex justify-end">
                           paulo@gmail.com
                            </TableCell>
                         </TableRow>

                         <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                           3 minutos
                            </TableCell>
                         </TableRow>
                   
                </TableBody>
            </Table>


            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Qtd</TableHead>
                        <TableHead className="text-right">Preço</TableHead>
                        <TableHead className="text-right">SubTotal</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell> Pizza Pepperoni familia</TableCell>
                        <TableCell className="text-right"> 2</TableCell>
                        <TableCell className="text-right"> R$ 70,50</TableCell>
                        <TableCell className="text-right"> R$ 141,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Pizza mussarela</TableCell>
                        <TableCell className="text-right"> 1</TableCell>
                        <TableCell className="text-right"> R$ 40,50</TableCell>
                        <TableCell className="text-right"> R$ 40,50</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total do pedido</TableCell>
                        <TableCell className="text-right font-medium">R$ 181,00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>

       </DialogContent>
    )
}