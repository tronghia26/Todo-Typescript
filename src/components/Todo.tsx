import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Icon = ({
  isCompleted,
  updateIsCompleted,
  todoId,
}: {
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  todoId: string;
}) => {
  return (
    <div onClick={() => updateIsCompleted(todoId)}>
      {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
};

const Todo = ({
  name,
  isCompleted,
  updateIsCompleted,
  editTodo,
  deleteTodo,
  todoId,
}: {
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  editTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  todoId: string;
}) => {
  return (
    <div className="flex border border-slate-600 ">
      <Button
        style={{ justifyContent: "space-between" }}
        fullWidth={true}
        endIcon={
          <Icon
            todoId={todoId}
            isCompleted={isCompleted}
            updateIsCompleted={updateIsCompleted}
          />
        }
      >
        {name}
      </Button>
      <IconButton onClick={() => editTodo(todoId)} aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => deleteTodo(todoId)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      {/* <Button
        variant="outlined"
        startIcon={<EditIcon />}
        onClick={() => editTodo(todoId)}
      >
        Edit
      </Button>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => deleteTodo(todoId)}
      >
        Delete
      </Button> */}
    </div>
  );
};

export default Todo;
