import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

// Team data for mapping
const teams = [
  { name: "Gestión de Proyectos", active: true },
  { name: "EquipoB", active: false },
  { name: "EquipoC", active: false },
];

export const NavigationMenuSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-60 h-screen items-start gap-[26px] px-2.5 py-5 bg-white border-r">
      <header className="flex h-16 items-center gap-3 px-4 py-0 w-full">
        <div className="flex w-[150px] h-10 items-center justify-center gap-2.5 px-[9px] py-[5px]">
          <img
            className="w-[29.64px] h-[29.64px]"
            alt="InnoSistemas Logo"
            src="https://c.animaapp.com/Z3d9MEYB/img/vector-1.svg"
          />
          <span className="font-['Signika',Helvetica] font-semibold text-[#307dfd] text-base">
            InnoSistemas
          </span>
        </div>
      </header>

      <nav className="flex flex-col items-start w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="teams"
        >
          <AccordionItem value="teams" className="border-none">
            <AccordionTrigger className="py-0 h-10 px-4 font-semibold text-sm hover:no-underline">
              Equipos
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-0">
              <ul className="flex flex-col items-start w-full">
                {teams.map((team, index) => (
                  <li
                    key={index}
                    className="flex h-10 items-center gap-2 px-6 py-0 w-full cursor-pointer hover:bg-gray-50"
                  >
                    <div
                      className={`w-2 h-2 rounded ${team.active ? "bg-[#307dfd]" : "bg-[#c1d8fe]"}`}
                    />
                    <span className="font-['Inter',Helvetica] font-medium text-black text-sm">
                      {team.name}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>

      <div className="flex-1" />

      <footer className="flex flex-col items-start w-full">
        <Button
          variant="ghost"
          className="flex h-12 items-center gap-3 px-4 py-0 w-full justify-start"
        >
          <SettingsIcon className="w-6 h-6" />
          <span className="font-['Inter',Helvetica] font-medium text-black text-sm">
            Ajustes
          </span>
        </Button>

        <Button
          variant="ghost"
          className="flex h-12 items-center gap-3 px-4 py-0 w-full justify-start"
        >
          <LogOutIcon className="w-6 h-6" />
          <span className="font-['Inter',Helvetica] font-medium text-black text-sm">
            Cerrar&nbsp;&nbsp;sesión
          </span>
        </Button>

        <div className="flex items-center gap-3 p-4 w-full">
          <Avatar className="w-10 h-10 bg-[#c1d8fe]">
            <AvatarFallback className="bg-[#c1d8fe]">
              <UserIcon className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start gap-0.5">
            <span className="font-['Inter',Helvetica] font-semibold text-black text-sm">
              John Doe
            </span>
            <span className="font-['Inter',Helvetica] font-normal text-[#666666] text-xs">
              credenciales
            </span>
          </div>
        </div>
      </footer>
    </aside>
  );
};
