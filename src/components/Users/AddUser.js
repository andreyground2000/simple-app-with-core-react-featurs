import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "./../UI/Card";
import Button from "./../UI/Button";

const AddUser = ({ onAddUser, handleError }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (ev) => {
    ev.preventDefault();

    if (userAge.trim().length < 1 || userName.trim().length < 1) {
      handleError({
        title: 'Invalid Input',
        message: '"Age" and "User Name" fields shouldn\'t be empty'
      })

      setUserName('');
      setUserAge('');
      return;
    }

    if (+userAge < 1) {
      handleError({
        title: 'Invalid Age',
        message: 'Age should be greater than zero'        
      })

      setUserName('');
      setUserAge('');
      return;
    }

    onAddUser({
      id: new Date().toLocaleString(),
      name: userName,
      age: userAge
    })

    setUserName('');
    setUserAge('');
  }

  const userNameHandler = (ev) => {
    setUserName(ev.target.value);
  }

  const userAgeHandler = (ev) => {
    setUserAge(ev.target.value);
  }

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="username">
          User Name
        </label>
        <input id="username" type="text" value={userName} onChange={userNameHandler} />
        <label htmlFor="age">
          Age (Years)
        </label>
        <input id="age" type="number" value={userAge} onChange={userAgeHandler}/>
        <Button onClickHandle={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;