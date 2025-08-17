//* Styles
import style from "./to-do-card.module.css";

//* Interfaces
import { ToDoCardProps } from "./to-do-card.interfaces";

//* Components
import { Tag } from "@business/core/ui/atoms/tag/tag";
import { Card } from "@business/core/ui/organisms/card/card";

export const ToDoCard = ({ data }: ToDoCardProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <Card>
      <div className={style.mainContainer}>
        <h4 className={style.__title}>{data.title}</h4>
        <div className={style.__divider}></div>
        <p className={style.__description}>{data.description}</p>
        <div className={style.__tags}>
          <Tag label={data.priority} />
          <Tag label={data.status} />
        </div>
      </div>
    </Card>
  );

  //#endregion
};
