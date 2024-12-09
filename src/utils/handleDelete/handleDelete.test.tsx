import { act, useState } from "react";
import { ITodos } from "../../types/todos";
import { handleDelete } from "./handleDelete";
import { renderHook } from "@testing-library/react";

const useTodoList = () => {
  const [todos, setTodos] = useState<ITodos[]>([
    { name: "Убраться", completed: false },
  ]);
  return { todos, setTodos };
};

describe("Удаление задачи", () => {
  it("Удаление существующей", () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      handleDelete(
        { name: "Убраться", completed: false },
        result.current.todos,
        result.current.setTodos
      );
    });
    expect(result.current.todos).toEqual([]);
  });
  it("Удаление не существуещего", () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      handleDelete(
        { name: "asdffsda", completed: false },
        result.current.todos,
        result.current.setTodos
      );
    });
    expect(result.current.todos).toEqual([
      { name: "Убраться", completed: false },
    ]);
  });
});
