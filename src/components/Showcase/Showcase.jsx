import React, { Component, Fragment } from "react";
import ShowcaseItem from "./ShowcaseItem";

export class Showcase extends Component {
  constructor(props) {
    super(props);

    this.addOffset = this.addOffset.bind(this);
    this.stopScroll = this.stopScroll.bind(this);
    this.myInput = React.createRef();
    this.timer = null;

    this.state = {
      offset: 0,
    };
  }

  addOffset(amount) {
    const { offset } = this.state;

    this.setState({
      offset: Math.min(offset + amount, 0),
    });
    this.timer = setTimeout(this.addOffset, 10, amount);
  }

  stopScroll() {
    clearTimeout(this.timer);
  }

  render() {
    const { offset } = this.state;
    const { className, items } = this.props;
    const style = {
      transform: `translateX(${offset}px)`,
    };

    return (
      <section className="showcase-row">
        <button
          className="showcase-control"
          onMouseDown={() => this.addOffset(10)}
          onMouseUp={this.stopScroll}
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <section className="showcase-wrapper" ref={this.myInput}>
          <div className={"showcase " + (className || "")} style={style}>
            {items.map((item) => (
              <ShowcaseItem key={item.title} {...item} />
            ))}
          </div>
        </section>
        <button
          className="showcase-control"
          onMouseDown={() => this.addOffset(-10)}
          onMouseUp={this.stopScroll}
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </section>
    );
  }
}

export default Showcase;
