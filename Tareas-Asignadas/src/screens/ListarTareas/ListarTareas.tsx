import React from "react";
import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
import { TaskFilterSection } from "./sections/TaskFilterSection/TaskFilterSection";
import { TaskPaginationSection } from "./sections/TaskPaginationSection/TaskPaginationSection";
import { TaskTitleSection } from "./sections/TaskTitleSection";

export const ListarTareas = (): JSX.Element => {
  return (
    <main
      className="bg-[#f8f9fa] flex flex-row w-full min-h-screen"
      data-model-id="132:326"
    >
      <div className="bg-[#f8f9fa] w-full relative flex flex-row">
        {/* Navigation Menu - Left Side */}
        <aside className="w-[220px] flex-shrink-0">
          <NavigationMenuSection />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Task Title Section */}
          <TaskTitleSection />

          {/* Task Filter Section */}
          <TaskFilterSection />

          {/* Task Pagination Section */}
          <TaskPaginationSection />
        </div>
      </div>
    </main>
  );
};
