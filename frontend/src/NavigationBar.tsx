import React from "react";
import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

export function NavigationBar(_props: any): JSX.Element {
  return (
    <header className={styles.topBar}>
      <div className={styles.maxWidth}>
        <div className={styles.logo}>oY</div>
        <nav>
          <Link className={styles.navigationItem} to="/">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
