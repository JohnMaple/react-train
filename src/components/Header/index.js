import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.less";

class Header extends React.Component {
  render() {
    const navs = [
      {
        title: "Popular",
        path: "/"
      },
      {
        title: "Battle",
        path: "/battle"
      }
    ];
    const links = navs.map((item, key) => (
      <li key={key}>
        <NavLink to={item.path} activeClassName="active" exact>
          {item.title}
        </NavLink>
      </li>
    ));
    return (
      <div className={styles.header}>
        <ul className={styles.nav}>{links}</ul>
      </div>
    );
  }
}
export default Header;
