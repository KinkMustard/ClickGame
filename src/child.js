import React from "react";

export class Child extends React.Component {
  render() {
    return (
      <div className="dabbutton">
        <button
          className="btn btn-outline-success"
          onClick={this.props.onClick}
        >
          dab
        </button>
      </div>
    );
  }
}
