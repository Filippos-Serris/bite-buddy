import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>BiteBuddy</h1>
        <button>Cart</button>
      </header>
      <imj></imj>
    </React.Fragment>
  );
};

export default Header;
