import { useContext } from "react";
import UserProvider, { UserContext } from "./UserContext";

function Header() {
  let { user } = useContext(UserContext);
  return <h1>Hello, {user}! 👋</h1>;
}

function Footer() {
  let { user } = useContext(UserContext);
  return <p>Logged in as: {user}</p>;
}

function ChangeName() {
  let { setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser("Priya")}>
      Name Change 
    </button>
  );
}

function App() {
  return (
    <UserProvider>
      <Header />
      <ChangeName />
      <Footer />
    </UserProvider>
  );
}

export default App;