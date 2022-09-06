import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/Addusers";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {

  const [userList, setUserList] = useState([]);

   const onAddUserHandler = (uName, uAge) =>{
    setUserList((prevUserList)=> {
        return [...prevUserList , {name:uName,age:uAge, id:Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList userli={userList}/>
    </div>
  );
}

export default App;
