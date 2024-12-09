import { Button, Checkbox } from "@mui/material";
import { ITodos } from "../../types/todos";
import { handleComplete } from "../../utils/handleComplete/handleComplete";
import { SetStateAction } from "react";
import styles from "./Todo.module.css";
import { handleDelete } from "../../utils/handleDelete/handleDelete";

interface ITodo {
  elem: ITodos;
  index: number;
  setTodos: React.Dispatch<SetStateAction<ITodos[]>>;
  todos: ITodos[];
}

const Todo: React.FC<ITodo> = ({ elem, index, setTodos, todos }) => {
  return (
    <div key={`${elem.name}_${index}`} className={styles.areaTodo}>
      <Checkbox
        checked={elem.completed}
        color="success"
        onChange={() => handleComplete(elem, setTodos)}
        className={styles.checkBox}
      />
      <div className={styles.todoName}>
        <input
          type="text"
          value={elem.name}
          disabled
          className={styles.todoInput}
          style={elem.completed ? { textDecoration: "line-through" } : {}}
        />
      </div>
      <Button
        variant="contained"
        href="#contained-buttons"
        className={styles.deleteTodo}
        onClick={() => handleDelete(elem, todos, setTodos)}
        style={{
          backgroundColor: "#ffc0c0",
          color: "#000",
          font: "400 14px Montserrat",
        }}
      >
        Delete
      </Button>
    </div>
  );
};
export default Todo;
