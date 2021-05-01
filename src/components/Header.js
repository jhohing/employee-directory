import React from "react";
import "../styles/header.css";

function Header() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>Employee Directory</b></h1>
        <p className="lead">select a column heading to sort.</p>
      </div>
    </div>
  </div>
  );
}

export default Header;