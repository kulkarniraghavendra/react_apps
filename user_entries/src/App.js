import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevState) => {
      return [...prevState, { username, age }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={users}></UsersList>
    </>
  );
}

export default App;
