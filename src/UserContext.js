import { createContext, useState } from "react";

export let UserContext = createContext();

function UserProvider({ children }) {
  let [user, setUser] = useState("Rahul");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;