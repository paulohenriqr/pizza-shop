import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip} from 'recharts'
import colors from 'tailwindcss/colors'



export function RevenueChart (){

const data = [
    {date: '10/12', revenus: 1200},
    {date: '11/12', revenus: 900},
    {date: '12/12', revenus: 800},
    {date: '13/12', revenus: 1400},
    {date: '14/12', revenus: 1000},
    {date: '15/12', revenus: 990}

]
    return(
       <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8 ">
            <div className="space-y-1">
            <CardTitle className="text-base font-medium"> Receita no período</CardTitle>
            <CardDescription>Receita diária no periodo</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data} style={{fontSize: 12}}>

                    <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>
                    <YAxis stroke="#888" axisLine={false}  tickLine  tickFormatter={(value: number)=> 
                        value.toLocaleString('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        })
                     }
                     
                     width={80}/>
                    <CartesianGrid vertical={false} className="stroke-muted"/>
                    <Line  type="linear" strokeWidth={2} dataKey="revenus" stroke={colors.violet['400']}/>
                    
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
       </Card>
    )
}