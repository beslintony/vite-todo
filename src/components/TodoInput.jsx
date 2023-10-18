import { Button, Input } from "@mantine/core";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      addTodo({ task, completed: false });
      setTask("");
    }
  };

  return (
    <div style={{ display: "flex", marginBottom: "1rem" }}>
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        style={{ flex: 1, marginRight: "1rem" }}
      />
      <Button onClick={handleAddTodo}>Add Task</Button>
    </div>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
