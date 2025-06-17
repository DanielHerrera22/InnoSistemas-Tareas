import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Task status data for mapping
const taskStatusData = [
  {
    id: "pending",
    label: "Pendientes",
    count: 12,
    dotColor: "bg-amber-600",
    textColor: "text-amber-600",
  },
  {
    id: "inProgress",
    label: "En progreso",
    count: 8,
    dotColor: "bg-[#307dfd]",
    textColor: "text-[#307dfd]",
  },
  {
    id: "completed",
    label: "Completadas",
    count: 15,
    dotColor: "bg-emerald-600",
    textColor: "text-emerald-600",
  },
];

export const TaskStatusOverviewSection = (): JSX.Element => {
  return (
    <section className="flex w-full gap-6">
      {taskStatusData.map((status) => (
        <Card key={status.id} className="flex-1">
          <CardContent className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2 w-full">
              <div className={`w-2 h-2 rounded ${status.dotColor}`} />
              <span className="font-semibold text-sm text-[#333333]">
                {status.label}
              </span>
            </div>
            <div className="flex items-center w-full">
              <span className={`font-bold text-2xl ${status.textColor}`}>
                {status.count}
              </span>
              <span className="font-normal text-gray-500 text-2xl ml-1">
                Tareas
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
