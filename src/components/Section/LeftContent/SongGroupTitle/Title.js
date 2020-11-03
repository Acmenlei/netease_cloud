import { Component } from "react";
import "./title.scss";

class SongGroupTitle extends Component {
  render() {
    return (
      <div className="title">
        <div className="circle"></div>
        <p>{this.props.titleName}</p>
        {this.props.children ? <ul>{this.props.children}</ul> : null}
        <span>更多</span>
      </div>
    );
  }
}

export default SongGroupTitle;
