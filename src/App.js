import { useState } from "react";

function LikeButton() {
  let [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={() => setLikes(likes + 1)}>
        Like ❤️
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <LikeButton />
    </div>
  );
}

export default App;