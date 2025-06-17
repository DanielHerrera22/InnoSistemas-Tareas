import React from "react";
import { SideNavigationSection } from "./sections/SideNavigationSection/SideNavigationSection";
import { TaskFormSection } from "./sections/TaskFormSection";
import { TaskPageHeaderSection } from "./sections/TaskPageHeaderSection/TaskPageHeaderSection";
import { TaskStatusOverviewSection } from "./sections/TaskStatusOverviewSection/TaskStatusOverviewSection";

export const CrearTarea = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-row w-full" data-model-id="152:917">
      <div className="bg-white w-full relative flex">
        {/* Logo and branding area */}
        <header className="absolute top-5 left-2 flex items-center gap-3 px-4 py-0 z-10">
          <div className="flex items-center justify-center gap-2.5 px-[9px] py-[5px] bg-white">
            <img
              className="w-[29.64px] h-[29.64px]"
              alt="InnoSistemas logo"
              src="https://c.animaapp.com/Iy73XJHM/img/vector-1.svg"
            />
            <div className="font-semibold text-[#307dfd] text-base whitespace-nowrap">
              InnoSistemas
            </div>
          </div>
        </header>

        {/* Side navigation */}
        <aside className="w-60 min-h-screen">
          <SideNavigationSection />
        </aside>

        {/* Main content area */}
        <section className="flex-1 bg-[#f8f9fa] min-h-screen">
          <div className="flex flex-col">
            <TaskPageHeaderSection />
            <TaskFormSection />
            <TaskStatusOverviewSection />
          </div>
        </section>
      </div>
    </main>
  );
};
