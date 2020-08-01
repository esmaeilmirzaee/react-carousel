import React, { Component } from "react";

import Card from "./Card";

class HorizontalCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_card: 1
    };
  }

  componentDidMount() {
    let first_card_clone = this.card_container.children[0].cloneNode(true);
    let last_card_clone = this.card_container.children[
      this.card_container.children.length - 1
    ].cloneNode(true);

    this.card_container.insertBefore(
      last_card_clone,
      this.card_container.children[0]
    );
    this.card_container.append(first_card_clone);
    this.card_container.style.transitionDuration = "0.0s";
    this.card_container.style.transform = `translate(-${350}px)`;
  }

  handle_next = () => {
    if (this.state.current_card < this.card_container.children.length - 1) {
      let new_current_card = this.state.current_card + 1;
      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${350 *
          this.state.current_card}px)`;
        if (
          this.state.current_card ===
          this.card_container.children.length - 1
        ) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.0s";
            this.card_container.style.transform = `translate(-${350}px)`;
            this.setState({ current_card: 1 });
          }, 502);
        }
      });
    } else {
      return;
    }
  };

  handle_previous = () => {
    if (this.state.current_card > 0) {
      let new_current_card = this.state.current_card - 1;
      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${350 *
          this.state.current_card}px)`;
        if (this.state.current_card === 0) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.0s";
            this.card_container.style.transform = `translate(-${350 *
              (this.card_container.children.length - 2)}px)`;
            this.setState({
              current_card: this.card_container.children.length - 2
            });
          }, 502);
        }
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handle_previous}>Prev</button>
        <button onClick={this.handle_next}>Next</button>
        <div className="view-port" style={styles.view_port}>
          <div
            ref={ref_id => (this.card_container = ref_id)}
            className="card-container"
            style={styles.card_container}
          >
            <Card card_number="https://picsum.photos/400/200" />
            <Card card_number="http://picsum.photos/400/200" />
            <Card card_number="https://picsum.photos/300/200" />
            <Card card_number="http://picsum.photos/400/300" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  view_port: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "200px",
    backgroundColor: "red",
    overflow: "hidden"
  },
  card_container: {
    display: "flex",
    flexboxDirection: "row",
    width: "fit-content"
  }
};

export default HorizontalCarousel;
