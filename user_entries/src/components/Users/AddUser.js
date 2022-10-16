import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  /*const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");*/
  const enteredNameRef = useRef();
  const enteredUserAgeRef = useRef();
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = enteredNameRef.current.value;
    const enteredUserAge = enteredUserAgeRef.current.value;
    // console.log("Info: ", enteredUsername, enteredAge);
    console.log("Info: ", enteredName, enteredUserAge);
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({ title: "Invalid Input", message: "Invalid username or age!" });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Invalid age! Entered age must be greater than or equal to 1",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUsername("");
    // setEnteredAge("");
    enteredNameRef.current.value = "";
    enteredUserAgeRef.current.value = "";
  };

  const closeModal = () => {
    setError(null);
  };

  // const usernameChangeHandler = (event) => {
  //   const username = event.target.value;
  //   setEnteredUsername(username);
  // };
  //
  // const ageChangeHandler = (event) => {
  //   const age = event.target.value;
  //   setEnteredAge(age);
  // };

  return (
    <>
      {error && <ErrorModal error={error} onConfirm={closeModal}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={enteredNameRef}
          />
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={enteredUserAgeRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
