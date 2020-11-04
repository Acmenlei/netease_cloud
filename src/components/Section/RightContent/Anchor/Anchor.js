import { Component } from "react";
import { getRequest } from "../../../../Network/BaseConfig";
import "./anchor.scss";

class Anchor extends Component {
  constructor(props) {
    super(props);
    this.state = { AnchorList: [] };
  }
  componentDidMount() {
    getRequest("/dj/toplist/popular?limit=8").then(async (res) => {
      const statusCode = res.data.code;
      if (statusCode === 200) {
        this.setState({ AnchorList: res.data.data.list });
      }
    });
  }
  render() {
    const AnchordataList = this.state.AnchorList.map((item, index) => (
      <li key={index}>
        <img src={item.avatarUrl} alt={item.nickName} />
        <span>{item.nickName}</span>
      </li>
    ));
    return (
      <div className="Anchor">
        <div className="Anchor_title">
          <p>热门主播</p>
        </div>
        <ul>{AnchordataList}</ul>
      </div>
    );
  }
}

export default Anchor;
