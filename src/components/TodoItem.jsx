import { Button, Text } from "@mantine/core";
import PropTypes from "prop-types";

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => {
  return (
    <li
      style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}
    >
      <Text
        style={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#888" : "inherit",
        }}
      >
        {todo.task}
      </Text>
      <Button
        onClick={() => toggleComplete(index)}
        size="xs"
        color={todo.completed ? "teal" : "blue"}
      >
        {todo.completed ? "Uncomplete" : "Complete"}
      </Button>
      <Button
        onClick={() => removeTodo(index)}
        size="xs"
        color="red"
        style={{ marginLeft: "0.5rem" }}
      >
        Remove
      </Button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
