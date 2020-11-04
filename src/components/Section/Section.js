import React from "react";
import "./section.scss";
import { getRequest } from "../../Network/BaseConfig";
import LeftContent from "./LeftContent/leftContent"
import RightContent from "./RightContent/RightContent";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navigatorTags: [], paylists: [] };
  }
  componentDidMount() {
    /* 获取标签 */
    getRequest("/playlist/hot").then(async (res) => {
      (await res.data.code) === 200
        ? this.setState({ navigatorTags: res.data.tags })
        : console.log();
    });
    /* 默认获取标签的第一页 */
    getRequest("/top/playlist/highquality?&limit=10").then(async (res) => {
      (await res.data.code) === 200
        ? this.setState({ paylists: res.data.playlists })
        : console.log();
    });
  }
  render() {
    return (
      <div className="section">
        <LeftContent
        className="leftContent"
          paylists={this.state.paylists}
          navigatorTags={this.state.navigatorTags}
        />
        <RightContent className="rightContent"/>
      </div>
    );
  }
}

export default Section;
