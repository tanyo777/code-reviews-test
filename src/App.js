import { useState } from "react";
import User from "./User";

function App() {

  const [value, setValue] = useState("");
  const [users, setUsers] = useState([
    { name: "Tanyo Nikolov", age: 22},
    { name: "Nikolay Georgiev", age: 21},
    { name: "Martin Chuchulski", age: 21}
  ]);


  const changeInputValue = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    setValue(newValue);
  }

  const addUser = (event) => {
    event.preventDefault();
    setUsers(prevState => ([
      ...prevState,
      { name: value, age: 23}
    ]));
    setValue("");
  }

  const deleteUser = (userIndex) => {
    setUsers((prevState) => {
      return prevState.filter((user, index) => index !== userIndex);
    })
  }

  return(
    <div>
      <h1>Test header  </h1>
      {/* Two way data binding */}
      {/* value={}, onChange={} */}
      <input value={value} onChange={changeInputValue}/>
      <button onClick={addUser}>add user</button>
      {users.map((user, index) => {
        return <User name={user.name} age={user.age} index={index} key={index} deleteSelectedUser={deleteUser}/>
      })}
    </div>
  );
}
export default App;