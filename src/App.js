import React from "react";
import "./App.css";
import { Header } from "./components";
import { ItemContainer } from "./containers/item";


export default function App() {
  return (
    <div className="app">
      <Header />
      <ItemContainer />
    </div>
  );
}

