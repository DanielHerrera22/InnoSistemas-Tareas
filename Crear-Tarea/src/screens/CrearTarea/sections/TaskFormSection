import { CalendarIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const TaskFormSection = (): JSX.Element => {
  // Form field data
  const formFields = {
    dates: [
      { id: "start-date", label: "Fecha de inicio", value: "15/06/2023" },
      { id: "end-date", label: "Fecha de entrega", value: "30/06/2023" },
    ],
    dropdowns: [
      {
        id: "priority",
        label: "Prioridad",
        value: "Alta",
      },
      {
        id: "assignee",
        label: "Asignado a",
        value: "Ana Martínez",
        avatar: "AM",
      },
    ],
    project: {
      id: "project",
      label: "Proyecto",
      value: "CRM Interno",
    },
  };

  return (
    <Card className="w-full max-w-5xl mx-auto mt-8">
      <CardContent className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-6 w-full">
          {/* Task Name Field */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-1">
              <label
                htmlFor="task-name"
                className="font-semibold text-sm text-[#333333]"
              >
                Nombre de la tarea
              </label>
              <span className="font-semibold text-sm text-[#ff405a]">*</span>
            </div>
            <Input
              id="task-name"
              placeholder="Ingresa el nombre de la tarea"
              className="h-12 bg-[#f8f9fa]"
            />
          </div>

          {/* Description Field */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-1">
              <label
                htmlFor="description"
                className="font-semibold text-sm text-[#333333]"
              >
                Descripción
              </label>
              <span className="font-semibold text-sm text-[#ff405a]">*</span>
            </div>
            <Textarea
              id="description"
              placeholder="Describe los detalles de la tarea..."
              className="min-h-[120px] bg-[#f8f9fa] py-3"
            />
          </div>

          {/* Date Fields Row */}
          <div className="flex gap-6 w-full">
            {formFields.dates.map((date) => (
              <div key={date.id} className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-1">
                  <label
                    htmlFor={date.id}
                    className="font-semibold text-sm text-[#333333]"
                  >
                    {date.label}
                  </label>
                  <span className="font-semibold text-sm text-[#ff405a]">
                    *
                  </span>
                </div>
                <div className="flex h-12 items-center justify-between px-4 bg-[#f8f9fa] rounded-md border">
                  <span className="text-sm text-[#333333]">{date.value}</span>
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Priority and Assignee Row */}
          <div className="flex gap-6 w-full">
            {formFields.dropdowns.map((dropdown) => (
              <div key={dropdown.id} className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-1">
                  <label
                    htmlFor={dropdown.id}
                    className="font-semibold text-sm text-[#333333]"
                  >
                    {dropdown.label}
                  </label>
                  <span className="font-semibold text-sm text-[#ff405a]">
                    *
                  </span>
                </div>
                <Select defaultValue={dropdown.value}>
                  <SelectTrigger className="h-12 bg-[#f8f9fa]">
                    {dropdown.id === "assignee" ? (
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 bg-[#c1d8fe] text-[#307dfd]">
                          <AvatarFallback className="text-[10px] font-semibold">
                            {dropdown.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <SelectValue>{dropdown.value}</SelectValue>
                      </div>
                    ) : (
                      <SelectValue>{dropdown.value}</SelectValue>
                    )}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={dropdown.value}>
                      {dropdown.value}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          {/* Project Field */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-1">
              <label
                htmlFor={formFields.project.id}
                className="font-semibold text-sm text-[#333333]"
              >
                {formFields.project.label}
              </label>
              <span className="font-semibold text-sm text-[#ff405a]">*</span>
            </div>
            <Select defaultValue={formFields.project.value}>
              <SelectTrigger className="h-12 bg-[#f8f9fa]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#307dfd] rounded"></div>
                  <SelectValue>{formFields.project.value}</SelectValue>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={formFields.project.value}>
                  {formFields.project.value}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 w-full">
          <Button
            variant="outline"
            className="w-[120px] h-11 font-semibold text-[#6b7280]"
          >
            Cancelar
          </Button>
          <Button className="w-[120px] h-11 bg-[#307dfd] font-semibold">
            Guardar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
