import React from "react";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
        justifyContent: "space-around",
      }}
    >
      <img alt="Shop image"></img>

      <section>
        <h4>Doom Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Onling</li>
          <li>Login</li>
        </ul>
      </section>
      <section>
        <h4>Contact</h4>
        <ul>
          <li>Adams</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h4>Social Media</h4>
        <ul>
          <li>Adams</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
