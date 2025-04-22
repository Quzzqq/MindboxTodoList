import { Button, ButtonGroup } from "@mui/material";
import styles from "./Tasks.module.css";
import Todo from "./components/Todo/Todo";
import sadSmile from "./assets/images/sadSmile.png";
import { FilterType } from "./types/todos";
import { APP_STRINGS } from "./constants/strings";
import { ITodos } from "./types/todos";
import { useState } from "react";

interface TasksProps {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}

const Tasks: React.FC<TasksProps> = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return filter === "Completed" ? todo.completed : !todo.completed;
  });

  const FILTER_BUTTONS: { type: FilterType; label: string }[] = [
    { type: "All", label: APP_STRINGS.filterAll },
    { type: "Active", label: APP_STRINGS.filterActive },
    { type: "Completed", label: APP_STRINGS.filterCompleted },
  ];

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.filterButtons}>
        <ButtonGroup color="secondary" aria-label="filter-buttons">
          {FILTER_BUTTONS.map(({ type, label }) => (
            <Button
              key={type}
              className={styles.filterButton}
              onClick={() => setFilter(type)}
              data-active={filter === type}
            >
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div className={styles.todosList}>
        {filteredTodos.length ? (
          filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} setTodos={setTodos} />
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>{APP_STRINGS.emptyState}</p>
            <img src={sadSmile} alt="Sad smile" className={styles.emptyImage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
