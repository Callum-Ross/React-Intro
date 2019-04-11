import ReactDOM from "react-dom";
import React, { useState } from "react";
const API_KEY = "9e22b226934f4df9bbc96b4b4d5504bf";
import { useNewsArticles } from "./api"; // import from a local file

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
  const { loading, headlines, error } = useNewsArticles();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  return (
    <div className="App">
      {headlines.map(headline => (
        // `headline` is now an object
        <Headline key={headline.url} title={headline.title} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
