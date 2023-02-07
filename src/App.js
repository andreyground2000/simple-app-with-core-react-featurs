import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [usersList, addUser] = useState([])
  const [error, setError] = useState()

  const addUserHandler = (newUser) => {
    addUser((prev) => {
      return [newUser, ...prev]
    })
  }

  const handleError = (error) => {
    error.title && error.message ? setError(error) : setError(null)
  }

  return (
    <div>
      {!!error && <ErrorModal title={error.title} content={error.message} handleError={handleError}></ErrorModal>}
      <AddUser onAddUser={addUserHandler} handleError={handleError} />
      {!!usersList.length && <UsersList list={usersList}/>}
    </div>
  );
}

export default App;
