import { act, useState } from "react";
import { handleSetFilter } from "./handleSetFilter";
import { renderHook } from "@testing-library/react";

const useTodoFilter = () => {
  const [filterTodos, setFilterTodos] = useState<
    "All" | "Active" | "Completed"
  >("All");
  return { filterTodos, setFilterTodos };
};

describe("Фильтр задач", () => {
  it("Выбор All", () => {
    const { result } = renderHook(() => useTodoFilter());
    act(() => {
      handleSetFilter("All", result.current.setFilterTodos);
    });
    expect(result.current.filterTodos).toEqual("All");
  });
  it("Выбор Active", () => {
    const { result } = renderHook(() => useTodoFilter());
    act(() => {
      handleSetFilter("Active", result.current.setFilterTodos);
    });
    expect(result.current.filterTodos).toEqual("Active");
  });
  it("Выбор Completed", () => {
    const { result } = renderHook(() => useTodoFilter());
    act(() => {
      handleSetFilter("Completed", result.current.setFilterTodos);
    });
    expect(result.current.filterTodos).toEqual("Completed");
  });
});
