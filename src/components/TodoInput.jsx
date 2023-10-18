import { Button, Flex, Input } from "@mantine/core";
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
    <>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          style={{ flex: 1, marginRight: "1rem" }}
        />
        <Button onClick={handleAddTodo}>Add Task</Button>
      </Flex>
    </>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
