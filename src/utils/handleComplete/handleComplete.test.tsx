import { act, useState } from "react";
import { handleComplete } from "./handleComplete";
import { ITodos } from "../../types/todos";
import { renderHook } from "@testing-library/react";

const useTodoList = () => {
  const [todos, setTodos] = useState<ITodos[]>([
    { name: "Убраться", completed: false },
    { name: "Выкинуть мусор", completed: true },
  ]);
  return { todos, setTodos };
};

describe("Отметить задачу", () => {
  it("Отметить невыполненную задачу", () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      handleComplete(
        { name: "Убраться", completed: false },
        result.current.setTodos
      );
    });
    expect(result.current.todos).toEqual([
      { name: "Убраться", completed: true },
      { name: "Выкинуть мусор", completed: true },
    ]);
  });
  it("Отметить выполненную задачу", () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      handleComplete(
        { name: "Выкинуть мусор", completed: true },
        result.current.setTodos
      );
    });
    expect(result.current.todos).toEqual([
      { name: "Убраться", completed: false },
      { name: "Выкинуть мусор", completed: false },
    ]);
  });
});
