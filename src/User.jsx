import React from "react";

export function User(props) {
  const options = props.users.map((user, i) => {
    return (
      <option value={user.userName} key={i}>
        {user.userName}
      </option>
    );
  });

  return (
    <select name="" id="" onChange={props.changeUser}>
      {options}
    </select>
  );
}
