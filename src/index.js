import React from "react";
import ReactDOM from "react-dom";
import { GlobalState } from "./state/globalState";
import Summary from "./components/Summary";
import Form from "./components/Form";
import Header from "./components/Header";
import "./styles.css";

function App() {
  return (
    <GlobalState>
      <Header />
      <Summary />
      <Form />
    </GlobalState>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
