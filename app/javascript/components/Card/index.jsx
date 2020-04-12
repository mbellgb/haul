import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";

import "./card.css";
import styles from "./card.module.css";

const iconProps = {
  size: 30,
  color: "#ffffff",
};

export const Card = ({
  title = "<No title provided>",
  contexts = [],
  icon = <Icon.File {...iconProps} />,
  progress = 0,
  progressMax = 0,
  background = "linear-gradient(45deg,var(--color-red),var(--color-orange))",
  backgroundShade = false,
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    elementRef.current.style.setProperty("--card-background", background);
  });
  const classNames = [styles.card].join(" ");
  return (
    <div className={classNames} ref={elementRef}>
      <h3 className="cardTitle">{title}</h3>
      <p className="cardText">{contexts.map(ctx => `#${ctx}`).join(" ")}</p>
      <div className="flex-horz">
        {progressMax ? (
          <>
            <progress value={progress} max={progressMax} className="flex" />
            <p className="cardText progressText">
              {progress || 0}/{progressMax}
            </p>
          </>
        ) : (
          ""
        )}
        {icon}
      </div>
    </div>
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
