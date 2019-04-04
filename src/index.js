import ReactDOM from "react-dom";
import React, { useState } from "react";

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  );
}
function LikeCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(oldCount => oldCount + 1);
  };

  const minusOne = n => {
    return n - 1;
  };
  const decrement = () => {
    setCount(minusOne);
  };
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Like Counter</h1>
      <Headline title="My first Header" />
      <Headline title="My second Header" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
