import { ITodos } from "../../types/todos";

export const handleComplete = (
  elem: ITodos,
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
) => {
  setTodos((prev: ITodos[]) =>
    prev.map((todo) =>
      elem.name === todo.name ? { ...elem, completed: !elem.completed } : todo
    )
  );
};
