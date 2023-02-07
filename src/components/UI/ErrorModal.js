import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = ({title, content, handleError}) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={handleError} />
      <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <p className={classes.content}>{content}</p>
          <div className={classes.actions}>
            <Button onClickHandle={handleError}>Cancel</Button>
          </div>
        </Card>
    </div>
  )
};

export default ErrorModal;