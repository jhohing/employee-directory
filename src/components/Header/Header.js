import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Click on column headers to filter by heading
      </p>
    </header>
  );
};

export default Header;