import Card from "../UI/Card";

import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card cardCss={classes.users}>
      <ul>
        {props.userli.map((users) => (
          <li key={users.id}>
            {users.name} ({users.age} yeras old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
