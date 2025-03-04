import { TodoType } from "../App";
import Todo from "./Todo";

const TodoList = ({
  todoList,
  updateIsCompleted,
  editTodo,
  deleteTodo,
}: {
  todoList: TodoType[];
  updateIsCompleted: (todoId: string) => void;
  editTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
}) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Todo
            todoId={todo.id}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            updateIsCompleted={updateIsCompleted}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
