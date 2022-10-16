import React from "react";

import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="submit" onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
