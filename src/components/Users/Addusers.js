import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");

  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const UserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid UserName",
        message: " Please enter a Valid Username & UserAge",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid UserAge",
        message: " Please enter a Valid UserAge",
      });
      return;
    }
    console.log(userName, userAge);
    console.log("form Submitted");
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const errorHandler = () => {
    setError('');
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card cardCss={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={UserNameHandler}
          />

          <label htmlFor="age">UserAge</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={UserAgeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
