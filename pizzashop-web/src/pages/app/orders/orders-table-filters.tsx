import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger,SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { Search, X } from "lucide-react";


export function OrderTableFilters (){
    return(
        <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros</span>
                    <Input placeholder="Id do pedido" className="h-8 w-auto" />
                    <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
                    <Select defaultValue="all">
                        <SelectTrigger className="h-8 w-[100px]">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todos todos</SelectItem>
                            <SelectItem value="pending">Pendente</SelectItem>
                            <SelectItem value="canceled">Cancelado</SelectItem>
                            <SelectItem value="processing">Em preparo</SelectItem>
                            <SelectItem value="delivering">Em preparo</SelectItem>
                            <SelectItem value="delivered">Em entrega</SelectItem>


                        </SelectContent>
                    </Select>

                    <Button type="submit" variant="secondary">
                        <Search className="h-4 w-4 mr-2" />
                        Filtrar resultados
                    </Button>
                    <Button type="submit" variant="outline">
                        <X className="h-4 w-4 mr-2" />
                       Remover filtros
                    </Button>
                </form>  
    )
}