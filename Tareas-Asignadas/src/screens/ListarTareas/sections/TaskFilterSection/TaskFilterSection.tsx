import { EditIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const TaskFilterSection = (): JSX.Element => {
  // Filter tabs data
  const filterTabs = [
    { id: "all", label: "Todas", count: 12, active: true },
    { id: "pending", label: "Pendientes", count: 5, active: false },
    { id: "inProgress", label: "En progreso", count: 4, active: false },
    { id: "completed", label: "Completadas", count: 3, active: false },
  ];

  // Tasks data
  const tasks = [
    {
      id: 1,
      name: "Diseñar mockups para nueva funcionalidad",
      createdAt: "10/06/2023",
      project: { name: "App Móvil", color: "#d97706" },
      dueDate: "20/06/2023",
      status: { name: "Pendiente", color: "#d97706", bgColor: "#fef3c7" },
    },
    {
      id: 2,
      name: "Implementar autenticación de usuarios",
      createdAt: "05/06/2023",
      project: { name: "CRM Interno", color: "#307dfd" },
      dueDate: "18/06/2023",
      status: { name: "En progreso", color: "#307dfd", bgColor: "#c1d8fe" },
    },
    {
      id: 3,
      name: "Crear documentación de API",
      createdAt: "01/06/2023",
      project: { name: "Rediseño Web", color: "#059669" },
      dueDate: "15/06/2023",
      status: { name: "Completada", color: "#059669", bgColor: "#d1fae5" },
    },
    {
      id: 4,
      name: "Realizar pruebas de usabilidad",
      createdAt: "12/06/2023",
      project: { name: "App Móvil", color: "#d97706" },
      dueDate: "25/06/2023",
      status: { name: "Pendiente", color: "#d97706", bgColor: "#fef3c7" },
    },
    {
      id: 5,
      name: "Optimizar rendimiento de consultas",
      createdAt: "08/06/2023",
      project: { name: "CRM Interno", color: "#307dfd" },
      dueDate: "22/06/2023",
      status: { name: "En progreso", color: "#307dfd", bgColor: "#c1d8fe" },
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex h-10 bg-transparent p-0 gap-1">
          {filterTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-10 px-5 py-0 rounded-md ${
                tab.active
                  ? "bg-white border border-solid border-[#307dfd] text-[#307dfd] font-semibold"
                  : "bg-white text-[#6b7280] font-medium"
              }`}
            >
              {`${tab.label} (${tab.count})`}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Card className="border-0 shadow-none">
        <Table>
          <TableHeader>
            <TableRow className="border-t border-r border-l rounded-t-md bg-white h-12">
              <TableHead className="w-[400px] font-semibold text-[#333333] text-sm">
                Nombre de la tarea
              </TableHead>
              <TableHead className="w-[250px] font-semibold text-[#333333] text-sm">
                Proyecto
              </TableHead>
              <TableHead className="w-[200px] font-semibold text-[#333333] text-sm">
                Fecha de entrega
              </TableHead>
              <TableHead className="w-[150px] font-semibold text-[#333333] text-sm">
                Estado
              </TableHead>
              <TableHead className="w-[100px] font-semibold text-[#333333] text-sm">
                Acciones
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow
                key={task.id}
                className={`h-16 bg-white border-t border-r border-l ${
                  index === tasks.length - 1 ? "rounded-b-md border-b" : ""
                }`}
              >
                <TableCell className="p-4">
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-medium text-[#333333] text-sm">
                      {task.name}
                    </div>
                    <div className="font-normal text-[#6b7280] text-xs">
                      Creada el {task.createdAt}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded"
                      style={{ backgroundColor: task.project.color }}
                    />
                    <div className="font-medium text-[#333333] text-sm">
                      {task.project.name}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-4 font-medium text-[#333333] text-sm">
                  {task.dueDate}
                </TableCell>
                <TableCell className="p-4">
                  <Badge
                    className="h-7 px-3 font-medium text-xs rounded-[14px]"
                    style={{
                      backgroundColor: task.status.bgColor,
                      color: task.status.color,
                    }}
                  >
                    {task.status.name}
                  </Badge>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 bg-[#f8f9fa] rounded-md"
                    >
                      <EditIcon className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 bg-[#f8f9fa] rounded-md"
                    >
                      <MoreVerticalIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
