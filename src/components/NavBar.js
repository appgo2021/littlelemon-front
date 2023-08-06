import React from "react";

function NavBar() {
  return (
    <nav>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <img src="/assets/Logo.svg" alt="Icon"></img>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default NavBar;
