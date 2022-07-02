import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error.message));

  }, []);
  return (
    <div className="container">
      <h1>Admin UI</h1>
      <input className="search" type="text" />
      <table className="table">
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          {userData.map((user) => (
            <tr className="border_bottom " key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td><input type="text" className="input" value={user.name} disabled="true"/></td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>edit</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>page</p>
    </div>
  );
};

export default App;
