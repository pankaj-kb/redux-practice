// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./App.css";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

// redux

import { Provider } from "react-redux";

function App() {
  return (
    <Provider>
      <Container>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
