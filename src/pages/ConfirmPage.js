import React, { useEffect, useState } from "react";

function ConfirmPage() {
  const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch(
      "https://https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js.typicode.com/users"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <div>
        <h3>Details</h3>
        <p>Number of Guests: {users.number}</p>
        <p>Date: {users.date}</p>
        <p>Time: {users.time}</p>
        <p>Additional Request: {users.request}</p>
      </div>
      <div>
        <img alt="Correct Icon"></img>
        <p>Successfully booked</p>
      </div>
    </div>
  );
}

export default ConfirmPage;
