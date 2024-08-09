import { useState } from "react";
import "./App.css";

function App() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <div className="card">
        <div className="count">{Count}</div>
      </div>
      <button className="btn" onClick={() => setCount(Count + 1)}>
        Count
      </button>
    </>
  );
}

export default App;
