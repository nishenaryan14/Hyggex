import { useState } from "react";
import Home from "./Home";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
