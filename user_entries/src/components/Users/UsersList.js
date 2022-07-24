import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.username} is ({user.age}) year's old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
