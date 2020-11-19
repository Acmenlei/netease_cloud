import React, { Component } from "react";
import "./payListItem.scss";
import Title from "../SongGroupTitle/Title";
import { FormVerify } from "../../FormVerify/formVerify";
import { withRouter } from "react-router-dom";

class PayListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { ReceivedPaylists: [], ReceivedNavigatorTags: [] };
  }
  /* 异步数据接收点 */
  componentWillReceiveProps(nextProps) {
    const { paylists, navigatorTags } = nextProps;
    this.setState({
      ReceivedPaylists: paylists,
      ReceivedNavigatorTags: navigatorTags,
    });
  }

  /* 获取歌单详情 */
  getpayListDetail = (id) => {
    this.props.history.push("/paylistdetail", { id });
  }
  render() {
    /* 推荐歌单列表 */
    const payListItems = this.state.ReceivedPaylists.map((item, index) => (
      <ul key={index}>
        <li onClick={() => this.getpayListDetail(item.id)}>
          <div className="playCount">
            <img src={item.coverImgUrl} alt={item.name} />
            <p>{FormVerify(item.playCount)}</p>
            <i></i>
          </div>
          <p>{item.name}</p>
        </li>
      </ul>
    ));
    /* 音乐类型名称 */
    const MusicTypeName = this.state.ReceivedNavigatorTags.map(
      (item, index) => <li key={index}>{item.name}</li>
    );
    return (
      <div className="payList">
        <Title titleName="推荐歌单">{MusicTypeName}</Title>
        <div className="payListItem">{payListItems}</div>
      </div>
    );
  }
}

export default withRouter(PayListItem);
