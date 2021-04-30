import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.scss";

import KoenAvatar from "../../assets/KoenWizard-avatar.svg";

const NavigationBar = (props) => (
  <nav className={classes.NavigationBar}>
    <Link className={classes.Logo} to={"/"}>
      <img src={KoenAvatar} alt="Illustrative face of Koen" />
      <h3>Koen Hoogendoorn</h3>
    </Link>
    <div className={classes.NavigationLinks}>
      <NavLink
        className={classes.NavLink}
        activeClassName={classes.ActiveNavLink}
        exact
        to={"/"}
      >
        Work
      </NavLink>
      <NavLink
        className={classes.NavLink}
        activeClassName={classes.ActiveNavLink}
        exact
        to={"/about-me"}
      >
        About me
      </NavLink>
    </div>
  </nav>
);

export default NavigationBar;
