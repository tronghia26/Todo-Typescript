import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateNewTodo from "./components/CreateNewTodo";
import TodoList from "./components/TodoList";

export type TodoType = { id: string; name: string; isCompleted: boolean };

function App() {
  // const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedLocalStorage = JSON.parse(
      localStorage.getItem("todoList") ?? "[]"
    );
    if (savedLocalStorage?.length) return savedLocalStorage;
    return [];
  });
  const [newTodoString, setNewTodoString] = useState("");

  const onNewTodoString = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const onAddButton = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    };
    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString("");
  };

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = (todoId: string) => {
    const newName = prompt("Enter new todo name:");
    if (newName) {
      setTodoList((prevList) =>
        prevList.map((todo) =>
          todo.id === todoId ? { ...todo, name: newName } : todo
        )
      );
    }
  };

  const deleteTodo = (todoId: string) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== todoId));
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <p>This is Todo App</p>
      <CreateNewTodo
        newTodoString={newTodoString}
        onNewTodoString={onNewTodoString}
        onAddButton={onAddButton}
      />
      <TodoList
        todoList={todoList}
        updateIsCompleted={updateIsCompleted}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
