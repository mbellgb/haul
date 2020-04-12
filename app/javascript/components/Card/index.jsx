import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";

import "./card.css";

const iconProps = {
  size: 30,
  color: "#ffffff",
};

export default class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    contexts: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.node,
    progress: PropTypes.number,
    progressMax: PropTypes.number,
    background: PropTypes.string,
    backgroundShade: PropTypes.bool,
  };
  static defaultProps = {
    title: "<No title provided>",
    contexts: [],
    icon: <Icon.File {...iconProps} />,
    progress: 0,
    progressMax: 0,
    background: "linear-gradient(45deg,var(--color-red),var(--color-orange))",
    backgroundShade: false,
  };

  constructor(props) {
    super(props);
    this.cardEl = React.createRef();
  }

  updateBackground() {
    this.refs.card.style.setProperty(
      "--card-background",
      this.props.background,
    );
  }

  componentDidMount() {
    this.updateBackground();
  }

  componentDidUpdate() {
    this.updateBackground();
  }

  render() {
    const {
      title,
      contexts,
      icon,
      progress,
      progressMax,
      backgroundShade,
    } = this.props;
    return (
      <div className={`card ${backgroundShade ? "shade" : ""}`} ref="card">
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
  }
}

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

export class DocumentCard extends Component {
  static propTypes = basePropTypes;
  static defaultProps = baseDefaultProps;

  render() {
    const icon = <Icon.File {...iconProps} />;
    return <Card icon={icon} {...this.props} />;
  }
}

export class TextCard extends Component {
  static propTypes = basePropTypes;
  static defaultProps = baseDefaultProps;

  render() {
    const icon = <Icon.FileText {...iconProps} />;
    return <Card icon={icon} {...this.props} />;
  }
}

export class ListCard extends Component {
  static propTypes = {
    ...basePropTypes,
    progress: PropTypes.number.isRequired,
    progressMax: PropTypes.number.isRequired,
  };
  static defaultProps = baseDefaultProps;

  render() {
    const icon = <Icon.CheckSquare {...iconProps} />;
    return <Card icon={icon} {...this.props} />;
  }
}

export class StashCard extends Component {
  static propTypes = basePropTypes;
  static defaultProps = baseDefaultProps;

  render() {
    const icon = <Icon.Archive {...iconProps} />;
    return <Card icon={icon} {...this.props} />;
  }
}
