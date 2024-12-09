import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Button } from "@mui/material";
import Tasks from "./Tasks";
import { ITodos } from "./types/todos";
import { handleAdd } from "./utils/handleAdd/handleAdd";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const firstData = localStorage.getItem("todos");
    console.log(firstData);
    firstData && setTodos(JSON.parse(firstData));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    const completedCount = todos.filter((todo) => todo.completed).length;
    setProgress(todos.length > 0 ? (completedCount / todos.length) * 100 : 0);
  }, [todos]);

  return (
    <div className={styles.block}>
      <header className={styles.head}>Todo List</header>
      <hr />
      <div className={styles.inpDiv}>
        <input
          placeholder="Add a new task"
          className={styles.inp}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button
          variant="contained"
          href="#contained-buttons"
          className={styles.saveInp}
          onClick={() => handleAdd(todos, value, setTodos)}
          style={{
            backgroundColor: "#c8fdb1",
            color: "#000",
            font: "400 14px Montserrat",
          }}
        >
          Add
        </Button>
      </div>
      <Tasks todos={todos} setTodos={setTodos} />
      <div className={styles.ProgressBar}>
        <ProgressBar progress={progress} />
        <p className={styles.itemsLeft}>
          {todos.filter((todo) => !todo.completed).length} items left
        </p>
      </div>
    </div>
  );
}

export default App;
