import React from "react";

import styles from "./carddeck.module.css";

export default ({ children }) => (
  <div className={styles.cardDeck}>{children}</div>
);
