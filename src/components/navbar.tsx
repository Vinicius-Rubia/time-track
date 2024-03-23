import { Input } from "@/shared/input";
import {
  Activity,
  CalendarClock,
  CircleDollarSign,
  Home,
  Search,
  TreePalm,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/images/profile.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

const collaboratorsOnline = [
  {
    letterNameFallback: "VR",
    name: "Vinicius Rubia",
  },
  {
    letterNameFallback: "CN",
    name: "Carla Nogueira",
  },
  {
    letterNameFallback: "RP",
    name: "Ronaldo Perreira",
  },
  {
    letterNameFallback: "MA",
    name: "Michael Abrantes",
  },
  {
    letterNameFallback: "SA",
    name: "Simone Almeida",
  },
  {
    letterNameFallback: "BJ",
    name: "Bianca Jesus",
  },
  {
    letterNameFallback: "RA",
    name: "Rafael Felizardo",
  },
  {
    letterNameFallback: "MV",
    name: "Marcos Vinicius",
  },
  {
    letterNameFallback: "MV",
    name: "Maria Victoria",
  },
  {
    letterNameFallback: "WS",
    name: "Wesley Santos",
  },
  {
    letterNameFallback: "LA",
    name: "Lucas Almeida",
  },
  {
    letterNameFallback: "PG",
    name: "Patrícia Goes",
  },
];

const menuItems = [
  {
    label: "Início",
    path: "/home",
    Icon: Home,
  },
  {
    label: "Pagamento",
    path: "/pagamento",
    Icon: CircleDollarSign,
    children: [
      {
        label: "Envelope de Pagamento",
        path: "envelope-de-pagamento",
      },
      {
        label: "Informe de Rendimentos",
        path: "informe-de-rendimentos",
      },
      {
        label: "Histórico Salarial",
        path: "historioc-salarial",
      },
    ],
  },
  {
    label: "Ponto",
    path: "/ponto",
    Icon: CalendarClock,
    children: [
      {
        label: "Espelho de ponto",
        path: "espelho-de-ponto",
      },
      {
        label: "Solicitar abono",
        path: "solicitar-abono",
      },
      {
        label: "Relógio",
        path: "relogio",
      },
    ],
  },
  {
    label: "Férias",
    path: "/ferias",
    Icon: TreePalm,
  },
  {
    label: "Enviar atestado",
    path: "/enviar-atestado",
    Icon: Activity,
  },
];

export const Navbar: React.FC = () => {
  return (
    <aside className="w-[250px] py-7 px-3 relative">
      <div className="flex items-center gap-2.5 mb-8">
        <Avatar>
          <AvatarImage src={Profile} alt="@shadcn" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-white text-sm leading-[.7]">André Pereira</h3>
          <Link to="#" className="text-gray-400 text-xs">
            Editar perfil
          </Link>
        </div>
      </div>

      <Input Icon={Search} placeholder="Pesquisar" />

      <div className="mt-12">
        <Accordion type="single" collapsible className="w-full space-y-1">
          {menuItems.map((item, index) => (
            <AccordionItem key={index} value={`${index}`}>
              {item.children ? (
                <AccordionTrigger
                  isCollapsed={true}
                  className="text-white/75 h-[30px] font-normal text-sm px-2 hover:bg-primary-aux-accent [&[data-state=open]]:rounded-b-none [&[data-state=open]]:bg-primary-aux-accent [&[data-state=open]]:border-accent rounded border-l-2 border-transparent hover:border-accent"
                >
                  <div className="flex items-center gap-2">
                    <item.Icon className="w-4 h-4 !rotate-0" />
                    {item.label}
                  </div>
                </AccordionTrigger>
              ) : (
                <Link to={item.path}>
                  <AccordionTrigger
                    isCollapsed={false}
                    className="text-white/75 h-[30px] font-normal text-sm px-2 [&[data-state=open]]:bg-primary-aux-accent hover:bg-primary-aux-accent [&[data-state=open]]:border-accent rounded border-l-2 border-transparent hover:border-accent"
                  >
                    <div className="flex items-center gap-2">
                      <item.Icon className="w-4 h-4 !rotate-0" />
                      {item.label}
                    </div>
                  </AccordionTrigger>
                </Link>
              )}

              {item.children &&
                item.children?.length > 0 &&
                item.children.map((subItem, index) => (
                  <Link key={index} to={subItem.path}>
                    <AccordionContent
                      className="text-white/75 h-[30px] border-t border-t-white/5 bg-primary-aux font-normal flex items-center pb-0 text-xs px-3.5 hover:bg-primary-aux-accent"
                    >
                      {subItem.label}
                    </AccordionContent>
                  </Link>
                ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-white text-center w-[226px] absolute bottom-7 bg-secondary rounded">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-accent justify-center text-sm gap-2 [&[data-state=open]]:bg-primary-aux-accent hover:bg-primary-aux-accent rounded">
              Colaboradores Online
            </AccordionTrigger>
            <AccordionContent className="mt-5">
              <ScrollArea className="h-[295px]">
                {collaboratorsOnline.map((collaborator, index) => (
                  <p
                    key={index}
                    className="text-white/80 flex items-center gap-1.5 h-[40px] px-3 hover:bg-primary-aux-accent transition-all border-l-2 border-transparent hover:border-accent"
                  >
                    <Avatar className="w-5 h-5">
                      <AvatarFallback className="text-[10px] text-black">
                        {collaborator.letterNameFallback}
                      </AvatarFallback>
                    </Avatar>
                    {collaborator.name}
                  </p>
                ))}
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
};
