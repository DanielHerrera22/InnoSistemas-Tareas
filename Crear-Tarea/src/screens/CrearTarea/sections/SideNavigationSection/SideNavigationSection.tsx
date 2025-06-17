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

// Define team data for mapping
const teams = [
  { name: "Gestión de Proyectos", active: true },
  { name: "EquipoB", active: false },
  { name: "EquipoC", active: false },
];

export const SideNavigationSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-60 h-screen items-start gap-[26px] px-2.5 py-5 bg-white border-r">
      {/* Logo section */}
      <div className="flex h-16 items-center gap-3 px-4 py-0 w-full">
        <div className="flex w-[150px] h-10 items-center justify-center gap-2.5 px-[9px] py-[5px] bg-white">
          <img
            className="w-[29.64px] h-[29.64px] ml-[-0.32px]"
            alt="Vector"
            src="https://c.animaapp.com/Iy73XJHM/img/vector-1.svg"
          />
          <div className="w-fit mr-[-0.32px] font-['Signika',Helvetica] font-semibold text-[#307dfd] text-base text-center tracking-[0] leading-[19.2px] whitespace-nowrap">
            InnoSistemas
          </div>
        </div>
      </div>

      {/* Teams accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="teams"
      >
        <AccordionItem value="teams" className="border-0">
          <AccordionTrigger className="py-0 px-4 h-10 font-semibold text-sm">
            Equipos
          </AccordionTrigger>
          <AccordionContent className="pt-0 pb-0">
            <div className="flex flex-col items-start w-full">
              {teams.map((team, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex h-10 items-center gap-2 px-6 py-0 justify-start w-full"
                >
                  <div
                    className={`w-2 h-2 rounded ${team.active ? "bg-[#307dfd]" : "bg-[#c1d8fe]"}`}
                  />
                  <span className="font-medium text-sm text-black">
                    {team.name}
                  </span>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Spacer */}
      <div className="flex-1 w-full" />

      {/* Bottom navigation and profile */}
      <div className="flex flex-col items-start w-full">
        <Button
          variant="ghost"
          className="flex h-12 items-center gap-3 px-4 py-0 justify-start w-full"
        >
          <SettingsIcon className="w-6 h-6" />
          <span className="font-medium text-sm text-black">Ajustes</span>
        </Button>

        <Button
          variant="ghost"
          className="flex h-12 items-center gap-3 px-4 py-0 justify-start w-full"
        >
          <LogOutIcon className="w-6 h-6" />
          <span className="font-medium text-sm text-black">
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
            <div className="font-semibold text-sm text-black whitespace-nowrap">
              John Doe
            </div>
            <div className="font-normal text-xs text-[#666666] whitespace-nowrap">
              credenciales
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
