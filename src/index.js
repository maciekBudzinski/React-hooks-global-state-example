import React from "react";
import ReactDOM from "react-dom";
import { GlobalState } from "./state/globalState";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <GlobalState>
        <Header />
        <Form />
        <TodoForm />
        <TodoList />
      </GlobalState>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
