import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleAlert, CircleCheck, Download, Ellipsis } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const results = [
  {
    date: "15/03",
    dayWeek: "sexta-feira",
    firstHour: "09:00",
    lasthour: "18:00",
    status: "success",
  },
  {
    date: "14/03",
    dayWeek: "quinta-feira",
    firstHour: "13:00",
    lasthour: "22:00",
    status: "pending",
  },
  {
    date: "13/03",
    dayWeek: "quarta-feira",
    firstHour: "09:40",
    lasthour: "18:40",
    status: "success",
  },
  {
    date: "11/03",
    dayWeek: "terça-feira",
    firstHour: "11:00",
    lasthour: "20:00",
    status: "success",
  },
  {
    date: "10/03",
    dayWeek: "segunda-feira",
    firstHour: "09:00",
    lasthour: "18:00",
    status: "pending",
  },
  {
    date: "09/03",
    dayWeek: "domingo",
    firstHour: "-",
    lasthour: "-",
    status: "neutral",
  },
  {
    date: "08/03",
    dayWeek: "sábado",
    firstHour: "-",
    lasthour: "-",
    status: "neutral",
  },
];

export const PointMirror: React.FC = () => {
  return (
    <section className="px-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-white">Período:</h3>
            <Select defaultValue="period-1">
              <SelectTrigger className="w-[230px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="period-1">
                    16/03/2024 - 15/04/2024
                  </SelectItem>
                  <SelectItem value="period-2">
                    16/02/2024 - 15/03/2024
                  </SelectItem>
                  <SelectItem value="period-3">
                    16/01/2024 - 15/02/2024
                  </SelectItem>
                  <SelectItem value="period-4">
                    16/12/2024 - 15/01/2024
                  </SelectItem>
                  <SelectItem value="period-5">
                    16/11/2024 - 15/12/2024
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-white">Legenda:</h3>
            <div className="flex items-center gap-1">
              <Badge className="rounded gap-2">
                <CircleCheck />
                Aprovado
              </Badge>
              <Badge className="rounded gap-2" variant="secondary">
                <CircleAlert />
                Pendente
              </Badge>
            </div>
          </div>
        </div>
        <Button variant="ghost" className="gap-4 text-base h-10 px-5">
          <Download />
          Download
        </Button>
      </div>

      <h2 className="font-semibold text-xl text-primary mt-7 mb-3">
        Resultados do período
      </h2>

      <div className="grid grid-cols-10 bg-primary-aux-accent h-[30px] rounded mb-3 px-5 text-sm items-center text-center text-white/60 [&>p]:col-span-2">
        <p className="text-start">Data</p>
        <p>Entradas</p>
        <p>Saídas</p>
        <p>Status</p>
        <p className=" text-end">Mais</p>
      </div>

      <main className="space-y-1">
        {results.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-10 w-full rounded items-center h-[70px] px-5 bg-primary-aux hover:bg-primary-aux-accent text-white/80 hover:text-white"
          >
            <div className="col-span-2">
              <h3 className="font-bold text-xl">{item.date}</h3>
              <span className="text-xs text-white/60">{item.dayWeek}</span>
            </div>

            <p className="col-span-2 text-center font-bold text-xl">
              {item.firstHour}
            </p>
            <p className="col-span-2 text-center font-bold text-xl">
              {item.lasthour}
            </p>
            <div className="col-span-2 flex justify-center">
              {item.status === "success" ? (
                <Badge className="p-0 h-8 w-8 flex items-center justify-center">
                  <CircleCheck />
                </Badge>
              ) : item.status === "pending" ? (
                <Badge
                  variant="secondary"
                  className="p-0 h-8 w-8 flex items-center justify-center"
                >
                  <CircleAlert />
                </Badge>
              ) : (
                "-"
              )}
            </div>

            <div className="flex items-center gap-5 col-span-2 justify-end">
              <Button asChild>
                <Link to="/incluir-batida">
                  Bater ponto
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuItem>Ver resumo diário</DropdownMenuItem>
                  <DropdownMenuItem>Editar batida</DropdownMenuItem>
                  <DropdownMenuItem>Solicitar abono</DropdownMenuItem>
                  <DropdownMenuItem>Enviar atestado</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};
