import React from "react";
import ReactDOM from "react-dom";

import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const Backdrop = props => {
  return (<div className={classes.backdrop} onClick={props.onConfirm}></div>)
}

const Modal = props => {
  return (
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
  )
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Modal error={props.error} onConfirm={props.onConfirm}/>, document.getElementById('modal-root'))}
    </>
  );
};

export default ErrorModal;
