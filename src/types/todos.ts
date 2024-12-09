export interface ITodos {
  name: string;
  completed: boolean;
}

export interface ITasksTodos {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}
