import { Button, ButtonGroup } from "@mui/material";
import styles from "./Tasks.module.css";
import { ITasksTodos } from "./types/todos";
import { useState } from "react";
import { handleSetFilter } from "./utils/handleSetFilter/handleSetFilter";
import Todo from "./components/Todo/Todo";
import sadSmile from "./assets/images/sadSmile.png";

const Tasks: React.FC<ITasksTodos> = ({ todos, setTodos }) => {
  const [filterTodos, setFilterTodos] = useState<
    "All" | "Active" | "Completed"
  >("All");

  return (
    <div className={styles.Tasks}>
      <div className={styles.btnsGroup}>
        <ButtonGroup color="secondary" aria-label="Medium-sized button group">
          {[
            <Button
              className={styles.btnFilter}
              onClick={() => handleSetFilter("All", setFilterTodos)}
              style={"All" === filterTodos ? { background: "#df87ff" } : {}}
            >
              All
            </Button>,
            <Button
              className={styles.btnFilter}
              onClick={() => handleSetFilter("Active", setFilterTodos)}
              style={"Active" === filterTodos ? { background: "#df87ff" } : {}}
            >
              Active
            </Button>,
            <Button
              className={styles.btnFilter}
              onClick={() => handleSetFilter("Completed", setFilterTodos)}
              style={
                "Completed" === filterTodos ? { background: "#df87ff" } : {}
              }
            >
              Completed
            </Button>,
          ]}
        </ButtonGroup>
      </div>
      <div>
        {todos.length !== 0 ? (
          todos
            .filter(
              (elem) =>
                filterTodos === "All" ||
                (filterTodos === "Active" ? false : true) === elem.completed
            )
            .map((elem, index) => (
              <Todo
                elem={elem}
                index={index}
                todos={todos}
                setTodos={setTodos}
              />
            ))
        ) : (
          <div className={styles.empty}>
            <p>Тут пока пусто</p>
            <img className={styles.img} alt="Sad Smile" src={sadSmile} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Tasks;
