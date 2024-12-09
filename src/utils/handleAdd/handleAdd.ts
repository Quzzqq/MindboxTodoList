import { ITodos } from "../../types/todos";

export const handleAdd = (
  todos: ITodos[],
  value: string,
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
) => {
  if (todos.some((elem) => elem.name === value)) {
    alert("Такое уже есть");
    return;
  }
  if (value === "") return;
  setTodos((prev) => [...prev, { name: value, completed: false }]);
};
