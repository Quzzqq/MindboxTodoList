export interface ITodos {
  id: string;
  name: string;
  completed: boolean;
}

export type FilterType = "All" | "Active" | "Completed";

export interface ITasksTodos {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}
