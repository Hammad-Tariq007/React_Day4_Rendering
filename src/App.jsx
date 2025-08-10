import { useState } from "react";
import List from "./components/List";
import "./App.css";

function App() {
  const [todos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Vite" },
    { id: 3, text: "Build something awesome" },
  ]);

  return (
    <div className="app-container">
      <List todos={todos} />
    </div>
  );
}

export default App;
