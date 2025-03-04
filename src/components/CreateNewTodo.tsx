import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  newTodoString: string;
  onNewTodoString: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddButton: () => void;
};

const CreateNewTodo = ({
  newTodoString,
  onNewTodoString,
  onAddButton,
}: Props) => {
  return (
    <div>
      <TextField
        size="small"
        value={newTodoString}
        onChange={onNewTodoString}
      />
      <Button variant="contained" onClick={onAddButton}>
        Thêm
      </Button>
    </div>
  );
};

export default CreateNewTodo;
