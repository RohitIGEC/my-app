import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Home Page 🏠</h1>
      <p>Welcome to my app!</p>
      <button onClick={() => navigate("/about")}>
        About !
      </button>
    </div>
  );
}

export default Home;