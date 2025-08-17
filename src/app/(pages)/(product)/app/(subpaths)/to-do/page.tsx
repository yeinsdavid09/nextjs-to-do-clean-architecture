//* Styles
import { findAllToDosAction } from "./actions/find-all.actions";
import style from "./page.module.css";

//* Components
import { ToDoGrid } from "./sections/to-do-grid";

export default async function ToDoPage() {
  //#region --------------------------------- Variables ---------------------------------

  const response = await findAllToDosAction();

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <section className={style.mainContainer}>
      <ToDoGrid data={response.data} />
    </section>
  );

  //#endregion
}
