import { useState } from "react";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Vite" },
    { id: 3, text: "Build something awesome" },
  ]);

  return (
    <div>
      <List todos={todos} />
    </div>
  );
}

export default App;
