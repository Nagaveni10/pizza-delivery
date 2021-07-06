import React from "react";

function NavBar() {
  return (
    <section id="menu">
      <ul className="navbar">
        <li className="list">
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </a>
        </li>
        <li className="list">
          <a
            href="contact.html"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}
export default NavBar;
