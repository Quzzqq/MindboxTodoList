import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "@mui/material";
import Tasks from "./Tasks";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import useTodos from "./hooks/useTodos";
import { APP_STRINGS } from "./constants/strings";

function App() {
  const [inputValue, setInputValue] = useState("");
  const { todos, setTodos, progress, itemsLeft } = useTodos();

  return (
    <div className={styles.container}>
      <header className={styles.header}>{APP_STRINGS.header}</header>
      <hr className={styles.divider} />

      <div className={styles.inputContainer}>
        <input
          placeholder={APP_STRINGS.addPlaceholder}
          className={styles.input}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button
          variant="contained"
          className={styles.addButton}
          onClick={() => {
            setTodos((prev) => [
              ...prev,
              {
                name: inputValue,
                completed: false,
                id: Date.now().toString(),
              },
            ]);
            setInputValue("");
          }}
        >
          {APP_STRINGS.addButton}
        </Button>
      </div>

      <Tasks todos={todos} setTodos={setTodos} />

      <div className={styles.progressContainer}>
        <ProgressBar progress={progress} />
        <p className={styles.itemsLeft}>
          {itemsLeft} {APP_STRINGS.itemsLeft}
        </p>
      </div>
    </div>
  );
}

export default App;
