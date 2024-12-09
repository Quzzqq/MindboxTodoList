import { renderHook } from "@testing-library/react";
import { handleAdd } from "./handleAdd";
import { act, useState } from "react";
import { ITodos } from "../../types/todos";

const useTodoList = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  return { todos, setTodos };
};

describe("Проверка на добавление задачи", () => {
  it("Новый элемент", () => {
    const { result } = renderHook(() => useTodoList());

    act(() => {
      handleAdd(result.current.todos, "Новая задача", result.current.setTodos);
    });

    expect(result.current.todos).toEqual([
      { name: "Новая задача", completed: false },
    ]);
  });
  it("Повторяющийся элемент", () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      handleAdd(
        result.current.todos,
        "Повторяющийся элемент",
        result.current.setTodos
      );
    });
    act(() => {
      handleAdd(
        result.current.todos,
        "Повторяющийся элемент",
        result.current.setTodos
      );
    });
    expect(result.current.todos).toEqual([
      { name: "Повторяющийся элемент", completed: false },
    ]);
  });
  it("Пустой элемент", () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      handleAdd(result.current.todos, "", result.current.setTodos);
    });
    expect(result.current.todos).toEqual([]);
  });
});
