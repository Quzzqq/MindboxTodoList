import React from "react";

export const handleSetFilter = (
  status: "All" | "Active" | "Completed",
  setFilterTodos: React.Dispatch<
    React.SetStateAction<"All" | "Active" | "Completed">
  >
) => {
  setFilterTodos(status);
};
