"use client";

//* Styles
import style from "./sections.module.css";

//* Interfaces
import { ToDo } from "@business/product/modules/to-do/base/domain/interfaces/to-do.interfaces";

//* Components
import { ToDoCard } from "@business/product/modules/to-do/base/presentation/components/to-do-card/to-do-card";

//#region --------------------------------- To Do Grid ---------------------------------

export interface ToDoGridProps {
  data: ToDo[];
}

export const ToDoGrid = ({ data }: ToDoGridProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <div className={style.toDoGrid}>
      {data.map((toDo: ToDo) => (
        <ToDoCard key={toDo.id} data={toDo} />
      ))}
    </div>
  );

  //#endregion
};

//#endregion
