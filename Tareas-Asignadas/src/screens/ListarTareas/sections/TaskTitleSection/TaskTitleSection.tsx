import { PlusIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const TaskTitleSection = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between py-4">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[#333333] text-2xl leading-[28.8px]">
          Tareas asignadas
        </h1>
        <p className="text-gray-500 text-sm leading-[16.8px]">
          Visualiza y gestiona todas tus tareas asignadas
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            className="w-60 h-10 pl-9 text-sm bg-white border rounded-md"
            placeholder="Buscar tareas..."
          />
        </div>

        <Button className="h-10 bg-[#307dfd] hover:bg-[#2a70e0] text-white rounded-md flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          <span className="font-semibold text-sm">Nueva tarea</span>
        </Button>
      </div>
    </header>
  );
};
