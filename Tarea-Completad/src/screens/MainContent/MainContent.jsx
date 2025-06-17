import React from "react";
import { Header } from "./sections/Header";
import { TaskDetailCard } from "./sections/TaskDetailCard";
import "./style.css";

export const MainContent = () => {
  return (
    <div className="main-content" data-model-id="2006:149">
      <Header />
      <TaskDetailCard />
    </div>
  );
};
