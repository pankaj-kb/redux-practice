import { React, useState } from "react";

import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

import { v4 } from "uuid";

//  redux stuff

import { connect } from "react-redux";

import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };
    addTodo(todo);

    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button color="primary" onClick={handleSubmit}>
            ADD
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
