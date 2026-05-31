import { useState, useEffect } from "react";

function App() {
  let [joke, setJoke] = useState("Loading...");

  function getJoke() {
    setJoke("Loading...");
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        setJoke(data.setup + " ... " + data.punchline);
      });
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <h1>Random Joke!</h1>
      <p>{joke}</p>
      <button onClick={getJoke}>new Joke!</button>
    </div>
  );
}

export default App;