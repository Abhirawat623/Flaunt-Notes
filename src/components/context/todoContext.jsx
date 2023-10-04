import { createContext, useContext, useReducer } from "react";
import { toDoReducer } from "../reducer/TodoReducer";
const initialValue = {
    task : "",
    title : "",
    todoList : [],
    priority: '',
    category: ''
}
const TodoContext = createContext();
const TodoProvider = ({children})=> {
    const [{task, todoList, priority, title,category}, todoDispatch] = useReducer(toDoReducer, initialValue);
return(
  <TodoContext.Provider value={{task, todoList,title ,priority, category, todoDispatch}}>
{children}
  </TodoContext.Provider>
)
}
const useTodo =()=>  useContext(TodoContext);

export {useTodo, TodoProvider}