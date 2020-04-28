import { Badge } from "react-bootstrap";
import React, { Component } from "react";

export class ShowcaseItem extends Component {
  render() {
    const { title, description, badges } = this.props;

    return (
      <div className="showcase-item">
        <div className="showcase-header">
          <p className="showcase-item-title">{title}</p>
          <p className="showcase-item-description">{description}</p>
        </div>
        <div className="showcase-badges">
          {badges.map((badge) => (
            <Badge key={badge} className="showcase-badge" variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    );
  }
}

ShowcaseItem.defaultProps = {
  title: "",
  description: "",
};

export default ShowcaseItem;
