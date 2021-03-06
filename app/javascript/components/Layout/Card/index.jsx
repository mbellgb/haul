import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import * as Icon from "react-feather";

import styles from "./card.module.css";

const iconProps = {
  size: 30,
  color: "#ffffff",
};

const motionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const Card = ({
  title = "<No title provided>",
  subtitle = "",
  contexts = [],
  icon = <Icon.File {...iconProps} />,
  progress = 0,
  progressMax = 0,
  background = "linear-gradient(45deg,var(--color-red),var(--color-orange))",
  backgroundShade = false,
  ...otherProps
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    elementRef.current.style.setProperty("--card-background", background);
  });
  const classNames = [
    styles.card,
    backgroundShade ? styles.cardShade : "",
  ].join(" ");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={motionVariants}
      className={classNames}
      ref={elementRef}
      {...otherProps}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      {subtitle && <p className={styles.cardText}>{subtitle}</p>}
      <p className={styles.contexts}>
        {contexts.map(ctx => `#${ctx}`).join(" ")}
      </p>
      {progressMax ? (
        <>
          <progress value={progress} max={progressMax} />
          <p className={styles.progressText}>
            {progress || 0}/{progressMax}
          </p>
        </>
      ) : (
        ""
      )}
      {icon}
    </motion.div>
  );
};

export default Card;

const basePropTypes = {
  title: PropTypes.string,
  contexts: PropTypes.arrayOf(PropTypes.string),
  background: PropTypes.string,
  backgroundShade: PropTypes.bool,
};

const baseDefaultProps = {
  title: "<No title provided>",
  contexts: [],
  background: "linear-gradient(45deg,var(--color-red),var(--color-orange))",
  backgroundShade: false,
};

export const DocumentCard = props => {
  const icon = <Icon.File {...iconProps} />;
  return <Card icon={icon} {...props} />;
};

export const TextCard = props => {
  const icon = <Icon.FileText {...iconProps} />;
  return <Card icon={icon} {...props} />;
};

export const ListCard = props => {
  const icon = <Icon.CheckSquare {...iconProps} />;
  return <Card icon={icon} {...props} />;
};

export const StashCard = props => {
  const icon = <Icon.Archive {...iconProps} />;
  return <Card icon={icon} {...props} />;
};
