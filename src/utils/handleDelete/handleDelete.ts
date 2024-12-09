import { ITodos } from "../../types/todos";

export const handleDelete = (
  todo: ITodos,
  todos: ITodos[],
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
) => {
  setTodos((prev) => prev.filter((elem) => elem.name !== todo.name));
};
