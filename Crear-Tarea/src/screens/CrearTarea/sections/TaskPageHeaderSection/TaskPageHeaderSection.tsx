import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";

export const TaskPageHeaderSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2 py-4">
      <Breadcrumb className="w-full">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-sm text-gray-500 font-normal"
            >
              Tareas
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-sm text-[#307dfd] font-medium"
            >
              Crear tarea
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold text-[#333333]">
          Crear una nueva tarea
        </h1>

        <Button
          variant="outline"
          className="h-10 flex items-center gap-2 border-gray-200"
        >
          <ArrowLeftIcon className="h-4 w-4 text-gray-500" />
          <span className="text-gray-500 font-medium">Volver</span>
        </Button>
      </div>
    </div>
  );
};
