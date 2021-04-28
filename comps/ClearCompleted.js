import { useContext } from "react";
import { TodoContext } from "./ContextProvider";

const ClearCompleted = () => {
  const { todosState, setTodosState } = useContext(TodoContext);

  const handleClear = () => {
    const active = todosState.filter((todo) => todo.compleated !== true);
    setTodosState(active)
  };
  return <button onClick={handleClear}>Clear Component</button>;
};

export default ClearCompleted;
