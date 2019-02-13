import React from "react";
import ReactDOM from "react-dom";
import { GlobalState } from "./state/globalState";
import Summary from "./components/Summary";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";

function App() {
  return (
    <GlobalState>
      <Header />
      <Summary />
      <Form />
      <TodoForm />
      <TodoList />
    </GlobalState>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
