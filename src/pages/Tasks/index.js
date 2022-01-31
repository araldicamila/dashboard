import { Columns } from "../../components/Columns";
import { TasksCards } from "../../components/TasksCards";

import IconTodo from "../../assets/icons/icon-todo.png";
import IconInProgress from "../../assets/icons/icon-progress.png";
import IconDone from "../../assets/icons/icon-done.png";
import { Modal } from "../../components/Modal";

export const Tasks = () => {
  return (
    <div className="main-tasks">
      <Modal />
      <Columns theme="pink" name="To do" total="10" icon={IconTodo}>
        <TasksCards />
        <TasksCards />
      </Columns>
      <Columns
        theme="yellow"
        name="In progress"
        total="10"
        icon={IconInProgress}
      >
        <TasksCards />
        <TasksCards />
      </Columns>
      <Columns theme="green" name="Done" total="10" icon={IconDone}>
        <TasksCards />
        <TasksCards />
      </Columns>
    </div>
  );
};
