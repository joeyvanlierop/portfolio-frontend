import React, { Component } from "react";
import { Col } from "react-bootstrap";

export class SkillCard extends Component {
  render() {
    const { title, points } = this.props;

    return (
      <Col className="skill-card">
        <div className="skill-card-header">
          <p className="skill-card-title">{title}</p>
          <ul className="skill-card-points">
            {points.map((point) => (
              <li key={point} className="skill-card-point">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Col>
    );
  }
}

export default SkillCard;
