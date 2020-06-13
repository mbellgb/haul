import React from "react";
import { AnimatePresence } from "framer-motion";

import styles from "./carddeck.module.css";

export default ({ children }) => (
  <div className={styles.cardDeck}>
    <AnimatePresence>{children}</AnimatePresence>{" "}
  </div>
);
