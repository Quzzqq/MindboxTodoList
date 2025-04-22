import { useState, useEffect, useCallback } from "react";
import { ITodos } from "../types/todos";

const useTodos = () => {
  const [todos, setTodos] = useState<ITodos[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [progress, setProgress] = useState(0);
  const [itemsLeft, setItemsLeft] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    const completedCount = todos.filter((todo) => todo.completed).length;
    setProgress(todos.length > 0 ? (completedCount / todos.length) * 100 : 0);
    setItemsLeft(todos.length - completedCount);
  }, [todos]);

  const completeTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const updateTodo = useCallback((id: string, newName: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, name: newName } : todo))
    );
  }, []);

  return {
    todos,
    setTodos,
    progress,
    itemsLeft,
    completeTodo,
    deleteTodo,
    updateTodo,
  };
};

export default useTodos;
