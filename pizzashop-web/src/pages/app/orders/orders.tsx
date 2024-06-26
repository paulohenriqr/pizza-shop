import { Button } from "@/components/ui/button";

import { Table, TableBody,  TableFooter,  TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Helmet } from "react-helmet-async";
import { OrdersTableRow } from "./orders-table-row";
import { OrderTableFilters } from "./orders-table-filters";
import { PaginationProps } from "@/components/pagination";

export function Orders() {

    return (
        <>
            <Helmet title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
                <OrderTableFilters />
           
            <div className="space-y-2.5">
              

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]" >Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead >Cliente</TableHead>
                                <TableHead className="w-[140px]">Total do pedido</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                        {Array.from({ length: 12}).map((_,i)=>{
                            return(
                          <OrdersTableRow key={i}/>
                            )
                        })}
                        </TableBody>
                    
                    </Table>
                    </div>
                   
                        <PaginationProps totalCount={100} perPage={10} pageIndex={0} />
                       
                </div>

            </div>

        </>
    )
}