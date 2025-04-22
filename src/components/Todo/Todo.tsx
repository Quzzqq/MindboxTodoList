import { useState, useRef, useEffect } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import styles from "./Todo.module.css";
import { ITodos } from "../../types/todos";

interface TodoProps {
  todo: ITodos;
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}

const Todo: React.FC<TodoProps> = ({ todo, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleComplete = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const handleEdit = () => {
    if (editValue.trim()) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === todo.id ? { ...t, name: editValue.trim() } : t
        )
      );
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.todoItem} data-completed={todo.completed}>
      <Checkbox
        checked={todo.completed}
        onChange={handleComplete}
        className={styles.checkbox}
        color="primary"
      />

      <div className={styles.todoContent}>
        {isEditing ? (
          <TextField
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === "Enter" && handleEdit()}
            inputRef={inputRef}
            fullWidth
            variant="standard"
          />
        ) : (
          <div
            className={styles.todoText}
            onClick={() => !todo.completed && setIsEditing(true)}
          >
            {todo.name}
          </div>
        )}
      </div>

      <Button
        variant="contained"
        onClick={handleDelete}
        className={styles.deleteButton}
        size="small"
      >
        Delete
      </Button>
    </div>
  );
};

export default Todo;
