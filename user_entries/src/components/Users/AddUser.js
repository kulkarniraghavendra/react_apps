import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("Info: ", enteredUsername, enteredAge);
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({ title: "Invalid Input", message: "Invalid username or age!" });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Invalid age! Entered age must be greater than or equal to 1",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const closeModal = () => {
    setError(null);
  };

  const usernameChangeHandler = (event) => {
    const username = event.target.value;
    setEnteredUsername(username);
  };

  const ageChangeHandler = (event) => {
    const age = event.target.value;
    setEnteredAge(age);
  };

  return (
    <div>
      {error && <ErrorModal error={error} onConfirm={closeModal}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
